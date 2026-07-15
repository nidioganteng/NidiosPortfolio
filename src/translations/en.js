export const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm Nidio",
    taglineDesktop: "Crafting Digital Worlds\nOne Pixel at a Time",
    taglineMobile: "Love to Create\nDigital Experiences",
    roles: ["Web Developer", "Frontend Developer", "UI/UX Designer"],
  },
  about: {
    title: "About Me",
    bio: {
      name: "Hi, I'm Nidio Tilman",
      description:
        "I'm a web developer passionate about crafting responsive, accessible, and user-friendly digital experiences. With a strong grasp of frontend tools like React and Tailwind CSS, combined with an eye for UI/UX design using Figma, I turn ideas into functional and visually engaging interfaces.",
    },
    codeCraft: "CODE CRAFT",
    timezone: {
      title: "Time Zone",
      description: "I'm based in Jupiter, and open to remote work worldwide",
    },
    cta: "Do you want to start a project together?",
    tools: {
      title: "Tools & Technologies",
      description:
        "I craft modern web apps with a mix of design and code using HTML, CSS, JavaScript, React, Python, and Figma.",
    },
    copyEmail: {
      copy: "Copy Email Address",
      copied: "Email has Copied",
    },
  },
  projects: {
    title: "My Projects",
    readMore: "Read More",
    viewProject: "View Project",
    items: [
      {
        id: 1,
        title: "E-commerce Platform",
        description:
          "An e-commerce platform that connects small retailers with suppliers, making it easy to purchase essential goods at affordable prices.",
        subDescription: [
          "BetaZeta is a user-friendly e-commerce platform built with HTML, JavaScript, and CSS, designed to connect small retailers with suppliers of essential goods. It features an intuitive UI/UX, a responsive layout, and a streamlined \"Buy Now\" function that instantly connects buyers to sellers via WhatsApp, complete with seller location details and comprehensive product listings.",
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
      },
      {
        id: 3,
        title: "Web Development Agency Platform",
        description:
          "A web development agency website where clients can explore services, get in touch, and book a project with ease.",
        subDescription: [
          "Codeblock is a web development agency platform built with React, Tailwind CSS, and JavaScript. It presents the agency's services in a clean and professional interface, allowing potential clients to learn about available offerings, reach out via contact, and submit a booking request to kickstart their web project.",
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
      },
      {
        id: 5,
        title: "Integrated Travel Booking & Management Platform",
        description:
          "A full-stack travel booking platform where users can browse trips, book with Stripe payments, and track their journey history — all managed through a comprehensive admin dashboard.",
        subDescription: [
          "Mijn Amor is a fully responsive travel platform built with Laravel, Tailwind CSS, and MySQL. Users must register to access the platform, where they can browse travel products, book trips by submitting passenger details and travel dates, and complete payment via Stripe. Confirmed bookings appear in the user's personal travel page, showing departure details and a WhatsApp group link for trip coordination. Users can also view their past journeys through a track record page and contact the admin directly one-on-one. On the admin side, the dashboard provides a full overview of bookings, revenue, and user activity. Admins can manage travel products and track records with full CRUD capabilities — including titles, descriptions, photos, pricing, and WhatsApp links — as well as monitor all registered users and track payment statuses across all transactions.",
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
      },
    ],
  },
  contact: {
    title: "Contact Me",
    description:
      "Whether you're looking to build a new website, improve your existing platform, or just want to say hello, feel free to reach out.",
    name: { label: "Full Name", placeholder: "Your Name" },
    email: { label: "Email", placeholder: "Your email address" },
    message: { label: "Message", placeholder: "Share your thoughts..." },
    send: "Send",
    sending: "Sending...",
    success: "Your message has been sent!",
    error: "Something went wrong!",
  },
  footer: {
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    copyright: "© 2025 Nidio Tilman. All rights reserved.",
  },
};
