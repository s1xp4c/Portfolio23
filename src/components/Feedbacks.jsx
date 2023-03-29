import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  iphone,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`rounded-[50px] mt-12 `}
    style={{
      backgroundImage: `url(${iphone})`,
      backgroundSize: "contain",
      filter: "brightness(100%) saturate(200%) hue-rotate(-340deg)",
      backgroundColor: "#151030",
      backgroundBlendMode: "multiply",
    }}
  >
    <div className="flex flex-col pt-18 w-[300px] ">
      <div className=" p-8 rounded-3xl min-h-[405px] ">
        <p className="text-white font-black text-[42px]">"</p>
        <p className="text-white tracking-wider text-[15px] w-full whitespace-pre-line ">
          {testimonial}
        </p>
      </div>

      <div className=" justify-center  flex flex-col p-8 rounded-3xl  w-full">
        <div className=" flex flex-row items-center ">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">{"@ "}</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} <br></br>
              <span className="text-[15px] blue-text-gradient">{company}</span>
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div
      className={
        "mt-8 bg-gradient-to-br from-tertiary  to-transparent rounded-[20px]"
      }
    >
      <div
        className={`rounded-[50px] ${styles.padding} min-h-[300px] flex flex-col justify-end `}
      >
        <motion.div variants={textVariant()}>
          <div className="p-2">
            <p className={`${styles.sectionSubText}`}>What employers say</p>
            <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
          </div>
        </motion.div>
        <div
          className={`${styles.paddingX} sm:w-full sm:mx-auto flex flex-wrap justify-evenly `}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="flex justify-evenly ">
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
