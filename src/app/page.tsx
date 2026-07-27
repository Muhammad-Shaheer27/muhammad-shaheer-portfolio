import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProject from "@/components/sections/FeaturedProject";
// import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
    <section className="section">
      <div className="container-custom text-center">
        <p className="text-5xl font-bold text-indigo-600">
          More
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          Projects & Experiments
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Alongside my featured projects, I have worked on additional applications,
          university projects, experiments, and private client work across
          full-stack development, backend systems, APIs, and security.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          More projects will be documented and added over time.
        </p>
      </div>
      <Divider />
    </section>

      {/* <section className="section">
        <div className="container-custom text-center">
          <p className="text-5xl font-bold text-indigo-600">
            50+
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Other Projects & Experiments
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Beyond the featured projects, I have built and explored 50+ additional
            projects, experiments, and learning builds across full-stack development,
            backend systems, APIs, security, and modern web technologies.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            More projects will be documented and added over time.
          </p>
        </div>
        <Divider />
      </section> */}

      {/* <Projects /> */}
      <CTA />
    </>
  );
}