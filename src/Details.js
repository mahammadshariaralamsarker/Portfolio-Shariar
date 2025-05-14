import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import profile from "./assets/profile.jpeg";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nextjs from "./assets/techstack/nextjs.png";
// Porject Images
import projectImage1 from "./assets/projects/medi-mart.png";
import projectImage2 from "./assets/projects/Bike Management.png";
import projectImage3 from "./assets/projects/ETicket.png";
import projectImage4 from "./assets/projects/globalAcademia.png";
import projectImage5 from "./assets/projects/storySafari.png";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mahammad Shariar Alam Sarker",
  tagline: "I build things for the web — modern, responsive, and scalable applications using TypeScript, MERN Stack, and  NEXT JS.",
  img: profile,
  about: `As a dedicated Computer Science and Engineering student at the Institute of Science and Technology in Dhanmondi, I have cultivated a strong foundation in software development and problem-solving. Over the past year, I have focused extensively on mastering the MERN stack—MongoDB, Express.js, React, and Node.js—and building dynamic, responsive web applications.

In addition to my proficiency in web development, I am skilled in problem-solving, data structures, object-oriented programming (OOP), and database management systems. These competencies enable me to design efficient algorithms, develop robust software, and effectively manage data in complex systems.

I am passionate about leveraging technology to solve real-world challenges and am eager to collaborate in innovative environments where I can contribute and grow further.

`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mahammad-shariar-alam-sarker-istian/",
  github: "https://github.com/mahammadshariaralamsarker",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/profile.php?id=100087931313836",
};

// Enter your Work Experience here
export const workDetails = [
  /* {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  }, */
  /* {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  }, */
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
  /* {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  }, */
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science and Engineering",
    Company: `Institude of Science and Technology`,
    Location: "Dhaka",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  },
  {
    Position: "Complete Web Development with Jhanker Mahbub",
    Company: "Programming Hero",
    
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2024 - Auguest 2024",
  },
  {
    Position: "Next Level Web Development Level 2",
    Company: "Programming Hero",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2025 - Present",
  },

];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  nextjs: nextjs,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    id: 1,
    title: "Medi Mart",
    image: projectImage1,
    description: `Developed a full-stack role-based e-commerce and bike servicing platform using MERN stack with Next.js and ShurjoPay integration. The system includes separate dashboards for sellers and buyers, secure authentication with JWT, and fine-grained access control for managing products, services, and orders. Implemented ShurjoPay for payment processing, enabling users to complete transactions and receive automated invoices. Users can request bike servicing, receive discounts from sellers, and get feedback from admins after service completion. The application supports full profile management, real-time user-seller interaction, and complete CRUD operations for products and services.`,
    techstack: " React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Radix UI, React Hook Form, Zod,Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Cloudinary, Multer,ShurjoPay API, PDF Invoice (React PDF), Role-based Access Control, Vite, ESLint, Prettier, ts-node-dev, Git, Postman, VS Code",
    previewLink: "https://medi-mart-client-nine.vercel.app/",
    githubLink: "https://github.com/mahammadshariaralamsarker/medi-mart-client",

  },
  {
    id: 2,
    title: "Bike Management",
    image: projectImage2,
    description: `Bike Management: Built a full-stack platform with role-based access control for sellers and buyers, featuring secure authentication using JWT. Sellers can post products, offer bike servicing, and provide personalized discounts in response to user requests. Buyers can request services, accept offers, and confirm orders. Upon service completion, users receive feedback from the admin to ensure service quality and platform trust.`,
    techstack: "React, TypeScript, Tailwind CSS, Redux Toolkit, Radix UI, React Hook Form, Zod,Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Cloudinary, Multer, PDF Invoice (React PDF),  ESLint, Prettier, Git, Postman",
    previewLink: "https://bike-management-client-taupe.vercel.app",
    githubLink: "https://github.com/mahammadshariaralamsarker/BikeManagementClient",
  },
  {
    id: 3,
    title: "E-Ticket",
    image: projectImage3,
    description: `E-Ticket: Your convenient travel companion.
Book bus tickets online, just like Shohoz.com.
Secure payments, hassle-free booking.
Purchase up to 4 tickets simultaneously.
Plan your journey with ease.`,
    techstack: "HTML,Tailwind CSS, JavaScript",
    previewLink: "https://radiant-alfajores-886f89.netlify.app/",
    githubLink: "https://github.com/mahammadshariaralamsarker/E-Ticket",
  },
  {
    id: 4,
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
       previewLink: "https://6525608411ddcb38f9e30cd4--flourishing-caramel-4d2d77.netlify.app/",
      githubLink: "https://github.com/mahammadshariaralamsarker/global_academia",
  },
  {
    id: 5,
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    id: 6,
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    id: 7,
    title: "Project title 7",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mahammadshariaralam@gmail.com",
  phone: "01518788918",
};
