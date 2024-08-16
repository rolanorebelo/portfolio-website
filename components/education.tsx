// Education.js or Education.tsx
"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
import { educationData } from '@/lib/data'; // Adjust the path if needed
import { useTheme } from "@/context/theme-context";
import { FaGraduationCap } from 'react-icons/fa'; // Import an icon if needed
import Image from 'next/image';

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="education"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => {
          // const { ref, inView } = useInView({
          //   threshold: 0,
          // });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.7rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                dateClassName="dateStyle"
                icon={
                  <Image 
                    src={item.icon} 
                    alt="Icon" 
                    width={60} 
                    height={100}
                   
                   
                  />
                }
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
