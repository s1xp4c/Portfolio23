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
    className="bg-black-100 p-10 rounded-3xl xs:w-[320px] w-full mt-22"
  >
    <div className="flex flex-col ">
      <div className=" top bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
        <p className="text-white font-black text-[42px]">"</p>
        <p className="text-white tracking-wider text-[15px] w-full whitespace-pre-line">
          {testimonial}
        </p>
      </div>
      <div className="buffer h-[30px]"></div>
      <div className=" justify-center bg-black-200 flex flex-col p-10 rounded-3xl xs:w-[320px] w-full">
        <div className=" flex flex-row items-center justify-end gap-2">
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
    <div className={"mt-8 bg-card-gradient-bottom-right rounded-[20px]"}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col justify-end`}
      >
        <motion.div variants={textVariant()}>
          <div className="p-10">
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={`${styles.sectionHeadText} pb-6`}>Testimonials.</h2>
          </div>
        </motion.div>
        <div className={`-mt-30 pb-14 ${styles.paddingX} flex flex-wrap gap-3`}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="flex-grow mt-auto">
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
