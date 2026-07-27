import Button from "../ui/Button";
import Divider from "../ui/Divider";

export default function About() {
  return (
    <section id="about" className="section mb-16 bg-gradient-to-b from-slate-100 to-white">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold text-center tracking-tight">
            About Me
          </h2>

          <p className="mt-6 ml-5 text-justify text-slate-600 leading-relaxed">
            I&apos;m a Full Stack Developer who enjoys building fast, scalable,
            and user-friendly web applications. I focus on writing clean,
            maintainable code and creating real-world projects that solve
            practical problems.
          </p>

          <p className="mt-4 ml-5 text-justify text-slate-600 leading-relaxed">
            Currently, I focus on building real-world web applications and business
            systems, including e-commerce platforms, POS systems, secure APIs, and
            modern full-stack applications.
          </p>

          {/* CONTACT / LINKS */}
          <div className="mt-8 justify-center flex flex-wrap gap-4">
            
            <a rel="noopener"
              href="https://linkedin.com/in/muhammad-shaheer-b922b8307"
              target="_blank"
              className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sheiryarkhan26@gmail.com"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Me
              </Button>
              
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold mb-6 text-slate-800">
            Core Focus Areas
          </h3>

          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3">
              ⚡ <span>Performance Optimization & clean architecture</span>
            </li>
            <li className="flex items-center gap-3">
              🔐 <span>Secure Authentication Systems  (JWT, sessions)</span>
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

      {/* DIVIDER */}
      <Divider />
      {/* <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div> */}
    </section>
  );
}