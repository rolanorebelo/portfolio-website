"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  
  const background1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const background1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const background2Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);
  
  const background1Color = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(251, 226, 227, 0.5)",
      "rgba(219, 215, 251, 0.5)",
      "rgba(226, 251, 227, 0.5)",
      "rgba(251, 239, 215, 0.5)",
      "rgba(251, 226, 227, 0.5)",
    ]
  );
  
  const background2Color = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(219, 215, 251, 0.5)",
      "rgba(226, 251, 227, 0.5)",
      "rgba(251, 239, 215, 0.5)",
      "rgba(251, 226, 227, 0.5)",
      "rgba(219, 215, 251, 0.5)",
    ]
  );

  return (
    <>
      <motion.div
        className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        style={{
          backgroundColor: background1Color,
          y: background1Y,
          rotate: background1Rotate,
        }}
      />
      <motion.div
        className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        style={{
          backgroundColor: background2Color,
          y: background2Y,
          rotate: background2Rotate,
        }}
      />
    </>
  );
}
