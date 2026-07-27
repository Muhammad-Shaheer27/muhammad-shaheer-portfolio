import React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white">
      {children}
    </div>
  );
}