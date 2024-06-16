import React from "react";
import { Tilt } from "react-tilt/dist/index.js";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, text }) => (
  <Tilt className="xs:w-[357px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="border border-solid rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col gap-4 relative"
      >
        <div className="mt-6 w-8 h-1 bg-pink-600 rounded-2xl"></div>
        <h3 className="text-white text-[20px] font-bold">{text}</h3>
        <a
          href="#"
          className="absolute bottom-8 right-10 border border-solid px-4 py-2 rounded-md"
        >
          Saiba mais
        </a>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Serviços</p>
        <div className={styles.sectionHeadText}>
          <h2>Como podemos ajudar</h2>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
