"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const RoleText = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [textWidth, setTextWidth] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const textRef = useRef<HTMLSpanElement | null>(null); // Proper typing for ref
    const texts = [
      { role: 'developer', color: '#06b6d4' }, // Tomato
      { role: 'learner', color: '#22c55e' },   // SteelBlue
      { role: 'thinker', color: '#fbbf24' },   // LimeGreen
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      }, 3000); // Change text every 3 seconds
    
      return () => clearInterval(interval);
    }, [texts.length]); // Include texts.length in the dependency array
    

    useEffect(() => {
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth);
      }
    }, [textIndex]);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640); // Set breakpoint for small screens (sm: 640px in Tailwind)
      };
      window.addEventListener("resize", handleResize);
      handleResize(); // Check screen size initially
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <motion.span
      className="relative inline-block w-full sm:w-auto" // Make width responsiv
      style={{
        width: textWidth,
        marginBottom: isSmallScreen ? "1.6rem" : "2.4rem",
        marginRight: "0.5rem",
      }} // Set the width dynamically
        initial={{ width: 0 }} // Start width at 0
        animate={{ width: textWidth }} // Animate width to the current text width
        transition={{ duration: 0.5 }} // Adjust duration as needed
      >
        <AnimatePresence>
          <motion.span
            key={texts[textIndex].role}
            initial={{ opacity: 0, x: 20 }} // Start with a slight horizontal offset
            animate={{ opacity: 1, x: 0 }} // Move to normal position
            exit={{ opacity: 0, x: -20 }} // Exit with a slight horizontal offset
            transition={{ duration: 0.5 }}
            style={{ color: texts[textIndex].color }} // Set the text color
            className="absolute top-0 left-0 text-center sm:text-left" // Center text on small screens
            ref={textRef} // Ref to measure the width
          >
            {texts[textIndex].role}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    );
};

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
      <section
        ref={ref}
        id="home"
        className="mb-32 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              <Image
                src="/profilepic.jpg"
                alt="Rolano portrait"
                width="256"
                height="256"
                quality="95"
                priority={true}
                className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(0,0,0,0.4)] hover:scale-110 transition-all duration-300 dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
              />
            </motion.div>
          </div>
        </div>
  
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold block">
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 inline-block"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Hello, I&apos;m Rolano.
            </motion.span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </span>
          <span className="">I&apos;m a{" "}<RoleText /> 
          with <span className="font-bold">3+ years</span> of experience.</span>
          <span className="block">I enjoy building <span className="italic">apps</span>.</span>
        </motion.h1>
  
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all shadow-lg hover:shadow-xl"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
  
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 shadow-md hover:shadow-lg"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
  
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-md hover:shadow-lg"
            href="https://www.linkedin.com/in/rolanorebelo/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
  
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-md hover:shadow-lg"
            href="https://github.com/rolanorebelo/"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    );
  }
