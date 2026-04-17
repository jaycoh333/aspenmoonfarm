import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
          {eyebrow}
        </span>
      )}
      <Tag className="max-w-3xl text-display-md text-balance font-semibold">
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-olive-800/85 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
