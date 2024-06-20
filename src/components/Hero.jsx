import { motion } from "framer-motion";
import { styles } from "../styles";
import { AstronautCanvas } from "./canvas";
import { logogradient } from "../assets";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto rounded-br-lg rounded-bl-lg">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} px-1 flex flex-col gap-5">
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr] gap-14">
          {/* Conteúdo à esquerda */}
          <div className="flex flex-col gap-7 xs:gap-14">
            <h1 className={`${styles.heroHeadText} font-semibold text-white`}>
              A solução em TI <br /> para você!
              <img
                src={logogradient}
                alt="Logo"
                className="inline-block ml-2 w-12 h-auto sm:w-14 sm:h-auto md:w-14 md:h-auto lg:w-14 lg:h-auto xl:w-16 xl:h-auto"
              />
            </h1>
            <div className="mt-4 flex gap-4">
              <button className="px-4 py-2 text-white rounded border border-[#F5F5F5] bg-transparent hover:border-transparent hover:bg-purpleclear transition duration-300">
                Website
              </button>
              <button className="px-4 py-2 text-white rounded border border-[#F5F5F5] bg-transparent hover:border-transparent hover:bg-purpleclear transition duration-300">
                Apps
              </button>
              <button className="px-4 py-2 text-white rounded border border-[#F5F5F5] bg-transparent hover:border-transparent hover:bg-purpleclear transition duration-300">
                Hubs
              </button>
            </div>
          </div>

          {/* Div vermelha abaixo no mobile */}
          <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-600px md:h-[450px] h-[350px]'
      >
        <AstronautCanvas />
      </motion.div>
          
        </div>
      </div>

      <div className="absolute xs:bottom-32 bottom-0 w-full flex justify-center items-center">
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
