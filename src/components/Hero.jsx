import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 squared-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              My <span className="text-[#915EFF]">Portfolio</span>
            </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
              I do web3 security, Blockchain and AI integration,{" "}
              <br className="sm:block hidden" />
              2D/3D Animations, Frontend UI and applications development
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-5 bottom-22 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 border-[#915EFF]">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
