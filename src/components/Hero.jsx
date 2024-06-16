import { motion } from "framer-motion";

import { styles } from "../styles";
import { computadorVdl } from "../assets";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto bg-gradient-to-r from-purple to-darkPurple`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} px-1 flex flex-row items-start gap-5`}
      >
        <div className="mt-20 flex gap-14">
          <h1 className={`${styles.heroHeadText} font-semibold text-white`}>
            A solução em TI <br /> para você!
          </h1>
          <img src={computadorVdl} alt="Imagem de computador" />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
