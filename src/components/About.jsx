import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <ParallaxTilt
    tiltMaxAngleX={50}
    tiltMaxAngleY={50}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-26 h-26 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </ParallaxTilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* <div className="absolute xs:bottom-5 bottom-0 w-full flex justify-center items-center pr-12">
        <a href="#work" className="w-[35px] h-[64px]">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-3 border-t-[#915EFF] border-b-[#915EFF] border-[transparent]">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
