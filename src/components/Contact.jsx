import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  // const captchaKey = import.meta.env.VITE_APP_CAPTCHA_KEY;

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.google.com/recaptcha/api.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

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

  const [form, setForm] = useState({
    from_name: "",
    to_name: import.meta.env.VITE_APP_EMAIL_TO,
    from_email: "",
    to_email: import.meta.env.VITE_APP_EMAIL_ACCOUNT,
    message: "",
    // my_file: null,
    // my_fileName: "",
  });
  const formRef = useRef(form);

  const [loading, setLoading] = useState(false);
  // const [isAttached, setIsAttached] = useState(false);

  const inputClassName = `bg-tertiary py-4 px-6 w-full border-[1px] rounded-lg font-medium`;

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    if (name === "my_file") {
      setForm({
        ...form,
        my_file: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  // const handleAttachClick = () => {
  //   setIsAttached(true);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // check if any required fields are empty
    if (!form.from_name || !form.from_email || !form.message) {
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast({
            containerStyle: {
              border: "1px solid green.200",
              isClosable: false,
            },
          });

          setForm({
            from_name: "",
            to_name: import.meta.env.VITE_APP_EMAIL_TO,
            from_email: "",
            to_email: import.meta.env.VITE_APP_EMAIL_ACCOUNT,
            message: "",
            // my_file: null,
            // my_fileName: "",
          });
          // setIsAttached(false);
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
          console.log(error)
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
            className="mail-form bg-tertiary rounded-[20px]"
            encType="multipart/form-data"
          >
            <div className="form-input-material">
              <input
                type="text"
                name="from_name"
                id="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder=" "
                className={`${inputClassName} form-control-material`}
                autoComplete="off"
                required
              />
              <label htmlFor="from_name" className="">
                Your Name
              </label>
            </div>
            <div className="form-input-material">
              <input
                type="email"
                name="from_email"
                id="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder=" "
                className={`${inputClassName} form-control-material`}
                autoComplete="off"
                required
              />
              <label htmlFor="from_email" className="">
                Your email
              </label>
            </div>
            <div className="form-input-material">
              <textarea
                rows={5}
                type="text"
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className={`${inputClassName} form-control-material`}
                autoComplete="off"
                required
              />
              <label htmlFor="message" className="">
                Your Message
              </label>
            </div>
            {/* <div className="w-full">
              <input
                type="file"
                name="my_file"
                id="my_file"
                className="hidden w-full"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setForm({
                    ...form,
                    my_file: file,
                    my_fileName: file ? file.name : null,
                  });
                }}
              />
            </div>
            <div className="w-full green-pink-gradient p-[1px] mt-6 rounded-[10px] shadow-card btn-wrap">
              <label
                className="btn bg-tertiary p-[0px] "
                htmlFor="my_file"
                onClick={() => handleAttachClick()}
              >
                {isAttached
                  ? "Attach a different file?"
                  : "Attach file (max: 500kb)"}
              </label>
            </div>
            {isAttached ? (
              <span className="file-name mt-3 w-full font-small">
                {form.my_fileName}
              </span>
            ) : (
              <span className="no-file mt-3 w-full font-small">
                {"No file chosen"}
              </span>
            )}
            {/* <div className="w-full min-h-[40px] green-pink-gradient p-[1px] rounded-[10px] shadow-card btn-wrap mt-6"> */}
            {/* <div
              className="g-recaptcha border-none rounded-[10px] pt-4 border-0"
              data-sitekey={captchaKey}
              data-theme={"dark"}
            ></div>  */}
            {/* </div> */}
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
