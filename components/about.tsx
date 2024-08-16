"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After completing my Bachelor&apos;s in <span className="font-medium">Electronics and Computer Engineering</span> from Vellore Institute of Technology, I pursued a Master&apos;s in <span className="font-medium">Computer Science and Engineering</span> at the University of North Texas. My journey into software development began with a coding bootcamp where I honed my skills in <span className="font-medium">full-stack web development</span>. 
        <span className="italic">My favorite aspect of development</span> is solving complex problems and building intuitive user experiences. My core technologies include{" "}
        <span className="font-medium">React.js, Next.js, Node.js, and MongoDB</span>, with additional proficiency in TypeScript, Tailwind CSS, and Firebase. I am enthusiastic about learning new technologies and continuously improving my skills.
        Currently, I am exploring <span className="font-medium">AI and machine learning</span> and am open to full-time software development opportunities.
      </p>
      <p>
        <span className="italic">Outside of coding</span>, I enjoy <span className="font-medium">traveling</span>, exploring new places, and trying out new foods. I am passionate about <span className="font-medium">music as well</span>. Additionally, I love <span className="font-medium">video games</span> and watching movies as a way to unwind and relax.
      </p>
    </motion.section>
  );
}
