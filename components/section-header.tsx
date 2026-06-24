import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-plum-900 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 text-ink/75 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
