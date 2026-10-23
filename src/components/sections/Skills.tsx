// "use client";

// import { Code, Server, Shield, Wrench } from "lucide-react";
// import Section from "@/components/ui/Section";

// export default function Skills() {
//   const skills = [
//     {
//       title: "Frontend Development",
//       icon: Code,
//       description:
//         "Building responsive, scalable, and high-performance user interfaces.",
//       tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
//     },
//     {
//       title: "Backend Development",
//       icon: Server,
//       description:
//         "Designing robust APIs and scalable backend systems for real-world applications.",
//       tech: ["Node.js", "Express", "MongoDB", "REST APIs"],
//     },
//     {
//       title: "Security & Authentication",
//       icon: Shield,
//       description:
//         "Implementing secure authentication and protecting applications from common vulnerabilities.",
//       tech: ["JWT", "OWASP Basics", "Input Validation"],
//     },
//     {
//       title: "Tools & Workflow",
//       icon: Wrench,
//       description:
//         "Using modern tools to build, test, and maintain production-ready applications.",
//       tech: ["Git", "GitHub", "Postman", "VS Code"],
//     },
//   ];

//   return (
//     <Section id="skills" variant="light" className="px-6 pt-12 lg:py-12 pb-12 text-slate-900">
//         <div className="max-w-6xl mx-auto">
        
//         <h2 className="text-3xl font-bold text-center mb-12">
//           What I Can Do
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skills.map((skill) => {
//             const Icon = skill.icon;

//             return (
//               <div
//                 key={skill.title}
//                 className="p-6 rounded-2xl border border-slate-200 bg-white 
//                 hover:scale-[1.02] hover:border-indigo-500/40 transition duration-300 shadow-sm hover:shadow-md"
//               >
//                 {/* Icon + Title */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <Icon className="text-indigo-400" size={22} />
//                   <h3 className="font-semibold text-lg text-slate-900">
//                     {skill.title}
//                   </h3>
//                 </div>

//                 {/* Description */}
//                 <p className="text-slate-600 text-sm leading-relaxed">
//                   {skill.description}
//                 </p>

//                 {/* Tech Badges */}
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {skill.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="text-xs bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//     </Section>
//   );
// }




"use client";

import { Code, Server, Shield, Wrench } from "lucide-react";
import Section from "@/components/ui/Section";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      icon: Code,
      description:
        "Building responsive, scalable, and high-performance user interfaces.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: Server,
      description:
        "Designing robust APIs and scalable backend systems for real-world applications.",
      tech: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Security & Authentication",
      icon: Shield,
      description:
        "Implementing secure authentication and protecting applications from common vulnerabilities.",
      tech: ["JWT", "OWASP Basics", "Input Validation"],
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      description:
        "Using modern tools to build, test, and maintain production-ready applications.",
      tech: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <Section
      id="skills"
      variant="light"
      className="px-6 pb-12 pt-12 text-slate-900 dark:text-slate-100 lg:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
          What I Can Do
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-400/50"
              >
                {/* Icon + Title */}
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="text-indigo-500 dark:text-indigo-400" size={22} />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {skill.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
