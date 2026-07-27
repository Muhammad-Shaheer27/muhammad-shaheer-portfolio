import Link from "next/link";
import Image from "next/image";

export default function NainsPOSPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">

        {/* Back to Projects */}
        <Link
          href="/#projects"
          className="text-sm text-slate-500 transition hover:text-slate-900"
        >
          ← Back to Projects
        </Link>

        {/* Hero Section */}
        <section className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Confidential Client Project
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Nain&apos;s POS & Business Management System
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A full-stack business management platform built for a retail
            fashion accessories business, combining point-of-sale, inventory,
            accounting, reporting, and role-based access control.
          </p>
        </section>

        {/* Private System Notice */}
        <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
          <div className="flex gap-4">
            <div className="text-2xl">🔒</div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Private Client System
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                This is a production system developed for a real client. A
                public live demo is not available because the application
                contains role-based access control, accounting workflows,
                inventory operations, and client-specific business data.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                To protect the client&apos;s privacy and system security, this
                case study provides a detailed overview of the system&apos;s
                modules, workflows, architecture, and technical implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Project Visual */}
        <section className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="/images/nains-pos.jpg"
              alt="Nain's POS System dashboard preview"
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* Project Overview */}
        <section className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-center text-3xl font-bold">
            Project Overview
          </h2>

          <p className="mt-6 text-center leading-8 text-slate-600">
            The system was built to centralize the daily operations of a
            retail business into one platform. It allows the business to
            manage sales, purchases, inventory, customers, suppliers,
            accounting transactions, and business reporting.
          </p>
        </section>

        {/* Core Modules */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold">
            Core Modules
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Point of Sale"
              description="Manage sales, customers, invoices, and transaction workflows."
            />

            <FeatureCard
              title="Inventory Management"
              description="Manage products, categories, manufacturers, purchases, and stock."
            />

            <FeatureCard
              title="Accounting"
              description="Handle journal, payment, and receipt vouchers with account reporting."
            />

            <FeatureCard
              title="Business Reports"
              description="Generate purchase, sales, stock, account, and balance sheet reports."
            />

            <FeatureCard
              title="Role-Based Access"
              description="Control access to different system features based on user roles."
            />

            <FeatureCard
              title="Authentication"
              description="Secure authentication and protected system access."
            />
          </div>
        </section>

        {/* My Role */}
        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-bold">
            My Role
          </h2>

          <p className="mt-6 text-center leading-8 text-slate-600">
            I designed and developed the full-stack system, including the
            frontend interface, backend APIs, database structure,
            authentication, role-based access control, business workflows,
            accounting modules, and reporting features.
          </p>
        </section>

        {/* Technology Stack */}
        <section className="mx-auto mt-24 max-w-4xl text-center">
          <h2 className="text-3xl font-bold">
            Technology Stack
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT",
              "REST API",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>
    </div>
  );
}