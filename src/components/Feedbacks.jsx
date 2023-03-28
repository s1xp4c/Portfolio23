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
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-100 p-10 xs:p-0 rounded-3xl w-full mt-22 xs:mt-2"
  >
    <div className="flex flex-col">
      <div className=" top bg-black-200 p-10 xs:p-2 rounded-3xl w-full">
        <p className="text-white font-black text-[42px]">"</p>
        <p className="text-white tracking-wider text-[15px] w-full whitespace-pre-line">
          {testimonial}
        </p>
      </div>
      <div className="buffer xs:h-[5px] h-[30px]"></div>
      <div className=" justify-center bg-black-200 flex flex-col xs:p-2 p-10 rounded-3xl  w-full">
        <div className=" flex flex-row items-center xs:gap-1 gap-2">
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
            className="w-13 h-13 rounded-full object-cover"
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
        "mt-8 xs:mt-2  bg-gradient-to-br from-tertiary  to-transparent rounded-[20px]"
      }
    >
      <div
        className={`rounded-2xl ${styles.padding} px-2 py-5 min-h-[300px] flex flex-col justify-end`}
      >
        <motion.div variants={textVariant()}>
          <div className="p-6 px-10 xs:p-1">
            <p className={`${styles.sectionSubText}`}>What co-workers say</p>
            <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
          </div>
        </motion.div>
        <div
          className={`${styles.paddingX}pb-14 xs:pb-1 xs:px-1 xs:py-1  flex flex-wrap gap-1`}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="flex justify-evenly">
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
