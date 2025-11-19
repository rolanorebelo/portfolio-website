"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const background1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const background1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const background2Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);
  
  // Light mode colors (Pink -> Purple -> Blue -> Pink)
  const lightColors1 = [
    "rgba(251, 226, 227, 0.8)", // #fbe2e3
    "rgba(219, 215, 251, 0.8)", // #dbd7fb
    "rgba(226, 227, 251, 0.8)", // Blue-ish
    "rgba(251, 226, 227, 0.8)",
  ];

  const lightColors2 = [
    "rgba(219, 215, 251, 0.8)", // #dbd7fb
    "rgba(251, 226, 227, 0.8)", // #fbe2e3
    "rgba(215, 251, 251, 0.8)", // Cyan-ish
    "rgba(219, 215, 251, 0.8)",
  ];

  // Dark mode colors (Reddish -> Purplish -> Dark Blue -> Reddish)
  const darkColors1 = [
    "rgba(148, 98, 99, 0.8)", // #946263
    "rgba(103, 99, 148, 0.8)", // #676394
    "rgba(98, 100, 148, 0.8)", // Dark Blue-ish
    "rgba(148, 98, 99, 0.8)",
  ];

  const darkColors2 = [
    "rgba(103, 99, 148, 0.8)", // #676394
    "rgba(148, 98, 99, 0.8)", // #946263
    "rgba(99, 148, 148, 0.8)", // Dark Cyan-ish
    "rgba(103, 99, 148, 0.8)",
  ];

  const background1Color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    theme === "light" ? lightColors1 : darkColors1
  );
  
  const background2Color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    theme === "light" ? lightColors2 : darkColors2
  );

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        style={{
          backgroundColor: background1Color,
          y: background1Y,
          rotate: background1Rotate,
        }}
      />
      <motion.div
        className="fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        style={{
          backgroundColor: background2Color,
          y: background2Y,
          rotate: background2Rotate,
        }}
      />
    </>
  );
}
