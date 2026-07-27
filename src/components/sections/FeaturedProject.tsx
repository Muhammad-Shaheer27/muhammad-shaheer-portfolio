import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Nain's POS System (Client Project)",
      description:
        "Built a complete role-based business management system for a retail fashion accessories business within a 1-month deadline, integrating POS, inventory, sales, accounting, reporting, and secure authentication.",
      tech: ["React.js", "Node.js", "MongoDB", "JWT"],
      image: "/images/nains-pos.jpg",
      hasDetails: true,
    },
    {
      title: "Secure Password Generator",
      description:
        "Designed and developed a secure password generator with client-side password generation, customizable security options, and a clean user interface.",
      tech: ["JavaScript", "HTML", "CSS", "Security"],
      image: "/images/generate-random-password.jpg",
      github:
        "https://github.com/Muhammad-Shaheer27/secure-password-generator",
      live:
        "https://muhammad-shaheer27.github.io/secure-password-generator/",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>

              {/* Project Image */}
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-600">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-slate-200 px-2 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">

                {/* View Details */}
                {project.hasDetails && (
                  <Link href="/nains-pos">
                    <Button>
                      View Details
                    </Button>
                  </Link>
                )}

                {/* Live Demo */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      Live Demo
                    </Button>
                  </a>
                )}

                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      GitHub
                    </Button>
                  </a>
                )}

              </div>
            </Card>
          ))}
        </div>
      </div>

      <Divider />
    </section>
  );
}