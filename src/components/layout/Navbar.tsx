// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FileText, Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";
// import Button from "../ui/Button";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Projects", href: "/#projects" },
//   { label: "Contact", href: "/#contact" },
// ];

// const githubUrl = "https://github.com/Muhammad-Shaheer27";

// export default function Navbar() {
//   const [isImageOpen, setIsImageOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setIsImageOpen(false);
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscape);
//     document.body.style.overflow = isImageOpen ? "hidden" : "";

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//       document.body.style.overflow = "";
//     };
//   }, [isImageOpen]);

//   const closeMenu = () => setIsMenuOpen(false);

//   const githubIcon = (
//     <svg
//       viewBox="0 0 24 24"
//       width="20"
//       height="20"
//       fill="currentColor"
//       aria-hidden="true"
//       className="shrink-0"
//     >
//       <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z" />
//     </svg>
//   );

//   return (
//     <>
//         <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">      <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
//           {/* Brand */}
//           <div className="flex shrink-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setIsImageOpen(true)}
//               className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-indigo-100 transition hover:ring-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
//               aria-label="Open profile picture"
//             >
//               <Image
//                 src="/my-image.jpg"
//                 alt="Muhammad Shaheer"
//                 fill
//                 sizes="40px"
//                 className="object-cover"
//               />
//             </button>

//             <Link
//               href="/"
//               onClick={closeMenu}
//               className="group"
//               aria-label="Shaheer.dev home"
//             >
//               <span className="block text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-slate-100">
//                 Shaheer
//                 <span className="text-indigo-600">.dev</span>
//               </span>
//               <span className="hidden text-xs text-slate-500 sm:block dark:text-slate-400">
//                 Developer Portfolio
//               </span>
//             </Link>
//           </div>

//           {/* Desktop navigation */}
//           <nav
//             aria-label="Main navigation"
//             className="hidden items-center gap-7 lg:flex xl:gap-9"
//           >
//             {navLinks.map((link, index) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className={`relative py-2 text-sm font-medium transition-colors ${
//                   index === 0
//                     ? "text-indigo-600"
//                     : "text-slate-600 hover:text-indigo-600"
//                 }`}
//               >
//                 {link.label}
//                 {index === 0 && (
//                   <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-indigo-600" />
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop actions */}
//           <div className="hidden items-center gap-2 sm:flex">
// <button
// type="button"
// onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// aria-label={
//   mounted
//     ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
//     : "Toggle light and dark mode"
// }
// className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
// >
// {mounted && theme === "dark" ? (
//   <Sun size={18} />
// ) : (
//   <Moon size={18} />
// )}
// </button>
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Open resume in a new tab"
//               className="inline-flex"
//             >
//               <Button
//                 variant="outline"
//                 className="!inline-flex !h-10 !items-center !justify-center !gap-2 !rounded-lg !px-3 !py-0 !text-sm"
//               >
//                 <FileText size={16} />
//                 Resume
//               </Button>
//             </a>

//             <a
//               href={githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit GitHub profile in a new tab"
//               className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-0 text-sm text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
//             >
//               {githubIcon}
//               <span>GitHub</span>
//             </a>
//           </div>

//           {/* Mobile menu toggle */}
//           <button
//             type="button"
//             onClick={() => setIsMenuOpen((open) => !open)}
//             className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 sm:hidden"
//             aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
//             aria-expanded={isMenuOpen}
//             aria-controls="mobile-navigation"
//           >
//             {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
//           </button>
//         </div>

//         {/* Mobile navigation */}
//         {isMenuOpen && (
//           <div
//             id="mobile-navigation"
//             className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg sm:hidden"
//           >
//             <nav aria-label="Mobile navigation" className="space-y-1">
//               {navLinks.map((link, index) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
//                     index === 0
//                       ? "bg-indigo-50 text-indigo-700"
//                       : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>

//             <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={closeMenu}
//                 className="inline-flex min-w-0"
//               >
//                 <Button
//                   variant="outline"
//                   className="!flex !h-10 !w-full !items-center !justify-center !gap-2 !rounded-lg !px-2 !py-0 !text-sm"
//                 >
//                   <FileText size={16} />
//                   Resume
//                 </Button>
//               </a>

//               <a
//                 href={githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={closeMenu}
//                 aria-label="Visit GitHub profile"
//                 title="GitHub"
//                 className="inline-flex h-10 min-w-0 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-2 py-0 text-sm text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
//               >
//                 {githubIcon}
//                 <span>GitHub</span>
//               </a>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Fullscreen profile image preview */}
//       {isImageOpen && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-5 backdrop-blur-sm"
//           onClick={() => setIsImageOpen(false)}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Profile picture preview"
//         >
//           <button
//             type="button"
//             onClick={() => setIsImageOpen(false)}
//             className="absolute right-5 top-5 rounded-full p-2 text-4xl leading-none text-white transition hover:bg-white/10 hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//             aria-label="Close profile picture"
//           >
//             ×
//           </button>

//           <div
//             className="relative h-[75vh] w-[90vw] max-w-3xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <Image
//               src="/my-image.jpg"
//               alt="Muhammad Shaheer"
//               fill
//               priority
//               sizes="90vw"
//               className="object-contain"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }









"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const githubUrl = "https://github.com/Muhammad-Shaheer27";

export default function Navbar() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = isImageOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isImageOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeIcon =
    mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  const themeLabel =
    mounted && theme === "dark" ? "Light mode" : "Dark mode";

  const githubIcon = (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
        <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-indigo-100 transition hover:ring-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-label="Open profile picture"
            >
              <Image
                src="/my-image.jpg"
                alt="Muhammad Shaheer"
                fill
                sizes="40px"
                className="object-cover"
              />
            </button>

            <Link
              href="/"
              onClick={closeMenu}
              className="group"
              aria-label="Shaheer.dev home"
            >
              <span className="block text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-xl">
                Shaheer
                <span className="text-indigo-600">.dev</span>
              </span>
              <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
                Developer Portfolio
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                }`}
              >
                {link.label}
                {index === 0 && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-indigo-600" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${themeLabel === "Dark mode" ? "dark" : "light"} mode`}
              title={themeLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {themeIcon}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
              className="inline-flex"
            >
              <Button
                variant="outline"
                className="!inline-flex !h-10 !items-center !justify-center !gap-2 !rounded-lg !px-3 !py-0 !text-sm"
              >
                <FileText size={16} />
                Resume
              </Button>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile in a new tab"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-0 text-sm text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              {githubIcon}
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg dark:border-slate-800 dark:bg-slate-950 sm:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    index === 0
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                      : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
              {/* Mobile theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 min-w-0 items-center justify-center gap-2 rounded-lg border border-slate-200 px-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Toggle light and dark mode"
              >
                {themeIcon}
                <span>{themeLabel}</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex min-w-0"
              >
                <Button
                  variant="outline"
                  className="!flex !h-10 !w-full !items-center !justify-center !gap-2 !rounded-lg !px-2 !py-0 !text-sm"
                >
                  <FileText size={16} />
                  Resume
                </Button>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                aria-label="Visit GitHub profile"
                title="GitHub"
                className="col-span-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-2 py-0 text-sm text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
              >
                {githubIcon}
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Fullscreen profile image preview */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-5 backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile picture preview"
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute right-5 top-5 rounded-full p-2 text-4xl leading-none text-white transition hover:bg-white/10 hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close profile picture"
          >
            ×
          </button>

          <div
            className="relative h-[75vh] w-[90vw] max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/my-image.jpg"
              alt="Muhammad Shaheer"
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
