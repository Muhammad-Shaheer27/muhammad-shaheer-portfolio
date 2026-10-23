import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

export default function Section({
  id,
  children,
  variant = "light",
  className = "",
}: SectionProps) {
  const backgrounds = {
    light:
      "bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900",
    dark:
      "bg-gradient-to-b from-slate-50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950",
  };

  return (
    <section
      id={id}
      className={`relative w-full ${backgrounds[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
