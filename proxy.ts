import {NextRequest, NextResponse} from "next/server";

const SECTIONS = ["portfolio", "mes"] as const;

export function proxy(req: NextRequest) {

    const host = req.headers.get("host") || "";
    const url = req.nextUrl;
    // 로그인 1 guest 만들기
    if (host.startsWith("portfolio.")) {
        url.pathname = `/portfolio${url.pathname === "/" ? "" : url.pathname}`;
        return NextResponse.rewrite(url);
    }
    // 다른 로그인 guest 만들기
    if (host.startsWith("mes.")) {
        url.pathname = `/mes${url.pathname === "/" ? "" : url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 기본 도메인(www, root 등)
    return NextResponse.next();
}

// 필요한 경로만 매칭
export const config = {
    matcher: [
        "/((?!api|_next|_vercel|.*\\..*).*)",
        "/lovely/:path*",
        "/portfolio/:path*",
        "/mes/:path*",
        "/api/lovely/:path*",
        "/api/portfolio/:path*",
        "/api/mes/:path*",
    ],
};