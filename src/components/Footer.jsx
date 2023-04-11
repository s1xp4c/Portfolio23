import React from "react";
import { motion } from "framer-motion";
import { footies } from "../constants";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon, icon2, page_link }) => (
  <div className=" ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="rounded-[20px]"
    >
      <div
        onClick={() => window.open(page_link, "_blank")}
        className="cursor-pointer"
      >
        <div className="w-full  rounded-[10px] py-2 pr-2 items-center flex  flex-row ">
          <img
            src={icon}
            alt="footer-pic"
            className="w-6 h-6 object-contain mx-2"
          />

          <p className="text-secondary text-[13px]">{title}</p>
          <img
            src={icon2}
            alt="footer-pic"
            className="w-4 h-4 object-contain mx-2"
          />
        </div>
      </div>
    </motion.div>
  </div>
);

const Footer = () => {
  return (
    <>
      <div className="w-full green-transparent-pink-gradient p-[1px] rounded-[10px] shadow-card ">
        <div className="bg-tertiary flex rounded-[10px] justify-between">
          {footies.map((footie, index) => (
            <ServiceCard key={footie.title} index={index} {...footie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
