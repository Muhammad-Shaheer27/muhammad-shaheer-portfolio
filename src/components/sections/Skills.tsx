"use client";

import { Code, Server, Shield, Wrench } from "lucide-react";
import Divider from "../ui/Divider";

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
    <section className="pt 12 mb-16 px-6 bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          What I Can Do
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white 
                hover:scale-[1.02] hover:border-indigo-500/40 transition duration-300 shadow-sm hover:shadow-md"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-indigo-400" size={22} />
                  <h3 className="font-semibold text-lg text-slate-900">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700"
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

      <Divider />
    </section>
  );
}