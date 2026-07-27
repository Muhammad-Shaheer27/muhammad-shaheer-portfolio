import Card from "../ui/Card";
import Button from "../ui/Button";
import Divider from "../ui/Divider";

export default function Projects() {
  const projects = [
    {
      title: "Authentication System",
      description:
        "JWT-based authentication with secure login, register, and protected routes.",
    },
    {
      title: "Admin Dashboard",
      description:
        "Role-based dashboard with analytics, user management, and access control.",
    },
    {
      title: "SQL Injection Demo",
      description:
        "Demonstrates vulnerable vs secure queries using prepared statements.",
    },
    {
      title: "REST API Backend",
      description:
        "Structured backend with CRUD operations, validation, and clean architecture.",
    },
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">
          Other Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title}>
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-slate-600 mt-2">
                {project.description}
              </p>

              <div className="mt-4 flex gap-3">
                <Button variant="outline">GitHub</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Divider />    
    </section>
  );
}