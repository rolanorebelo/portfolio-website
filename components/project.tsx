"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  githubLink
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-[48rem] border border-black/5 rounded-2xl overflow-hidden sm:pr-8 relative hover:from-gray-100 hover:to-gray-200 transition-all duration-300 sm:group-even:pl-8 dark:from-white/5 dark:to-white/10 dark:hover:from-white/10 dark:hover:to-white/15 shadow-lg hover:shadow-2xl">
        <div className="pt-6 pb-8 px-5 sm:pl-12 sm:pr-4 sm:pt-10 sm:pb-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] min-h-[20rem]">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors dark:group-hover:text-white">{title}</h3>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                View Source
              </a>
            )}
          </div>
          <ul className="flex flex-wrap mt-6 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.75] px-3 py-1.5 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/80 hover:bg-black/90 transition-colors"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-xl shadow-2xl
        transition-all duration-300
        group-hover:scale-[1.06]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40
        object-cover"
        />
       
      </section>
    </motion.div>
  );
}