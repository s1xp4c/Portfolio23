import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, linkwhite } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  page_link,
}) => {
  return (
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{ minHeight: "300px" }}
    >
      <ParallaxTilt
        tiltMaxAngleX={35}
        tiltMaxAngleY={35}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-[20px]"
        style={{ height: "100%" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute inset-0 flex justify-between">
            <div className="flex justify-start m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer project-link-back"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(page_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer project-link-back"
              >
                <img
                  src={linkwhite}
                  alt="page link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-rows--{n} h-70">
          <div className="mt-5 h-30">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="tags mt-20">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "projects");
