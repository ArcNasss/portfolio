# Panduan Starter Portfolio (Next.js)

Struktur project ini terinspirasi dari analisis forenoo.dev, dibangun dengan
Next.js App Router + TypeScript + Tailwind CSS v4 + Framer Motion.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur Folder

```
app/
├── page.tsx                 → Home (hero, featured projects, who I am, skills, achievement, contribution graph)
├── layout.tsx                → Layout global (Sidebar, MobileNav, metadata SEO)
├── globals.css               → Tema warna (edit di sini untuk ganti warna)
├── bookmarks/page.tsx         → Halaman bookmarks/resource favorit
├── projects/
│   ├── page.tsx               → List semua project
│   └── [slug]/page.tsx        → Detail project (dinamis berdasarkan slug)
├── services/page.tsx          → Halaman layanan/skill
└── contact/page.tsx           → Halaman kontak

components/
├── sidebar.tsx                 → Sidebar kiri (avatar, nav, tanggal+lokasi) — desktop
├── mobile-nav.tsx               → Navigasi versi mobile (sidebar disembunyikan di layar kecil)
├── avatar.tsx                   → Avatar foto profil dengan fallback inisial
├── clock.tsx                    → Jam real-time (dipakai di sebelah tombol Contact Me)
├── date-location.tsx            → Widget tanggal + lokasi di bawah sidebar
├── dot-background.tsx           → Background dot dekoratif di halaman Home
├── text-reveal.tsx              → Komponen animasi reveal teks (dipakai di hero)
├── project-card.tsx             → Card untuk menampilkan project
├── skill-badge.tsx               → Badge skill dengan icon brand berwarna (react-icons)
├── achievement-item.tsx          → Item list untuk section Achievement
└── contribution-graph.tsx        → Grafik kontribusi ala GitHub (data dummy)

data/
└── profile.ts                 → SEMUA data personalmu (nama, bio, project, skill, achievement, kontak)
```

## Langkah Kustomisasi (mulai dari sini)

1. **Edit `data/profile.ts`** — ganti semua data dummy dengan datamu:
   nama, role, bio, email, sosial media, daftar project, skill, dan achievement.

2. **Ganti foto avatar** — taruh foto kamu di `public/avatar.png`, lalu isi
   `avatar: "/avatar.png"` di `data/profile.ts`. Kalau dikosongkan, otomatis
   fallback ke avatar inisial huruf.

3. **Ganti gambar project** — taruh screenshot project di `public/projects/`
   lalu update path `image` di `data/profile.ts`.

4. **Ganti warna tema** — edit variabel CSS di `app/globals.css`:
   ```css
   --background: #0a0a0a;   /* warna latar */
   --foreground: #f5f5f5;   /* warna teks utama */
   --muted: #171717;        /* warna card/background sekunder */
   ```

5. **Skill icon** — daftar skill di `data/profile.ts` pakai nama icon dari
   `react-icons/si` (Simple Icons), misalnya `"SiReact"`, `"SiNextdotjs"`.
   Cari nama icon lain di https://react-icons.github.io/react-icons/icons/si

6. **Contribution graph** — datanya masih dummy/acak (`components/contribution-graph.tsx`).
   Kalau mau data asli dari GitHub, kamu bisa fetch dari GitHub API atau
   pakai library seperti `react-github-calendar`.

7. **Font custom (opsional)** — starter ini pakai font sistem supaya build
   selalu jalan tanpa akses internet. Kalau kamu develop di komputer sendiri
   dengan koneksi internet normal, kamu bisa pakai Google Fonts lagi:
   ```tsx
   import { Geist, Geist_Mono } from "next/font/google";
   ```
   lalu terapkan variable-nya ke tag `<html>` di `app/layout.tsx`.

8. **Tambah/hapus project** — cukup edit array `projects` di `data/profile.ts`,
   halaman list & detail akan otomatis mengikuti (karena pakai
   `generateStaticParams`).

## Belajar Konsep Next.js dari Project Ini

- **Server Components (default)** — hampir semua halaman di sini adalah
  Server Component (tidak ada `"use client"` di atasnya), artinya di-render
  di server, bagus untuk SEO.
- **Client Components** — `navbar.tsx` dan `text-reveal.tsx` pakai
  `"use client"` karena butuh interaktivitas (state, event, animasi).
- **Dynamic Routes** — `app/projects/[slug]/page.tsx` menangani semua
  halaman detail project dari satu file, berdasarkan `slug`.
- **generateStaticParams** — dipakai supaya semua halaman detail project
  di-generate sebagai static HTML saat build (bagus untuk performa & SEO).
- **Metadata API** — lihat `app/layout.tsx`, cara Next.js mengatur
  title/description otomatis untuk SEO.

## Deploy

Cara termudah: push ke GitHub lalu import project di https://vercel.com
(gratis untuk project personal, otomatis build & deploy tiap kamu push).

## Next Steps yang Bisa Kamu Coba Sendiri

- Tambah halaman `/blog` untuk belajar MDX + Next.js
- Tambah dark/light mode toggle
- Tambah animasi scroll-triggered pakai `whileInView` dari Framer Motion
- Integrasi form contact dengan email service (Resend/EmailJS)
