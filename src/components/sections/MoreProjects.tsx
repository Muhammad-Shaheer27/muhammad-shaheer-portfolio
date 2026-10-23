// import Section from "../ui/Section";

// export default function MoreProjects() {
//   return (
//     <Section id="more-projects" variant="light" className="section">
//       <div className="mx-auto w-full max-w-7xl px-5 py-12 text-center sm:px-6 md:py-16 lg:px-8">
//         <p className="text-4xl font-bold text-indigo-600">
//           More
//         </p>

//         <h2 className="mt-3 text-2xl font-bold">
//           Projects & Experiments
//         </h2>

//         <p className="mx-auto mt-4 w-full max-w-2xl text-center leading-relaxed text-slate-600">
//           Alongside my featured projects, I have worked on additional
//           applications, university projects, experiments, and private client
//           work across full-stack development, backend systems, APIs, and security.
//         </p>

//         <p className="mx-auto mt-4 w-full max-w-2xl text-center text-sm leading-relaxed text-slate-500">
//           More projects will be documented and added over time.
//         </p>
//       </div>
//     </Section>
//   );
// }



import Section from "../ui/Section";

export default function MoreProjects() {
  return (
    <Section id="more-projects" variant="light" className="section">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 text-center sm:px-6 md:py-16 lg:px-8">
        <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          More
        </p>

        <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
          Projects &amp; Experiments
        </h2>

        <p className="mx-auto mt-4 w-full max-w-2xl text-center leading-relaxed text-slate-600 dark:text-slate-300">
          Alongside my featured projects, I have worked on additional
          applications, university projects, experiments, and private client
          work across full-stack development, backend systems, APIs, and security.
        </p>

        <p className="mx-auto mt-4 w-full max-w-2xl text-center text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          More projects will be documented and added over time.
        </p>
      </div>
    </Section>
  );
}
