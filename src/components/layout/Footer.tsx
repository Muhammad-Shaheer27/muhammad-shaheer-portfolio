import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Muhammad Shaheer
        </p>

        {/* Center - Social Icons */}
        <div className="flex gap-4 items-center">

          {/* GitHub */}
          <a rel="noopener"
            href="https://github.com/Muhammad-Shaheer27"
            target="_blank"
            aria-label="GitHub profile"
            title="GitHub"
            className="text-slate-500 hover:text-slate-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.28-1.65-1.28-1.65-1.04-.7.08-.68.08-.68 1.15.08 1.76 1.2 1.76 1.2 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.3-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.65.24 2.87.12 3.17.75.8 1.2 1.82 1.2 3.07 0 4.41-2.68 5.38-5.24 5.67.41.36.77 1.08.77 2.18v3.23c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a rel="noopener"
            href="https://linkedin.com/in/muhammad-shaheer-b922b8307"
            target="_blank"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="text-slate-500 hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.16h.05c.5-.95 1.7-2.16 3.5-2.16 3.75 0 4.44 2.47 4.44 5.68V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24h-4V8z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:sheiryarkhan26@gmail.com"
            aria-label="Send email"
            title="Email"
            className="text-slate-500 hover:text-red-600 transition"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right */}
        <p className="text-sm text-slate-500">
          Built with code, coffee, and curiosity
        </p>
      </div>
    </footer>
  );
}