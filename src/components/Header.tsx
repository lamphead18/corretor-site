import { useState } from "react";
import { Menu } from "lucide-react";
import corretorIcon_tratada from "../assets/corretorIcon_tratada.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-[#b40027] shadow-md z-50">
        <div className="relative flex items-center h-24 px-12">
          <div className="absolute bottom-0 left-0 w-full h-6 bg-[#00498e] z-0"></div>

          <div className="absolute left-80 -bottom-10 w-[120px] h-[120px] bg-[#ebebeb] rounded-full border-4 border-[#00498e] z-10 overflow-hidden">
            <img
              src={corretorIcon_tratada}
              alt="Corretor de imóveis"
              className="w-full h-full object-cover"
            />
          </div>

          <nav className="hidden md:flex ml-auto gap-10 text-[#ebebeb] font-semibold relative z-10">
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <button
        className="md:hidden fixed top-4 left-4 bg-[#ebebeb] p-2 rounded shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} color="#00498e" />
      </button>

      <div className="fixed inset-0 z-40 md:hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isOpen ? "bg-black/10 pointer-events-auto" : "bg-transparent"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <aside
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="text-[#b40027] text-lg self-end mb-4"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <nav className="flex flex-col gap-4 text-[#00498e] font-semibold">
            <a href="#inicio" onClick={() => setIsOpen(false)}>
              Início
            </a>
            <a href="#sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
            <a href="#contato" onClick={() => setIsOpen(false)}>
              Contato
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
