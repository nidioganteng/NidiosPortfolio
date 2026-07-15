import { asset } from "../utils/assets";

export const myProjectsStatic = [
  {
    id: 1,
    href: "https://betazeta.carrd.co/",
    logo: "",
    image: asset("assets/projects/betazeta.webp"),
    tags: [
      { id: 1, name: "HTML", path: asset("assets/logos/html5.svg") },
      { id: 2, name: "CSS", path: asset("assets/logos/css3.svg") },
      { id: 3, name: "JavaScript", path: asset("assets/logos/javascript.svg") },
    ],
  },
  {
    id: 2,
    href: "https://github.com/nidioganteng/MedicalChainID.git",
    logo: "",
    image: asset("assets/projects/medicalchain.webp"),
    tags: [
      { id: 1, name: "React", path: asset("assets/logos/react.svg") },
      { id: 2, name: "TailwindCSS", path: asset("assets/logos/tailwindcss.svg") },
      { id: 3, name: "Vite", path: asset("assets/logos/vitejs.svg") },
      { id: 4, name: "Motoko", path: asset("assets/logos/motoku.webp") },
    ],
  },
  {
    id: 3,
    href: "https://codeeblock.com/",
    logo: "",
    image: asset("assets/projects/codeblock.webp"),
    tags: [
      { id: 1, name: "React", path: asset("assets/logos/react.svg") },
      { id: 2, name: "TailwindCSS", path: asset("assets/logos/tailwindcss.svg") },
      { id: 3, name: "JavaScript", path: asset("assets/logos/javascript.svg") },
    ],
  },
  {
    id: 4,
    href: "https://neurabloom.vercel.app/",
    logo: "",
    image: asset("assets/projects/neurabloom.webp"),
    tags: [
      { id: 1, name: "Laravel", path: asset("assets/logos/laravel.webp") },
      { id: 2, name: "TailwindCSS", path: asset("assets/logos/tailwindcss.svg") },
      { id: 3, name: "MySQL", path: asset("assets/logos/mysql.svg") },
    ],
  },
  {
    id: 5,
    href: "https://mijnamortravel.com/",
    logo: "",
    image: asset("assets/projects/travelwebapp.webp"),
    tags: [
      { id: 1, name: "Laravel", path: asset("assets/logos/laravel.webp") },
      { id: 2, name: "TailwindCSS", path: asset("assets/logos/tailwindcss.svg") },
      { id: 3, name: "MySQL", path: asset("assets/logos/mysql.svg") },
    ],
  },
  {
    id: 6,
    href: "",
    logo: "",
    image: asset("assets/projects/yourskin.webp"),
    tags: [
      { id: 1, name: "React", path: asset("assets/logos/react.svg") },
      { id: 2, name: "TailwindCSS", path: asset("assets/logos/tailwindcss.svg") },
      { id: 3, name: "Python", path: asset("assets/logos/python.svg") },
      { id: 4, name: "MySQL", path: asset("assets/logos/mysql.svg") },
    ],
  },
];

export const mySocials = [
  { name: "WhatsApp", href: "", icon: asset("assets/socials/whatsApp.svg") },
  { name: "Linkedin", href: "https://www.linkedin.com/in/nidio-tilman-b666a7377/", icon: asset("assets/socials/linkedIn.svg") },
  { name: "Instagram", href: "https://www.instagram.com/kezarstorski/?next=%2F", icon: asset("assets/socials/instagram.svg") },
];
