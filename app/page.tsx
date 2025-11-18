import ArticleCard from "@/app/components/ArticleCard";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // const containerCss: React.CSSProperties = {
  //     display: "flex",
  //     flexWrap: "wrap",
  //     backgroundColor: "var(--brand-300)",
  //     width: "100%",
  //     justifyContent: "center",
  //     alignItems: "center",
  // };
  //
  // const cardDivCss: React.CSSProperties = {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     flexWrap: "wrap",
  //     padding: "40px 0"
  // }
  //
  // const boxCss: React.CSSProperties = {
  //     position: "relative",
  //     width: "320px",
  //     height: "400px",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     margin: "40px 30px",
  //     transition: "0.5s"
  // }
  //
  // const spanCss: React.CSSProperties = {
  //     display: "block",
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     zIndex: 5,
  //     pointerEvents: "none",
  // };
  //
  // const contentCss: React.CSSProperties = {
  //     position: "relative",
  //     left: 0,
  //     padding: "20px 40px",
  //     background: "rgba(255, 255, 255, 0.05)",
  //     backdropFilter: "blur(10px)",
  //     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  //     borderRadius: "8px",
  //     zIndex: 1,
  //     transition: "0.5s",
  //     color: "#fff",
  // };

  return (
    <>
      {/*<section style={containerCss}>*/}
      {/*    /!*<article style={articleCss}>*!/*/}
      {/*    /!*    <div className="container" style={cardDivCss}>*!/*/}
      {/*    /!*        <div className="box box1" style={boxCss}>*!/*/}
      {/*    /!*            <span style={spanCss}></span>*!/*/}
      {/*    /!*            <div className="content" style={contentCss}>*!/*/}
      {/*    /!*                <h2>Lovely</h2>*!/*/}
      {/*    /!*                <p>추억공간</p>*!/*/}
      {/*    /!*                <a href="#">Read More</a>*!/*/}
      {/*    /!*            </div>*!/*/}
      {/*    /!*        </div>*!/*/}
      {/*    /!*    </div>*!/*/}

      {/*    /!*</article>*!/*/}
      {/*    <ArticleCard variant={1}>*/}
      {/*        <div className="container" style={cardDivCss}>*/}
      {/*            <div className="box box2" style={boxCss}>*/}
      {/*                <span style={spanCss}></span>*/}
      {/*                <div className="content" style={contentCss}>*/}
      {/*                    <h2>Portfolio</h2>*/}
      {/*                    <p>개발자 이재영 포트폴리오</p>*/}
      {/*                    <a href="#">Read More</a>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </ArticleCard>*/}

      {/*    <ArticleCard variant={2}>*/}
      {/*        <div className="container" style={cardDivCss}>*/}
      {/*            <div className="box box3" style={boxCss}>*/}
      {/*                <span style={spanCss}></span>*/}
      {/*                <div className="content" style={contentCss}>*/}
      {/*                    <h2>MES</h2>*/}
      {/*                    <p>MES 서브 프로젝트</p>*/}
      {/*                    <a href="#">Read More</a>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </ArticleCard>*/}

      {/*</section>*/}

      {/*<style jsx>{`*/}
      {/*    .box::before {*/}
      {/*        content: ' ';*/}
      {/*        position: absolute;*/}
      {/*        top: 0;*/}
      {/*        left: 50px;*/}
      {/*        width: 50%;*/}
      {/*        height: 100%;*/}
      {/*        text-decoration: none;*/}
      {/*        background: #fff;*/}
      {/*        border-radius: 8px;*/}
      {/*        transform: skewX(15deg);*/}
      {/*        transition: 0.5s;*/}
      {/*    }*/}

      {/*    .box::after {*/}
      {/*        content: '';*/}
      {/*        position: absolute;*/}
      {/*        top: 0;*/}
      {/*        left: 50px;*/}
      {/*        width: 50%;*/}
      {/*        height: 100%;*/}
      {/*        background: #fff;*/}
      {/*        border-radius: 8px;*/}
      {/*        transform: skewX(15deg);*/}
      {/*        transition: 0.5s;*/}
      {/*        filter: blur(30px);*/}
      {/*    }*/}

      {/*    .box:hover:before,*/}
      {/*    .box:hover:after {*/}
      {/*        transform: skewX(0deg);*/}
      {/*        left: 20px;*/}
      {/*        width: calc(100% - 90px);*/}

      {/*    }*/}

      {/*    .container .box1:nth-child(1):before,*/}
      {/*    .container .box1:nth-child(1):after {*/}
      {/*        background: linear-gradient(400deg, var(--brand-500), var(--brand-600))*/}
      {/*    }*/}

      {/*    .container .box2:nth-child(1):before,*/}
      {/*    .container .box2:nth-child(1):after {*/}
      {/*        background: linear-gradient(250deg, var(--brand-400), var(--brand-500))*/}
      {/*    }*/}

      {/*    .container .box3:nth-child(1):before,*/}
      {/*    .container .box3:nth-child(1):after {*/}
      {/*        background: linear-gradient(100deg, var(--brand-400), var(--brand-600))*/}
      {/*    }*/}

      {/*    .container .box span::before {*/}
      {/*        content: '';*/}
      {/*        position: absolute;*/}
      {/*        top: 0;*/}
      {/*        left: 0;*/}
      {/*        width: 0;*/}
      {/*        height: 0;*/}
      {/*        border-radius: 8px;*/}
      {/*        background: rgba(255, 255, 255, 0.1);*/}
      {/*        backdrop-filter: blur(10px);*/}
      {/*        opacity: 0;*/}
      {/*        transition: 0.1s;*/}
      {/*        animation: animate 2s ease-in-out infinite;*/}
      {/*        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08)*/}
      {/*    }*/}

      {/*    .container .box:hover span::before {*/}
      {/*        top: -50px;*/}
      {/*        left: 50px;*/}
      {/*        width: 100px;*/}
      {/*        height: 100px;*/}
      {/*        opacity: 1;*/}
      {/*    }*/}

      {/*    .container .box span::after {*/}
      {/*        content: '';*/}
      {/*        position: absolute;*/}
      {/*        bottom: 0;*/}
      {/*        right: 0;*/}
      {/*        width: 100%;*/}
      {/*        height: 100%;*/}
      {/*        border-radius: 8px;*/}
      {/*        background: rgba(255, 255, 255, 0.1);*/}
      {/*        backdrop-filter: blur(10px);*/}
      {/*        opacity: 0;*/}
      {/*        transition: 0.5s;*/}
      {/*        animation: animate 2s ease-in-out infinite;*/}
      {/*        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);*/}
      {/*        animation-delay: -1s;*/}
      {/*    }*/}

      {/*    .container .box:hover span:after {*/}
      {/*        bottom: -50px;*/}
      {/*        right: 50px;*/}
      {/*        width: 100px;*/}
      {/*        height: 100px;*/}
      {/*        opacity: 1;*/}
      {/*    }*/}

      {/*    @keyframes animate {*/}
      {/*        0%, 100% {*/}
      {/*            transform: translateY(10px);*/}
      {/*        }*/}

      {/*        50% {*/}
      {/*            transform: translate(-10px);*/}
      {/*        }*/}
      {/*    }*/}

      {/*    .container .box:hover .content {*/}
      {/*        left: -25px;*/}
      {/*        padding: 60px 40px;*/}
      {/*    }*/}

      {/*    .container .box .content h2 {*/}
      {/*        font-size: 2em;*/}
      {/*        color: #fff;*/}
      {/*        margin-bottom: 10px;*/}
      {/*    }*/}

      {/*    .container .box .content p {*/}
      {/*        font-size: 1.1em;*/}
      {/*        margin-bottom: 10px;*/}
      {/*        line-height: 1.4em;*/}
      {/*    }*/}

      {/*    .container .box .content a {*/}
      {/*        display: inline-block;*/}
      {/*        font-size: 1.1em;*/}
      {/*        color: #111;*/}
      {/*        background: #fff;*/}
      {/*        padding: 10px;*/}
      {/*        border-radius: 4px;*/}
      {/*        text-decoration: none;*/}
      {/*        font-weight: 700;*/}
      {/*        margin-top: 5px;*/}
      {/*    }*/}

      {/*    .container .box .content a:hover {*/}
      {/*        background: #ffcf4d;*/}
      {/*        border: 1px solid rgba(255, 0, 88, 0.4);*/}
      {/*        box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);*/}
      {/*    }*/}
      {/*`}</style>*/}
    </>
  );
}
