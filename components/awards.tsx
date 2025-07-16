"use client";

import { awardsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Awards() {
  const { ref } = useSectionInView("Awards");

  return (
    <section
      id="awards"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Awards</SectionHeading>
      <ul className="flex flex-col gap-8 items-center">
        {awardsData.map((award, idx) => (
          <motion.li
            key={idx}
            className="bg-white borderBlack rounded-xl px-8 py-6 text-left shadow-md dark:bg-white/10 dark:text-white/80 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg">{award.title}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {award.issuer} &middot; {award.date}
            </div>
            <p className="text-base">{award.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}