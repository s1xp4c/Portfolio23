import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { styles } from "../src/styles";
import { EarthCanvas } from "../src/components/canvas";
import { SectionWrapper } from "../src/hoc";
import { slideIn } from "../src/utils/motion";

const Contact = () => {
  const toast = useToast();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Morten Six",
          from_email: form.email,
          to_email: "blockstarterinfo@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast({
            position: "top",
            title: "Succes! - Your email has been sent",
            description:
              "Thank you. I will get back to you as soon as possible.",
            status: "success",
            duration: 3000,
            isClosable: false,
            variant: "solid",
            zIndex: "10",
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
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-120 flex flex-col gap-0"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-0 mt-4">Your Name</span>
            <div className={styles.inputFocus}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Who is writing me?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium w-full z-0"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-0 mt-4">Your email</span>
            <div className={styles.inputFocus}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium w-full z-0"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-0 mt-4">
              Your Message
            </span>
            <div className={styles.inputFocus}>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to get in touch about?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium w-full z-0"
              />
            </div>
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary w-full border-2 border-transparent"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
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
