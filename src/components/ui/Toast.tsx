"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

type ToastProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

export default function Toast({ type, message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 20);

    const exitTimer =
      type === "success"
        ? setTimeout(() => setVisible(false), 3000)
        : null;

    const closeTimer =
      type === "success"
        ? setTimeout(onClose, 3350)
        : null;

    return () => {
      clearTimeout(enterTimer);
      if (exitTimer) clearTimeout(exitTimer);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [type, message, onClose]);

  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      aria-live={isSuccess ? "polite" : "assertive"}
      className={`fixed left-1/2 top-5 z-[100] flex w-[calc(100%-2rem)] max-w-md items-start gap-3 rounded-xl border p-4 shadow-xl transition-all duration-300 ease-out ${
        visible
          ? "translate-x-[-50%] translate-y-0 opacity-100"
          : "translate-x-[-50%] translate-y-[-150%] opacity-0"
      } ${
        isSuccess
          ? "border-emerald-200 bg-white text-emerald-800 dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300"
          : "border-red-200 bg-white text-red-800 dark:border-red-800 dark:bg-slate-900 dark:text-red-300"
      }`}
    >
      <Icon className="mt-0.5 shrink-0" size={22} />

      <div className="min-w-0 flex-1">
        <p className="font-semibold">
          {isSuccess ? "Message sent successfully!" : "Message not sent"}
        </p>
        <p className="mt-1 break-words text-sm opacity-90">{message}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="shrink-0 rounded-md p-1 opacity-70 transition hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10"
      >
        <X size={18} />
      </button>
    </div>
  );
}
