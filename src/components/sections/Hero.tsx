// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Section from "@/components/ui/Section";
// import {
//   ArrowRight,
//   Code2,
//   GraduationCap,
//   Mail,
//   ShieldCheck,
// } from "lucide-react";

// const headlines = [
//   "modern web applications.",
//   "scalable backend systems.",
//   "secure & reliable software.",
// ];

// export default function Hero() {

// const [headlineIndex, setHeadlineIndex] = useState(0);
// const [displayedText, setDisplayedText] = useState(headlines[0]);
// const [isDeleting, setIsDeleting] = useState(false);

// useEffect(() => {
//   // Wait 4 seconds before erasing each complete phrase.
//   const delay = !isDeleting && displayedText === headlines[headlineIndex]
//     ? 3000
//     : isDeleting
//       ? 35
//       : 65;

//   const timeout = window.setTimeout(() => {
//     if (!isDeleting) {
//       setDisplayedText((text) => text.slice(0, -1));

//       if (displayedText.length <= 1) {
//         setIsDeleting(true);
//       }
//     } else {
//       const nextIndex = (headlineIndex + 1) % headlines.length;
//       const nextText = headlines[nextIndex];

//       setDisplayedText((text) => {
//         const updated = nextText.slice(0, text.length + 1);

//         if (updated === nextText) {
//           setIsDeleting(false);
//           setHeadlineIndex(nextIndex);
//         }

//         return updated;
//       });
//     }
//   }, delay);

//   return () => window.clearTimeout(timeout);
// }, [displayedText, headlineIndex, isDeleting]);

//   return (
//     // <section
//     //   id="home"
//     //   className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-indigo-50/20 to-white"
//     // >
//     <Section
//       id="home"
//       variant="light"
//       className="scroll-mt-24 overflow-hidden"
//     >
//       <div className="mx-auto w-full px-6 pb-4 pt-4 sm:px-10 sm:pb-20 sm:pt-6 lg:px-12 lg:pb-12 lg:pt-8">
//         <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
//           {/* Left: Introduction */}
//           <div className="relative z-10">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-2">
//               <span
//                 className="h-2 w-2 rounded-full bg-emerald-500"
//                 aria-hidden="true"
//               />
//               <span className="text-xs font-medium text-slate-600 sm:text-sm">
//                 Full-Stack Developer
//               </span>
//               <span className="text-slate-300">·</span>
//               <span className="text-xs font-medium text-slate-600 sm:text-sm">
//                 Open to Opportunities
//               </span>
//             </div>

//             <h1 className="text-1xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
//               Hi, I&apos;m Muhammad <br/>Shaheer.
//             </h1>

//             <div className="mt-5 min-h-[44px] sm:min-h-[52px]">
//               <h2 className="whitespace-nowrap text-1xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
//                 <span className="text-indigo-600">I build </span>
//                 <span className="text-indigo-600">
//                   {displayedText}
//                   <span
//                     className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-indigo-600"
//                     aria-hidden="true"
//                   />
//                 </span>
//               </h2>
//             </div>

//             <p className="mt-5 max-w-xl text-base text-justify leading-8 text-slate-600 sm:text-lg">
//               I&apos;m a Computer Science graduate and full-stack developer
//               focused on building modern web applications, reliable backend
//               systems, and practical software solutions. I&apos;m also
//               developing my expertise in application security.
//             </p>

//             {/* Call-to-action buttons */}
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link
//                 href="/#projects"
//                 className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/15 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
//               >
//                 Explore My Projects
//                 <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/#contact"
//                 className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
//               >
//                 <Mail size={18} />
//                 Contact Me
//               </Link>
//             </div>
//           </div>

//           {/* Right: Circular profile photo */}
//           <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 sm:py-10">
//             {/* Decorative rings */}
//             <div
//               className="absolute h-[290px] w-[290px] rounded-full border border-indigo-200/70 sm:h-[370px] sm:w-[370px]"
//               aria-hidden="true"
//             />
//             <div
//               className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-indigo-200 sm:h-[420px] sm:w-[420px]"
//               aria-hidden="true"
//             />

//             <div
//               className="absolute h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl sm:h-80 sm:w-80"
//               aria-hidden="true"
//             />

//             {/* Actual photo */}
//             <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-[7px] border-white bg-slate-100 shadow-[0_15px_60px_-15px_rgba(79,70,229,0.35)] ring-1 ring-indigo-100 sm:h-80 sm:w-80">
//               <Image
//                 src="/my-image.jpg"
//                 alt="Muhammad Shaheer, full-stack developer"
//                 fill
//                 priority
//                 sizes="(max-width: 640px) 256px, 320px"
//                 className="object-cover"
//               />
//             </div>

//             {/* Floating technology cards */}
//             <div className="absolute left-0 top-10 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 sm:-left-2">
//               <Code2 className="text-cyan-500" size={23} />
//               <span className="text-xs font-semibold text-slate-700">
//                 React
//               </span>
//             </div>

//             <div className="absolute right-0 top-14 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 sm:-right-2">
//               <Code2 className="text-emerald-600" size={23} />
//               <span className="text-xs font-semibold text-slate-700">
//                 Node.js
//               </span>
//             </div>

//             <div className="absolute bottom-12 left-0 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 sm:-left-4">
//               <Code2 className="text-green-600" size={23} />
//               <span className="text-xs font-semibold text-slate-700">
//                 MongoDB
//               </span>
//             </div>

//             <div className="absolute bottom-8 right-0 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 sm:-right-3">
//               <ShieldCheck className="text-indigo-600" size={23} />
//               <span className="text-xs font-semibold text-slate-700">
//                 AppSec
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Credentials and focus areas */}
//         <div className="mt-20 grid gap-6 sm:grid-cols-3 sm:gap-6 lg:mt-18">
//           <div className="flex items-center gap-4 sm:justify-center">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50">
//               <GraduationCap className="text-indigo-600" size={25} />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-900">BSCS</h3>
//               <p className="mt-1 text-sm text-slate-500">
//                 KUST · CGPA 3.67
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 border-slate-200/80 sm:justify-center sm:border-x sm:px-4">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50">
//               <Code2 className="text-indigo-600" size={25} />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-900">MERN Stack</h3>
//               <p className="mt-1 text-sm text-slate-500">
//                 Full-stack development
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 sm:justify-center">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50">
//               <ShieldCheck className="text-indigo-600" size={25} />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-900">AppSec</h3>
//               <p className="mt-1 text-sm text-slate-500">
//                 Growing security expertise
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }









"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Mail,
  ShieldCheck,
} from "lucide-react";

const headlines = [
  "modern web applications.",
  "scalable backend systems.",
  "secure & reliable software.",
];

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(headlines[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const delay =
      !isDeleting && displayedText === headlines[headlineIndex]
        ? 3000
        : isDeleting
          ? 35
          : 65;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText((text) => text.slice(0, -1));

        if (displayedText.length <= 1) {
          setIsDeleting(true);
        }
      } else {
        const nextIndex = (headlineIndex + 1) % headlines.length;
        const nextText = headlines[nextIndex];

        setDisplayedText((text) => {
          const updated = nextText.slice(0, text.length + 1);

          if (updated === nextText) {
            setIsDeleting(false);
            setHeadlineIndex(nextIndex);
          }

          return updated;
        });
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [displayedText, headlineIndex, isDeleting]);

  return (
    <Section
      id="home"
      variant="light"
      className="scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto w-full px-6 pb-4 pt-4 sm:px-10 sm:pb-20 sm:pt-6 lg:px-12 lg:pb-12 lg:pt-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          {/* Left: Introduction */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-2 dark:border-indigo-900 dark:bg-indigo-950/60">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">
                Full-Stack Developer
              </span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">
                Open to Opportunities
              </span>
            </div>

            <h1 className="text-1xl font-bold leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-5xl xl:text-6xl">
              Hi, I&apos;m Muhammad <br />Shaheer.
            </h1>

            <div className="mt-5 min-h-[44px] sm:min-h-[52px]">
              <h2 className="whitespace-nowrap text-1xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
                <span className="text-indigo-600 dark:text-indigo-400">
                  I build{" "}
                </span>
                <span className="text-indigo-600 dark:text-indigo-400">
                  {displayedText}
                  <span
                    className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-indigo-600 dark:bg-indigo-400"
                    aria-hidden="true"
                  />
                </span>
              </h2>
            </div>

            <p className="mt-5 max-w-xl text-base text-justify leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              I&apos;m a Computer Science graduate and full-stack developer
              focused on building modern web applications, reliable backend
              systems, and practical software solutions. I&apos;m also
              developing my expertise in application security.
            </p>

            {/* Call-to-action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/15 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                Explore My Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400 dark:focus-visible:ring-offset-slate-950"
              >
                <Mail size={18} />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: Circular profile photo */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 sm:py-10">
            {/* Decorative rings */}
            <div
              className="absolute h-[290px] w-[290px] rounded-full border border-indigo-200/70 dark:border-indigo-800/70 sm:h-[370px] sm:w-[370px]"
              aria-hidden="true"
            />
            <div
              className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-indigo-200 dark:border-indigo-800 sm:h-[420px] sm:w-[420px]"
              aria-hidden="true"
            />

            <div
              className="absolute h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/15 sm:h-80 sm:w-80"
              aria-hidden="true"
            />

            {/* Actual photo */}
            <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-[7px] border-white bg-slate-100 shadow-[0_15px_60px_-15px_rgba(79,70,229,0.35)] ring-1 ring-indigo-100 dark:border-slate-800 dark:bg-slate-900 dark:ring-indigo-900 sm:h-80 sm:w-80">
              <Image
                src="/my-image.jpg"
                alt="Muhammad Shaheer, full-stack developer"
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />
            </div>

            {/* Floating technology cards */}
            <div className="absolute left-0 top-10 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30 sm:-left-2">
              <Code2 className="text-cyan-500" size={23} />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                React
              </span>
            </div>

            <div className="absolute right-0 top-14 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30 sm:-right-2">
              <Code2 className="text-emerald-600" size={23} />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Node.js
              </span>
            </div>

            <div className="absolute bottom-12 left-0 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30 sm:-left-4">
              <Code2 className="text-green-600" size={23} />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                MongoDB
              </span>
            </div>

            <div className="absolute bottom-8 right-0 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30 sm:-right-3">
              <ShieldCheck className="text-indigo-600 dark:text-indigo-400" size={23} />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                AppSec
              </span>
            </div>
          </div>
        </div>

        {/* Credentials and focus areas */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3 sm:gap-6 lg:mt-18">
          <div className="flex items-center gap-4 sm:justify-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950">
              <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={25} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                BSCS
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                KUST · CGPA 3.67
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-slate-200/80 dark:border-slate-800 sm:justify-center sm:border-x sm:px-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950">
              <Code2 className="text-indigo-600 dark:text-indigo-400" size={25} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                MERN Stack
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Full-stack development
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:justify-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950">
              <ShieldCheck className="text-indigo-600 dark:text-indigo-400" size={25} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                AppSec
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Growing security expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
