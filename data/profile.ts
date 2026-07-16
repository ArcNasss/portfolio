export const profile = {
  name: "Nasril Ilham Saputra",
  called: "Nasss",
  role: "Full-Stack Web Developer",
  greeting: "Hello, I'm Nasril Ilham Saputra 👋🏻",
  headline: "Curious enough to ask what if?, stubborn enough to build it.",
  tagline:
    "Passionate about backend architecture, modern web technologies, and transforming ideas into reliable software.",

  bio: [
    "Hello, I'm Nasril Ilham Saputra, an Informatics student at Politeknik Elektronika Negeri Surabaya (PENS) and a passionate Full-Stack Web Developer who enjoys turning ideas into scalable digital solutions.",
    "My primary expertise lies in Laravel, Next.js, RESTful API development, and modern web technologies. I enjoy designing clean software architecture, building maintainable systems, and continuously improving through real-world projects, freelance work, and self-driven learning.",
    "This portfolio showcases my academic, freelance, and personal projects, reflecting my journey as a developer and my commitment to building software that delivers meaningful value.",
  ],

  email: "nasrililhamsa@icloud.com",
  location: "Tuban, East Java, Indonesia",

  social: {
    github: "https://github.com/ArcNasss",
    linkedin: "", // isi nanti kalau sudah punya
    instagram: "https://instagram.com/nasriillham",
  },
  avatar: "/logo.png",
};


export const heroHooks = [
  { question: "What do I build?", answer: "Scalable web applications." },
  { question: "What do I value?", answer: "Clean architecture." },
  { question: "What do I enjoy?", answer: "Backend development." },
  { question: "What am I exploring?", answer: "System design." },
  { question: "What's my goal?", answer: "Building software that matters." },
];

export const terminalCommands = [
  { command: "whoami", output: "Nasril Ilham Saputra — Full-Stack Developer" },
  { command: "cat focus.txt", output: "Backend architecture & scalable systems" },
  { command: "php artisan about", output: "Laravel enthusiast, clean code advocate" },
  { command: "git log --oneline -1", output: "feat: still shipping, still learning" },
];

export const heroLines = [
  "whoami && echo 'Full-Stack Web Developer'",
  "Curious enough to ask what if, stubborn enough to build it.",
  "Turning late-night ideas into things people actually use.",
  "Currently building with Laravel & Next.js",
];

export const skills = [
  { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS3", icon: "SiCss", color: "#1572B6" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "PHP", icon: "SiPhp", color: "#777BB4" },
  { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF" },
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38BDF8" },
  { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
  { name: "Prisma", icon: "SiPrisma", color: "#2D3748" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "GitHub", icon: "SiGithub", color: "#FFFFFF" },
  { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
  { name: "Unity", icon: "SiUnity", color: "#FFF" },
  { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
];

export const projects = [
  {
    slug: "getskill",
    title: "GetSkill.id",
    year: "2026",
    description:
      "Contributed to the development and maintenance of GetSkill.id during my internship, implementing new features, fixing bugs, and improving the performance of the Laravel-based learning platform.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Git",
    ],
    image: "/projects/getskill.png",
    featured: true,
    link: "getskill.id",
  },
  {
    slug: "smartrt",
    title: "SmartRT",
    year: "2026",
    description:
      "Contributed to the development of SmartRT during my internship. SmartRT is a digital neighborhood management platform that streamlines resident services, announcements, complaints, and administrative workflows for local communities.",
    tech: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "REST API",
      "Git",
    ],
    image: "/projects/smartrt.png",
    featured: true,
    link: "cmsdev-samrt.hummatech.com",
  },
  {
    slug: "lantera",
    title: "Lantera",
    year: "2026",
    description:
      "A digital library management system developed for SMP Negeri 1 Balen. The application simplifies book catalog management, borrowing, returns, and member administration through a modern and user-friendly web interface.",
    tech: [
      "Laravel",
      "Next.js",
      "MySQL",
      "Tailwind CSS",
    ],
    image: "/projects/lantera.png",
    featured: true,
    link: "",
  },
  // {
  //   slug: "real-time-auction-system",
  //   title: "Real-Time Auction System",
  //   year: "2026",
  //   description:
  //     "A scalable online auction platform built using a Spec-Driven Development approach, featuring real-time bidding, seller management, and secure transactions.",
  //   tech: [
  //     "Laravel",
  //     "Next.js",
  //     "MySQL",
  //     "WebSocket",
  //     "Docker",
  //   ],
  //   image: "/projects/auction-system.png",
  //   featured: true,
  //   link: "",
  // },
  
  // {
  //   slug: "laundry-management-system",
  //   title: "Laundry Management System",
  //   year: "2025",
  //   description:
  //     "A web-based laundry management application featuring customer management, transactions, supplier management, taxation, inventory tracking, and role-based access control.",
  //   tech: [
  //     "Laravel",
  //     "Filament",
  //     "MySQL",
  //     "Spatie Permission",
  //   ],
  //   image: "/projects/laundry.png",
  //   featured: false,
  //   link: "",
  // },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building modern web applications from backend architecture to responsive frontend interfaces.",
    points: [
      "RESTful API Development",
      "Authentication & Authorization",
      "Dashboard & Business Applications",
      "Database Design",
    ],
  },
  {
    title: "Laravel Development",
    description:
      "Developing maintainable Laravel applications with clean architecture and best practices.",
    points: [
      "Laravel",
      "Sanctum Authentication",
      "Repository Pattern",
      "Service Layer",
      "Clean Architecture",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Creating fast, responsive, and user-friendly interfaces using modern frontend technologies.",
    points: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
];

type Achievement = {
  title: string;
  subtitle: string;
  year: string;
  image?: string;
  orientation?: "landscape" | "portrait";
};

export const achievements: Achievement[] = [
  {
    title: "Accepted to PENS",
    subtitle:
      "Successfully admitted to Informatics through the SNBP National Admission Program.",
    year: "2026",
    image: "/certificates/sskelulusan.png",
  },
  {
    title: "East Java Provincial LKS Competitor",
    subtitle:
      "Delivered web development solutions for clients while pursuing university studies.",
    year: "2024",
    image: "/certificates/lksprov.jpeg",
  },
  {
    title: "Internship Experience",
    subtitle:
      "Contributed to the development of GetSkill.id, focusing on web application development.",
    year: "2026",
    image: "/certificates/pkl.png",
  },
  {
    title: "Finalist Jagoan Hosting InfraCompetition",
    subtitle:
      "Initiated a software engineering community to encourage learning, collaboration, and knowledge sharing among students.",
    year: "2025",
    image : "/certificates/JHIC1.jpeg"
  },

  
  {
    title: "1st Place, Tuban Regency MTQ",
    subtitle:
      "Won 1st place in the Musabaqah Tilawatil Qur'an (MTQ) in the 5 Juz and Tilawah category, earning the opportunity to represent Tuban Regency at the East Java Provincial MTQ.",
    year: "2025", // sesuaikan
    image: "/certificates/5juz.jpeg",
  },
  {
    title: "1st Place, East Java Provincial MTQ",
    subtitle:
      "Won 1st place in the East Java Provincial Musabaqah Tilawatil Qur'an (MTQ) in the 1 Juz and Tilawah category, demonstrating excellence in Qur'anic recitation and memorization.",
    year: "2021", // sesuaikan
    image: "/certificates/1juz.jpeg",
    orientation: "portrait",

  },
];

export const closingQuote =
  "Keep learning. Keep building. Keep shipping.";