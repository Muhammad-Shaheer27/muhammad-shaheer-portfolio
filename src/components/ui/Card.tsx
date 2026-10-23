// import React from "react";

// export default function Card({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white">
//       {children}
//     </div>
//   );
// }




import React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600">
      {children}
    </div>
  );
}
