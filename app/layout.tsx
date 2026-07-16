import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import MobileNav from "@/components/mobile-nav";
import { profile } from "@/data/profile";

// Catatan: next/font/google butuh akses internet ke fonts.google.com saat build.
// Kalau lingkunganmu punya koneksi internet normal, kamu bisa pakai kembali
// Geist/Geist Mono dari "next/font/google". Starter ini pakai font sistem dulu
// supaya build selalu jalan di lingkungan manapun.

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.headline,
  icons: {
    icon: profile.avatar,
  },
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
    description: profile.headline,
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full bg-background text-foreground">
        <Sidebar />
        <div className="flex min-h-full flex-1 flex-col sm:pl-64">
          <MobileNav />
          <main className="relative flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
