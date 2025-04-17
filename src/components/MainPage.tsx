import logoremax from "../assets/logoremax.png";
import Cards from "../components/Cards";
import cenario from "../assets/cenario.jpeg";

const MainPage = () => {
  const logos = Array(15).fill(logoremax);

  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center text-[#00498e]"
      style={{ backgroundImage: `url(${cenario})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto text-center md:text-left bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md space-y-6 text-[#00498e] pt-40 md:pt-32">
        <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-[#b40027] pl-4">
          Encontre o imóvel ideal com o corretor de imóveis{" "}
          <strong>Fernando Franco</strong>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-[#333]">
          Atuação especializada na{" "}
          <strong>compra e venda de imóveis em Eusébio, Ceará</strong>, com o
          selo de qualidade da <strong>Re/Max</strong>, a maior rede imobiliária
          do mundo.
        </h2>

        <p className="text-base text-[#444] leading-relaxed">
          Com uma abordagem ética e personalizada, Fernando oferece um
          atendimento próximo e humano, ajudando clientes a realizarem o sonho
          da casa própria com total segurança e confiança. Sua experiência e
          dedicação fazem dele um dos corretores mais indicados da região.
        </p>
      </div>

      <Cards />

      <div className="relative z-10 mt-20 py-6 overflow-hidden opacity-20 pointer-events-none select-none">
        <div
          className="flex animate-slide whitespace-nowrap"
          aria-label="Carrossel com logos da Re/Max"
        >
          {[...logos, ...logos].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="logo remax"
              loading="lazy"
              className="mx-8 w-32 h-auto inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
