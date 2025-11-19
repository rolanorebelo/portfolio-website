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
      className="mb-32 max-w-[48rem] text-center leading-8 sm:mb-44 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-5 text-lg">
        After completing my Bachelor&apos;s in <span className="font-medium">Electronics and Computer Engineering</span> from Vellore Institute of Technology, I pursued a Master&apos;s in <span className="font-medium">Computer Science and Engineering</span> at the University of North Texas. <span className="italic">My favorite aspect of development</span> is solving complex problems and building intuitive, user-centric experiences that make a real impact.
      </p>
      <p className="mb-5 text-lg">
        My core technologies include <span className="font-medium">React.js, Next.js, Node.js, Spring Boot, and PostgreSQL</span>, with expertise in <span className="font-medium">TypeScript, Tailwind CSS, and FastAPI</span>. I&apos;m currently working extensively with <span className="font-medium">AI/ML technologies</span> including <span className="font-medium">OpenAI GPT-4, LangChain, RAG (Retrieval-Augmented Generation), Pinecone vector databases, and Supabase</span>. I&apos;m also experienced with cloud platforms like <span className="font-medium">AWS and Azure</span>, and always enthusiastic about learning cutting-edge technologies.
      </p>
      <p className="text-lg">
        <span className="italic">Outside of coding</span>, I&apos;m passionate about <span className="font-medium">fitness and working out</span>, which helps me stay focused and energized. I enjoy <span className="font-medium">traveling</span>, exploring new places, and trying diverse cuisines. Music is a big part of my life, and I love <span className="font-medium">video games and movies</span> as a way to unwind and spark creativity.
      </p>
    </motion.section>
  );
}
