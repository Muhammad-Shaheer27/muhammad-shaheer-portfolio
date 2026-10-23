
// import Button from "../ui/Button";
// import Section from "../ui/Section";
// import {
//   Phone,
//   Mail,
//   Linkedin,
//   Github,
//   ArrowRight,
// } from "lucide-react";

// const contactItems = [
//   {
//     label: "EMAIL",
//     value: "sheiryarkhan26@gmail.com",
//     href: "mailto:sheiryarkhan26@gmail.com",
//     icon: Mail,
//   },
//   {
//     label: "PHONE",
//     value: "Let's discuss your project",
//     href: "mailto:sheiryarkhan26@gmail.com",
//     icon: Phone,
//   },
//   {
//     label: "LINKEDIN",
//     value: "Connect professionally",
//     href: "https://linkedin.com/in/muhammad-shaheer-b922b8307",
//     icon: Linkedin,
//   },
//   {
//     label: "GITHUB",
//     value: "Explore my projects",
//     href: "https://github.com/",
//     icon: Github,
//   },
// ];

// export default function Contact() {
//   return (
//     <Section
//   id="contact"
//   variant="dark"
//   className="w-full text-slate-900"
// >
//   <div className="w-full px-4 py-12 sm:px-6 md:py-20 lg:px-8">
//     <div className="mx-auto w-full max-w-6xl">
//           <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
//             {/* Left Column */}
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
//                 Get in touch
//               </p>

//               <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
//                 Let&apos;s{" "}
//                 <span className="text-indigo-600">Connect</span>
//               </h2>

//               <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
//                 Have an idea, a project, or an opportunity in mind?
//                 I build modern web applications, backend systems, and
//                 secure APIs. Let&apos;s talk about how we can work together.
//               </p>

//               {/* Contact Cards */}
//               <div className="mt-5 space-y-3">
//                 {contactItems.map((item) => {
//                   const Icon = item.icon;
//                   const isExternal =
//                     item.label === "LINKEDIN" ||
//                     item.label === "GITHUB";

//                   return (
//                     <a
//                       key={item.label}
//                       href={item.href}
//                       target={isExternal ? "_blank" : undefined}
//                       rel={
//                         isExternal
//                           ? "noopener noreferrer"
//                           : undefined
//                       }
//                       className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600"
//                     >
//                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
//                         <Icon size={21} strokeWidth={1.8} />
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <p className="text-xs font-semibold tracking-widest text-slate-500 transition-colors group-hover:text-indigo-600">
//                           {item.label}
//                         </p>

//                         <p className="mt-1 break-words text-sm font-medium text-slate-800 transition-colors group-hover:text-indigo-600 sm:text-base">
//                           {item.value}
//                         </p>
//                       </div>

//                       <ArrowRight
//                         size={19}
//                         className="shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-indigo-600"
//                       />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Right Column: Contact Form */}
//             <div className="min-w-0">
//               <form
//                 action="mailto:sheiryarkhan26@gmail.com"
//                 method="post"
//                 encType="text/plain"
//                 className="space-y-5"
//               >
//                 <div>
//                   <label
//                     htmlFor="contact-name"
//                     className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
//                   >
//                     Your Name
//                   </label>

//                   <input
//                     id="contact-name"
//                     name="name"
//                     type="text"
//                     autoComplete="name"
//                     required
//                     placeholder="Enter your name"
//                     className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="contact-email"
//                     className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
//                   >
//                     Email Address
//                   </label>

//                   <input
//                     id="contact-email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     placeholder="you@example.com"
//                     className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="contact-subject"
//                     className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
//                   >
//                     Subject
//                   </label>

//                   <input
//                     id="contact-subject"
//                     name="subject"
//                     type="text"
//                     required
//                     placeholder="What is this regarding?"
//                     className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="contact-message"
//                     className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
//                   >
//                     Your Message
//                   </label>

//                   <textarea
//                     id="contact-message"
//                     name="message"
//                     rows={5}
//                     required
//                     placeholder="Tell me about your project..."
//                     className="min-h-[140px] w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>

//                 <Button className="flex w-full items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700">
//                   Send Message
//                   <ArrowRight size={18} />
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }





import Button from "../ui/Button";
import Section from "../ui/Section";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";

const contactItems = [
  {
    label: "EMAIL",
    value: "sheiryarkhan26@gmail.com",
    href: "mailto:sheiryarkhan26@gmail.com",
    icon: Mail,
  },
  {
    label: "PHONE",
    value: "Let's discuss your project",
    href: "mailto:sheiryarkhan26@gmail.com",
    icon: Phone,
  },
  {
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "https://linkedin.com/in/muhammad-shaheer-b922b8307",
    icon: Linkedin,
  },
  {
    label: "GITHUB",
    value: "Explore my projects",
    href: "https://github.com/",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      variant="dark"
      className="w-full text-slate-900 dark:text-slate-100"
    >
      <div className="w-full px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                Get in touch
              </p>

              <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Let&apos;s{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Connect
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">
                Have an idea, a project, or an opportunity in mind?
                I build modern web applications, backend systems, and
                secure APIs. Let&apos;s talk about how we can work together.
              </p>

              {/* Contact Cards */}
              <div className="mt-5 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const isExternal =
                    item.label === "LINKEDIN" ||
                    item.label === "GITHUB";

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-indigo-800 dark:group-hover:bg-indigo-950 dark:group-hover:text-indigo-400">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-widest text-slate-500 transition-colors group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400">
                          {item.label}
                        </p>

                        <p className="mt-1 break-words text-sm font-medium text-slate-800 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400 sm:text-base">
                          {item.value}
                        </p>
                      </div>

                      <ArrowRight
                        size={19}
                        className="shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-400"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="min-w-0">
              <form
                action="mailto:sheiryarkhan26@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this regarding?"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="min-h-[140px] w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400"
                  />
                </div>

                <Button className="flex w-full items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700">
                  Send Message
                  <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
