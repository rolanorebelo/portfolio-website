import filesharingImg from "@/public/filesharing.png";
import elderappImg from "@/public/elderapp.png";
import flightdelayImg from "@/public/flightdelay.png";
import onlinefashionImg from "@/public/onlinefashionstore.png";
import powergridImg from "@/public/powergrid.png";
import untLogo from "@/public/unt.png";
import vit from "@/public/vit.png";
import dlink from "@/public/dlink.jpg";
import wipro from "@/public/wipro.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
      title: "Software Engineer",
      location: "Wipro Technologies, Bangalore, India",
      description: 
        "Spearheaded front-end development for a meeting management tool within an on-premises video conferencing platform. Implemented and enhanced 12+ robust features while collaborating with backend developers and UI/UX designers, reducing page load time by 20% and increasing user engagement by 30%. Employed technologies including React.js, HTML, CSS, JavaScript, jQuery, Python, Django, and PostgreSQL. Implemented comprehensive unit testing using Chai.js and Mocha.js.",
      icon: wipro,
      date: "September 2020 – August 2023",
    },
    {
      title: "Software Engineering Intern",
      location: "D-Link Ltd., Goa, India",
      description:
        "Contributed to the development and testing of software solutions for D-Link's networking products, including routers, modems, and CCTV systems. Implemented firmware updates with a 100% success rate, and debugged critical software issues resulting in a 25% improvement in system performance. Enhanced functionality and user satisfaction of networking devices.",
      icon: dlink,
      date: "May 2018 – June 2018",
    },

  ]   as const;

  // data.ts or data.js
export const educationData = [
    {
      title: "Master’s of Science in Computer Science and Engineering",
      location: "University of North Texas, Denton, TX",
      description:
        "Expected May 2025. Relevant Courses: Software Engineering, Software Development with AI, ML, Analysis of Computer Algorithms, Intro to Big Data and Data Science.",
      date: "Expected May 2025",
      icon: untLogo,
    },
    {
      title: "Bachelor of Technology in Electronics and Computer Engineering",
      location: "Vellore Institute of Technology, Chennai, India",
      description:
        "Completed June 2020. Relevant Courses: Analysis of Data Structures & Algorithms, Database Management Systems, Computer Organization & Architectures, ML Algorithms, Operating Systems.",
      date: "June 2020",
      icon: vit, // Assuming you want to use a graduation cap icon
    },
  ] as const;
  

  export const projectsData = [
    {
      title: "Elderly Companion App",
      description:
        "Developed a mobile app with ReactNative and Expo, enhancing user engagement by 30%. Integrated Firebase for authentication and real-time data, improving sign-in and data access.",
      tags: ["ReactNative", "Expo", "Firebase", "Figma"],
      imageUrl: elderappImg, // Update with actual image
      demoLink: "https://youtu.be/-ZqYSnEtLQY?si=dJ5cmO2lr27UMDz5", // Add demo link
    },
    {
      title: "File Sharing App",
      description:
        "Created a file-sharing app using Next.js 13 and React.js with a responsive Tailwind CSS UI. Integrated Firebase and Clerk for secure authentication and real-time data synchronization.",
      tags: ["Next.js 13", "React.js", "Tailwind CSS", "Firebase", "Clerk"],
      imageUrl: filesharingImg, // Update with actual image
      demoLink: "https://file-sharing-app-three-xi.vercel.app/", // Add demo link
    },
    {
      title: "Power Management System App",
      description:
        "Built a web app for real-time power management, reducing energy consumption by 25%. Used NodeJS, ExpressJS, and MongoDB, and implemented Web Sockets with Socket.io for real-time control.",
      tags: ["NodeJS", "ExpressJS", "MongoDB", "Socket.io"],
      imageUrl: powergridImg, // Update with actual image
      demoLink: "", // No demo link provided
    },
    {
      title: "Online Fashion Store",
      description:
        "Developed a responsive e-commerce site with HTML, CSS, JavaScript, ReactJS, NodeJS, and MongoDB. Included product selection, checkout, and payment features.",
      tags: ["ReactJS", "NodeJS", "MongoDB"],
      imageUrl: onlinefashionImg, // Update with actual image
      demoLink: "", // No demo link provided
    },
    {
      title: "Flight Delay Prediction using Big Data and Machine Learning",
      description:
        "Created a model to predict flight delays with 20% improved accuracy using big data and ML algorithms like decision trees and random forests.",
      tags: ["Python", "Spark", "Hadoop", "Amazon EMR", "AWS Glue", "Scikit-learn"],
      imageUrl: flightdelayImg, // Update with actual image
      demoLink: "", // No demo link provided
    },
  ] as const;
  
  

// data.ts
export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind CSS",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express.js",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
    "Apache Spark",
    "Hadoop",
    "Jenkins",
    "AWS",
    "Azure",
  ] as const;
  