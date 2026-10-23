// import Button from "../ui/Button";
// import Section from "../ui/Section";

// export default function About() {
//   return (
// //     <section 
// //   id="about" 
// //   className="bg-gradient-to-b from-indigo-50/70 via-indigo-50/30 to-white py-20"
// // >
//     <Section id="about" variant="dark" className="section">
//       <div className="container-custom grid w-full grid-cols-1 items-center gap-12 px-6 py-12 md:px-8 md:grid-cols-2 lg:gap-16 lg:py-12">
        
//         {/* LEFT SIDE */} 
//         <div>
//           <h2 className="text-3xl font-bold text-center tracking-tight">
//             About Me
//           </h2>

//           <p className="mt-6 w-full max-w-prose text-justify leading-relaxed text-slate-600">
//             I&apos;m a Full Stack Developer who enjoys building fast, scalable,
//             and user-friendly web applications. I focus on writing clean,
//             maintainable code and creating real-world projects that solve
//             practical problems.
//           </p>

//           <p className="mt-6 w-full max-w-prose text-justify leading-relaxed text-slate-600">
//             Currently, I focus on building real-world web applications and business
//             systems, including e-commerce platforms, POS systems, secure APIs, and
//             modern full-stack applications.
//           </p>

//           {/* CONTACT / LINKS */}
//           <div className="mt-8 justify-center flex flex-wrap gap-4">
            
//             <a rel="noopener"
//               href="https://linkedin.com/in/muhammad-shaheer-b922b8307"
//               target="_blank"
//               className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="mailto:sheiryarkhan26@gmail.com"
//             >
//               <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//                 Contact Me
//               </Button>
              
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full min-w-0 rounded-2xl bg-slate-50 p-5 shadow-sm sm:p-8">
//           <h3 className="text-lg font-semibold mb-6 text-slate-800">
//             Core Focus Areas
//           </h3>

//           <ul className="space-y-4 text-slate-700">
//             <li className="flex items-center gap-3">
//               ⚡ <span>Performance Optimization & clean architecture</span>
//             </li>
//             <li className="flex items-center gap-3">
//               🔐 <span>Secure Authentication Systems  (JWT, sessions)</span>
//             </li>
//             <li className="flex items-center gap-3">
//               🛒 <span>E-Commerce system design</span>
//             </li>
//             <li className="flex items-center gap-3">
//               📦 <span>Scalable Backend Architecture</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </Section>
//   );
// }





import Button from "../ui/Button";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" variant="dark" className="section">
      <div className="container-custom grid w-full grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-8 lg:gap-16 lg:py-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>

          <p className="mt-6 w-full max-w-prose text-justify leading-relaxed text-slate-600 dark:text-slate-300">
            I&apos;m a Full Stack Developer who enjoys building fast, scalable,
            and user-friendly web applications. I focus on writing clean,
            maintainable code and creating real-world projects that solve
            practical problems.
          </p>

          <p className="mt-6 w-full max-w-prose text-justify leading-relaxed text-slate-600 dark:text-slate-300">
            Currently, I focus on building real-world web applications and
            business systems, including e-commerce platforms, POS systems,
            secure APIs, and modern full-stack applications.
          </p>

          {/* CONTACT / LINKS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              rel="noopener noreferrer"
              href="https://linkedin.com/in/muhammad-shaheer-b922b8307"
              target="_blank"
              className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              LinkedIn
            </a>

            <a href="mailto:sheiryarkhan26@gmail.com">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full min-w-0 rounded-2xl bg-slate-50 p-5 shadow-sm dark:bg-slate-900 sm:p-8">
          <h3 className="mb-6 text-lg font-semibold text-slate-800 dark:text-slate-100">
            Core Focus Areas
          </h3>

          <ul className="space-y-4 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3">
              ⚡ <span>Performance Optimization &amp; clean architecture</span>
            </li>
            <li className="flex items-center gap-3">
              🔐 <span>Secure Authentication Systems (JWT, sessions)</span>
            </li>
            <li className="flex items-center gap-3">
              🛒 <span>E-Commerce system design</span>
            </li>
            <li className="flex items-center gap-3">
              📦 <span>Scalable Backend Architecture</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
