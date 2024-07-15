import { SectionWrapper } from "../hoc";

import AltotechImg from "../assets/AltoTech.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="sm:pl-12">
        <div className="flex flex-col lg:flex-row xl:justify-between justify-normal gap-12">
          <div>
            <img src={AltotechImg} alt="Logo da Altotech" className="w-28" />
          </div>

          <div>
            <h2 className="font-bold text-3xl">Contato</h2>

            <div className="space-y-3 mt-8">
              <p className="font-semibold">(84) 3317-8512</p>
              <p className="font-semibold">
                https://paudosferros.ufersa.edu.br
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-3xl">Localização</h2>

            <div className="space-y-3 mt-8">
              <p className="font-semibold">Pau dos Ferros - RN, BR-226, s/n - Bairro: São Geraldo</p>
              <p className="font-semibold">Campus UFERSA: Prédio LTI, Sala Nits</p>
              <p className="font-semibold">CEP: 59900-000</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-3xl">Redes sociais</h2>

            <div className="mt-6 flex gap-5 ml-2">
              <a
                href="https://www.instagram.com/altotech_juniors/"
                target="_blank"
                className="hover:scale-125 transition-all"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/altotech-solu%C3%A7%C3%B5es-em-ti-60116a281/"
                target="_blank"
                className="hover:scale-125 transition-all"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 flex items-center gap-2">
          <FaCopyright />
          <p className="font-semibold text-lg">
            2024 AltoTech Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default SectionWrapper(Footer, "rodape");
