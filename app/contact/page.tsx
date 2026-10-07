import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import ContactForm from "@/components/contact-form";

const links = [
  {
    href: `mailto:${profile.email}`,
    label: profile.email,
    icon: Mail,
  },
  {
    href: profile.social.github,
    label: "GitHub",
    icon: SiGithub,
  },
  {
    href: profile.social.linkedin,
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: profile.social.instagram,
    label: "Instagram",
    icon: SiInstagram,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-medium">Contact</h1>

      <p className="mt-2 max-w-lg text-muted-foreground">
        Have a project in mind or interested in collaborating? Feel free to
        reach out through any of the channels below.
      </p>

      <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-2">
        {/* Left Side */}
        <div className="flex h-full flex-col">
          <div className="space-y-3">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-muted p-4 transition-all duration-300 hover:border-primary/40 hover:bg-accent"
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="min-w-0 break-all text-sm">{label}</span>
              </a>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 pt-8 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl border border-border bg-muted p-4 sm:p-6">
          <h2 className="text-lg font-medium">Send a Message</h2>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}