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
        I am an FreshGraduaated Software Engineering student at {" "}
        <span className="font-medium">Telkom University</span>, driven by a strong enthusias for{" "}
        <span className="font-medium">UIUX Design and Frontend development</span>.{" "}
        <span className="italic">My favorite part of UIUX and Programming</span> is the build creativity in making designs and 
        problem-solving aspect, <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          FIgma, React, and Next.js
        </span>
        . I am also familiar with JavaScript and TypeScript. I am always looking to
        learn new technologies. 
        And Fresh graduate in Software Engineering with strong technical and communication skills, demonstrating high levels of initiative and innovation. An analytical, adaptable, and detail-oriented individual who excels under pressure, both in team settings and independently. 
        I am currently Field of interests for a{" "}
        <span className="font-medium">full-time position</span> 
        <span className="font-bold italic"> as a Management Trainee, Human Capital, UI/UX Design, Product Designer, Technology Innovation, System Analyst, Quality Assurance, and Digital Banking, Frontend Developer, and IT Support. </span>
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
