import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const toast = useToast({
    position: "bottom",
    title: "Succes!",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
    duration: 3000,
    status: "success",
    variant: "left-accent",
    description: "I will get back to you as soon as possible.",
  });

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const inputClassName = `bg-tertiary py-4 px-6 w-full border-[1px] rounded-lg font-medium  ${
    focused ? "draw " : ""
  }`;

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // check if any required fields are empty
    if (!form.name || !form.email || !form.message) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_APP_EMAIL_TO,
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAIL_ACCOUNT,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast({
            containerStyle: {
              border: "1px solid green.200",
              isClosable: false,
            },
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast({
            position: "top",
            title: "Error!",
            description: "Ahh, something went wrong. Please try again.",
            status: "error",
            duration: 3000,
            isClosable: false,
            variant: "solid",
            zIndex: "10",
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-1 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} mb-4`}>Contact.</h3>
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="login-form bg-tertiary rounded-[20px]"
          >
            <div className="form-input-material ">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className={`${inputClassName} form-control-material`}
                autoComplete="off"
                required
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}
              />
              <label htmlFor="name" className="">
                Your Name
              </label>
            </div>
            <div className="form-input-material">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className={`${inputClassName} form-control-material`}
                autoComplete="off"
                required
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}
              />
              <label htmlFor="email" className="">
                Your email
              </label>
            </div>
            <div className="form-input-material">
              <textarea
                rows={5}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className={`${inputClassName} form-control-material`}
                autoComplete="off"
                required
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}
              />
              <label htmlFor="message" className="">
                Your Message
              </label>
            </div>
            <div className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card btn-wrap mt-6">
              <button type="submit" className="btn bg-tertiary">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
