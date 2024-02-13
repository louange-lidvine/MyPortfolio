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
          <SectionHeading>About me</SectionHeading>
          <p className="mb-3">
              After finishing y O'level I started my journey in{" "}
              <span className="font-medium">Softwate Engineering</span>, I
              decided to pursue my passion for programming. I enrolled in a
              Rwanda Coding Academy and learned{" "}
              <span className="font-medium">full-stack web development</span>.{" "}
              <span className="italic">My favorite part of programming</span> is
              the problem-solving aspect. I{" "}
              <span className="underline">love</span> the feeling of finally
              figuring out a solution to a problem. My core stack is{" "}
              <span className="font-medium">
                  React, Next.js, TypeScript, and MongoDB
              </span>
              . I am also familiar with Flutter and Tailwind css. I am always
              looking to learn new technologies. I am currently diving in{" "}
              <span className="font-medium">Machine Learning with Python</span>{" "}
              as a software developer and future Data Scientist .
          </p>
      </motion.section>
  );
}
