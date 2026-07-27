import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg text-sm font-medium transition",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700",
        variant === "outline" &&
          "border border-slate-300 hover:bg-slate-100",
        className
      )}
    >
      {children}
    </button>
  );
}