import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"; // Importando ComputersCanvas em vez de EarthCanvas
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_w83f29a
//service_mwrawyx
//Se-juKfj2I9uliVIy

const Contact = () => {
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
        'service_mwrawyx',
        'template_w83f29a',
        {
          from_name: form.name,
          to_name: "Wallacy",
          from_email: form.email,
          to_email: "wallacyfernandez@gmail.com",
          message: form.message,
        },
        'Se-juKfj2I9uliVIy'
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado. Entraremos em contato com você o mais rápido possível.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ah, algo deu errado. Por favor, tente novamente.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] cont-gradient p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Qual é o seu nome?"
              className='imput-bg py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Qual é o seu email?"
              className='imput-bg py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensagem</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Escreva sua mensagem'
              className='imput-bg py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <ComputersCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
