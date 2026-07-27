import Button from "../ui/Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="section text-center"
    >
      <div className="container-custom justify-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Let’s Build Something Amazing Together
        </h2>

        <p className="mt-6 text-slate-600 text-lg">
          I build scalable, secure, and high-performance web applications.
          If you have an idea or project in mind, let’s turn it into reality.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:sheiryarkhan26@gmail.com"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Me
            </Button>  
          </a>

          <a rel="noopener"
            href="/resume.pdf"
            target="_blank"
          >
            <Button variant="outline">
              View Resume
            </Button>
          </a>
        </div>

        {/* Optional small note */}
        <p className="mt-6 text-sm text-slate-500">
          Available for freelance & collaboration
        </p>
      </div>
    </section>
  );
}