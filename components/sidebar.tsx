"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Wrench, Mail, Bookmark } from "lucide-react";
import Avatar from "@/components/avatar";
import DateLocation from "@/components/date-location";
import { profile } from "@/data/profile";


const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/contact", label: "Contact", icon: Mail },
  // { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
   <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between overflow-y-auto border-r border-border bg-background p-6 sm:flex">
      <div>
        <div className="flex items-center gap-3">
          <Avatar name={profile.name} src={profile.avatar} size={40} />
          <div>
            <p className="text-sm font-medium">{profile.name}</p>
            <p className="text-xs text-muted-foreground">{profile.role}</p>
          </div>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="flex-1">{item.label}</span>
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div>
        <DateLocation />
        <p className="mt-4 text-xs text-muted-foreground">
          Copyright © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </aside>
  );
}
