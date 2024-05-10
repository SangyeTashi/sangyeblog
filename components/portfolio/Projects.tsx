import React from "react";
import Card from "./Card";

import superChatImage from "../../public/images/superChatScreenshot.png";
import unsplashImage from "../../public/images/unsplashScreenshot.png";
import todoImage from "../../public/images/todoAppScreenShot.png";
import twitterUiImage from "../../public/images/twitterCloneScreenshot.png";
type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <h3 className="text-4xl font-bold">Projects</h3>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Unsplash Image Search "
          url={"https://my-project-builds.web.app/"}
          description="Image Search and download app built with unsplash API, TailwindCSS, React"
          image={unsplashImage}
        />
        <Card
          title={"Super Chat"}
          url="https://chat-app-4e4b7.web.app/"
          image={superChatImage}
          description="Public Superchat built with firebase realtime database and authentication with ReactJS, TailwindCSS, Recoil"
        />
        <Card
          title="Simple Todo App "
          url={"https://sangye-todos-app.netlify.app/"}
          description="Local Storage todo app built with React, Tailwind and FramerMotion"
          image={todoImage}
        />
        <Card
          title="Twitter UI"
          url={"https://sangye-twitter-ui-clone.netlify.app/"}
          description="Twitter homepage's visual clone with TailwindCSS with random photo and username api using axios "
          image={twitterUiImage}
        />
      </div>
    </div>
  );
};
export default Projects;
