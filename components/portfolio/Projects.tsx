"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Card from "./Card";
import superChatImage from "../../public/images/superChatScreenshot.png";
import unsplashImage from "../../public/images/unsplashScreenshot.png";
import todoImage from "../../public/images/todoAppScreenShot.png";
import twitterUiImage from "../../public/images/twitterCloneScreenshot.png";
type ProjectsProps = {};

const cardVariant: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 300, damping: 24 },
  },
  hidden: { y: 50, opacity: 0 },
};
const projectTitleVariant: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: 0.1,
    },
  },
  hidden: { x: -50, opacity: 0 },
};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <motion.div className="flex flex-col items-center space-y-20">
      <motion.h3
        variants={projectTitleVariant}
        initial={"hidden"}
        viewport={{ once: true }}
        whileInView={"visible"}
        className="text-4xl font-bold"
      >
        Projects
      </motion.h3>
      <motion.div
        variants={{
          ...cardVariant,
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              type: "spring",
              stiffness: 300,
              damping: 24,
              staggerChildren: 0.2,
              delayChildren: 0.1,
            },
          },
        }}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 md:gap-12 lg:grid-cols-3"
      >
        <Card
          title="Unsplash Image Search "
          url={"https://my-project-builds.web.app/"}
          description="Image Search and download app built with unsplash API, TailwindCSS, React"
          image={unsplashImage}
          variant={cardVariant}
        />
        <Card
          variant={cardVariant}
          title={"Super Chat"}
          url="https://chat-app-4e4b7.web.app/"
          image={superChatImage}
          description="Public Superchat built with firebase realtime database and authentication with ReactJS, TailwindCSS, Recoil"
        />
        <Card
          variant={cardVariant}
          title="Simple Todo App "
          url={"https://sangye-todos-app.netlify.app/"}
          description="Local Storage todo app built with React, Tailwind and FramerMotion"
          image={todoImage}
        />
        <Card
          variant={cardVariant}
          title="Twitter UI"
          url={"https://sangye-twitter-ui-clone.netlify.app/"}
          description="Twitter homepage's visual clone with TailwindCSS with random photo and username api using axios "
          image={twitterUiImage}
        />
      </motion.div>
    </motion.div>
  );
};
export default Projects;
