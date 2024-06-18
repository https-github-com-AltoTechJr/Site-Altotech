import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, setIsModalOpen }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[16px] font-semibold text-left h3-with-line">
          {title}
        </h3>

        <div
          className="green-pink-gradient flex justify-center items-center rounded-[10px]"
          style={{ width: "100%", height: "6vh" }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-tertiary text-white w-full h-full flex justify-center items-center rounded-[10px]"
            style={{ width: "99%", height: "95%" }}
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [openModalIndex, setOpenModalIndex] = useState(-1);

  // Adiciona a classe ao body quando o modal é aberto
  useEffect(() => {
    if (openModalIndex !== -1) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [openModalIndex]);

  const handleOpenModal = (index) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(-1);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Serviços</h2>
        <div className="flex items-center justify-center">
          <p className={styles.sectionSubText}>Como Podemos Ajudar?</p>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            setIsModalOpen={() => handleOpenModal(index)}
          />
        ))}
      </div>

      {openModalIndex !== -1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="green-pink-gradient p-36 rounded-md text-center w-1/2 relative">
            <div className="bg-tertiary absolute inset-0 m-auto modal-content rounded-md">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-white-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h2>{services[openModalIndex].title}</h2>
              <p>{services[openModalIndex].texto}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
