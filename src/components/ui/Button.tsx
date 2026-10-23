


// import React from "react";
// import clsx from "clsx";

// type Props = {
//   children: React.ReactNode;
//   variant?: "primary" | "outline";
//   className?: string;
// };

// export default function Button({
//   children,
//   variant = "primary",
//   className,
// }: Props) {
//   return (
//     <button
//       className={clsx(
//         "rounded-lg px-6 py-3 text-sm font-medium transition",
//         variant === "primary" &&
//           "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
//         variant === "outline" &&
//           "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800",
//         className
//       )}
//     >
//       {children}
//     </button>
//   );
// }









import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "rounded-lg px-6 py-3 text-sm font-medium transition",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
        variant === "outline" &&
          "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800",
        className
      )}
    >
      {children}
    </button>
  );
}
