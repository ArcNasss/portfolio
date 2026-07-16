import Link from "next/link";
import { services } from "@/data/profile";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-medium">Services</h1>

      <p className="mt-2 text-muted-foreground">
        Here are some of the ways I can help bring your ideas to life.
      </p>

      <div className="mt-10 space-y-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-border bg-muted p-6"
          >
            <h2 className="text-lg font-medium">{service.title}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border p-6 text-center">
        <h2 className="text-lg font-medium">Have a Custom Project?</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Let's discuss your project and find the best solution together.
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}