import { tv, type VariantProps } from "tailwind-variants";

const cardArticleVariant = tv({
    base: `
    flex-grow basis-[200px]
    bg-[var(--brand-300)]
    h-[clamp(100px,80vh,700px)]
    min-w-[clamp(400px,calc(100%/3),calc(100%/3))]
    transition-all
  `,
    variants: {
        variant: {
            1: "bg-[var(--brand-300)] hover:bg-[var(--brand-500)]",
            2: "bg-[var(--brand-300)] hover:bg-[var(--brand-500)]",
            3: "bg-[var(--brand-300)] hover:bg-[var(--brand-500)]",
        },
    },
    defaultVariants: {
        variant: 1,
    },
});

interface CardArticleProps extends VariantProps<typeof cardArticleVariant> {
    children: React.ReactNode;
    className?: string;
}

export default function ArticleCard({ children, variant, className }: CardArticleProps) {
    return <article className={cardArticleVariant({ variant, className })}>{children}</article>;
}