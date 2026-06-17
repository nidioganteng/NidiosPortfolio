import { asset } from "../utils/assets";

export const myProjects = [

  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "An e-commerce platform that connects small retailers with suppliers, making it easy to purchase essential goods at affordable prices.",
    subDescription: [
      "BetaZeta is a user-friendly e-commerce platform built with HTML, JavaScript, and CSS, designed to connect small retailers with suppliers of essential goods. It features an intuitive UI/UX, a responsive layout, and a streamlined “Buy Now” function that instantly connects buyers to sellers via WhatsApp, complete with seller location details and comprehensive product listings.",
    ],
    href: "https://betazeta.carrd.co/",
    logo: "",
    image: asset("assets/projects/betazeta.png"),
    tags: [
      {
        id: 1,
        name: "HTML",
        path: asset("assets/logos/html5.svg"),
      },
      {
        id: 2,
        name: "CSS",
        path: asset("assets/logos/css3.svg"),
      },
      {
        id: 3,
        name: "JavaScript",
        path: asset("assets/logos/javascript.svg"),
      },
    ],
  },
  {
    id: 2,
    title: "Decentralized Medical Data Access Platform",
    description:
      "A blockchain-powered platform that gives patients full ownership and control of their medical records for secure, seamless sharing across healthcare providers.",
    subDescription: [
      "Medical Chain ID is a blockchain-based platform developed with Motoko, React, Tailwind CSS, and Vite, enabling patients to securely own and manage their medical records. It offers advanced encryption, passwordless authentication, and granular access controls, allowing seamless and secure sharing of health data across different healthcare institutions.",
    ],
    href: "https://medicalchainid.com/",
    logo: "",
    image: asset("assets/projects/medicalchain.png"),
    tags: [
      {
        id: 1,
        name: "React",
        path: asset("assets/logos/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: asset("assets/logos/tailwindcss.svg"),
      },
      {
        id: 3,
        name: "Vite",
        path: asset("assets/logos/vitejs.svg"),
      },
      {
        id: 4,
        name: "Motoko",
        path: asset("assets/logos/motoku.png"),
      },
    ],
  },
  {
    id: 3,
    title: "Web Development Agency Platform",
    description: 
      "A web development agency website where clients can explore services, get in touch, and book a project with ease.",
    subDescription: [
      "Codeblock is a web development agency platform built with React, Tailwind CSS, and JavaScript. It presents the agency's services in a clean and professional interface, allowing potential clients to learn about available offerings, reach out via contact, and submit a booking request to kickstart their web project.",
    ],
    href: "",
    logo: "",
    image: asset("assets/projects/codeblock.png"),
    tags: [
      {
        id: 1,
        name: "React",
        path: asset("assets/logos/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: asset("assets/logos/tailwindcss.svg"),
      },
      {
        id: 3,
        name: "JavaScript",
        path: asset("assets/logos/javascript.svg"),
      },
    ],
  },
  {
    id: 4,
    title: "Adaptive Learning Platform for Children with Autism",
    description: 
      "An interactive learning platform tailored for children with autism, combining video lessons and quizzes in a clear, accessible interface.",
    subDescription: [
      "NeuraBloom is a web application built with Laravel, Tailwind CSS, and MySQL, designed to support children with autism through structured learning. Each module pairs a video lesson with an immediate follow-up quiz, reinforcing understanding in a consistent flow. The UI is thoughtfully crafted to be visually clear and autism-friendly, ensuring content is easy to navigate and engage with.",
    ],
    href: "",
    logo: "",
    image: asset("assets/projects/neurabloom.png"),
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: asset("assets/logos/laravel.png"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: asset("assets/logos/tailwindcss.svg"),
      },
      {
        id: 3,
        name: "MySQL",
        path: asset("assets/logos/mysql.svg"),
      },
    ],
  },
  {
    id: 5,
    title: "Integrated Travel Booking & Management Platform",
    description: 
      "A full-stack travel booking platform where users can browse trips, book with Stripe payments, and track their journey history — all managed through a comprehensive admin dashboard.",
    subDescription: [
      "Mijn Amor is a fully responsive travel platform built with Laravel, Tailwind CSS, and MySQL. Users must register to access the platform, where they can browse travel products, book trips by submitting passenger details and travel dates, and complete payment via Stripe. Confirmed bookings appear in the user's personal travel page, showing departure details and a WhatsApp group link for trip coordination. Users can also view their past journeys through a track record page and contact the admin directly one-on-one. On the admin side, the dashboard provides a full overview of bookings, revenue, and user activity. Admins can manage travel products and track records with full CRUD capabilities — including titles, descriptions, photos, pricing, and WhatsApp links — as well as monitor all registered users and track payment statuses across all transactions.",
    ],
    href: "",
    logo: "",
    image: asset("assets/projects/travelwebapp.png"),
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: asset("assets/logos/laravel.png"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: asset("assets/logos/tailwindcss.svg"),
      },
      {
        id: 3,
        name: "MySQL",
        path: asset("assets/logos/mysql.svg"),
      },
    ],
  },
  {
    id: 6,
    title: "AI-Powered Skin Cancer Detection Platform",
    description:
      "A two-stage AI-powered web app that detects skin cancer risk through symptom analysis and image classification, with actionable health recommendations.",
    subDescription: [
      "YourSkin is a skin cancer detection platform built with React, Tailwind CSS, Python, and MySQL. It uses a two-stage detection approach: Stage 1 applies a Random Forest model to analyze 12 clinical symptoms and assess risk level. If risk is detected, Stage 2 activates an EfficientNet-B3 deep learning model where users upload a skin image for precise cancer type classification. Based on the result, the platform provides tailored recommendations — either advising a doctor visit or offering preventive care tips.",
    ],
    href: "",
    logo: "",
    image: asset("assets/projects/yourskin.png"),
    tags: [
      {
        id: 1,
        name: "React",
        path: asset("assets/logos/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: asset("assets/logos/tailwindcss.svg"),
      },
      {
        id: 3,
        name: "Python",
        path: asset("assets/logos/python.svg"),
      },
      {
        id: 4,
        name: "MySQL",
        path: asset("assets/logos/mysql.svg"),
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: asset("assets/socials/whatsApp.svg"),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nidio-tilman-b666a7377/",
    icon: asset("assets/socials/linkedIn.svg"),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kezarstorski/?next=%2F",
    icon: asset("assets/socials/instagram.svg"),
  },
];

