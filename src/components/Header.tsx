import { useState } from "react";
import { Menu } from "lucide-react";
import corretorIcon_tratada from "../assets/corretorIcon_tratada.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#b40027] shadow-md z-50">
      <div className="relative flex items-center h-24 px-6 md:px-12">
        <div className="absolute bottom-0 left-0 w-full h-6 bg-[#00498e] z-0"></div>

        <button
          className="md:hidden mr-auto z-20 bg-white/80 p-2 rounded-full border border-[#00498e]/30 shadow hover:bg-[#ebebeb] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <Menu size={24} color="#00498e" />
        </button>

        <div className="absolute right-4 md:left-80 -bottom-10 w-[120px] h-[120px] bg-[#ebebeb] rounded-full border-4 border-[#00498e] z-10 overflow-hidden">
          <img
            src={corretorIcon_tratada}
            alt="Corretor de imóveis"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <nav className="hidden md:flex ml-auto gap-10 text-[#ebebeb] font-semibold relative z-10">
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#00498e]/20 shadow-inner px-6 pt-4 pb-4 flex flex-col gap-4 text-[#00498e] font-semibold transition-all duration-300 ease-in-out animate-slide-in-down">
          <a href="#sobre" onClick={() => setIsOpen(false)}>
            Sobre
          </a>
          <a href="#contato" onClick={() => setIsOpen(false)}>
            Contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
