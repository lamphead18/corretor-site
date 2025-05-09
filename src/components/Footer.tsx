import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import remaxbalao from "../assets/remaxbalao.png";

const Footer = () => {
  return (
    <footer className="bg-[#00498e] text-[#ebebeb] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={remaxbalao} alt="Logo Re/Max" className="w-8 h-auto" />
            <p className="text-sm font-light">Corretor associado à Re/Max</p>
          </div>
          <p className="text-xs font-light text-[#d6d6d6]">
            Fernando Franco – Corretor de Imóveis | CRECI-CE 26957
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start text-base">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(85) 98624-0743</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>fernandofranco@remax.com.br</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="font-medium">Siga nas redes sociais</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/fernando-franco-287743104/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="p-2 rounded-full hover:bg-[#b40027]/20 transition"
            >
              <Linkedin className="text-[#ebebeb]" />
            </a>
            <a
              href="https://www.instagram.com/fernandojcfranco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-[#b40027]/20 transition"
            >
              <Instagram className="text-[#ebebeb]" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-base font-medium">
        <p>📢 Entre em contato agora mesmo e agende uma visita!</p>
      </div>

      <div className="border-t border-[#ebebeb]/20 mt-8 pt-4 text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()} Todos os direitos reservados |
          Desenvolvido por{" "}
          <span className="text-[#b40027] font-semibold">LPD soft</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
