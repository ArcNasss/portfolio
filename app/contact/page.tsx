import { Mail, MapPin, Send } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

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
    <div className="mx-auto max-w-5xl px-6 py-16">
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
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 pt-8 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl border border-border bg-muted p-6">
          <h2 className="text-lg font-medium">Send a Message</h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-all duration-300 focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition-all duration-300 focus:border-primary"
              />
            </div>

            <button
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-foreground
                px-5
                py-3
                text-sm
                font-medium
                text-background
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-95
              "
            >
              Send Message

              <Send
                className="
                  h-4
                  w-4
                  transition-all
                  duration-700
                  ease-out
                  group-hover:translate-x-4
                  group-hover:-translate-y-2
                  group-hover:rotate-45
                  group-hover:scale-125
                "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}