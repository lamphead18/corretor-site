import logoremax from "../assets/logoremax.png";
import casas from "../assets/casas.jpg";

const MainPage = () => {
  const logos = Array(15).fill(logoremax);

  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center text-[#00498e]"
      style={{ backgroundImage: `url(${casas})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 pt-32 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Encontre o imóvel ideal com o corretor de imóveis Fernando Franco
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-[#ebebeb] mt-4">
          Atuação especializada em{" "}
          <strong className="text-[#b40027]">Eusébio, Ceará</strong> com o selo
          de qualidade Re/Max
        </h2>
      </div>

      <div className="relative z-10 mt-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="hidden md:grid grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform">
            <img
              src="/src/assets/corretor2.png"
              alt="Foto do corretor Fernando Franco"
              title="Corretor de imóveis Fernando Franco - Eusébio, Ceará"
              loading="lazy"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Fernando Franco</h3>
            <p className="text-sm text-[#444]">
              Corretor com ampla experiência na região do Eusébio, dedicado a
              oferecer um atendimento humano, ético e personalizado para ajudar
              você a realizar o sonho da casa própria.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform">
            <img
              src="/src/assets/casinha.png"
              alt="Imagem de casa à venda no Eusébio"
              title="Casas à venda em Eusébio, Ceará"
              loading="lazy"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Seu imóvel ideal está aqui
            </h3>
            <p className="text-sm text-[#444]">
              Conheça diversas opções de imóveis cuidadosamente selecionados
              para combinar com seu estilo de vida. Agende uma visita e descubra
              seu novo lar no Eusébio!
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform flex flex-col items-center">
            <img
              src="/src/assets/remaxbalao.png"
              alt="Logo da Re/Max"
              title="Imobiliária Re/Max - Corretor Fernando Franco"
              loading="lazy"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Associado à Re/Max</h3>
            <p className="text-sm text-[#444] text-center">
              Parte da maior rede imobiliária do mundo, garantindo confiança,
              credibilidade e visibilidade para seus imóveis no mercado local de
              Eusébio e arredores.
            </p>
          </article>
        </div>

        <div className="md:hidden flex overflow-x-scroll space-x-4 snap-x snap-mandatory mt-6 pb-4 px-4 scroll-smooth">
          <article className="min-w-[85%] snap-center shrink-0 bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform">
            <img
              src="/src/assets/corretor2.png"
              alt="Foto do corretor Fernando Franco"
              title="Corretor de imóveis Fernando Franco - Eusébio, Ceará"
              loading="lazy"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Fernando Franco</h3>
            <p className="text-sm text-[#444]">
              Corretor com ampla experiência na região do Eusébio, dedicado a
              oferecer um atendimento humano, ético e personalizado para ajudar
              você a realizar o sonho da casa própria.
            </p>
          </article>

          <article className="min-w-[85%] snap-center shrink-0 bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform">
            <img
              src="/src/assets/casinha.png"
              alt="Imagem de casa à venda no Eusébio"
              title="Casas à venda em Eusébio, Ceará"
              loading="lazy"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Seu imóvel ideal está aqui
            </h3>
            <p className="text-sm text-[#444]">
              Conheça diversas opções de imóveis cuidadosamente selecionados
              para combinar com seu estilo de vida. Agende uma visita e descubra
              seu novo lar no Eusébio!
            </p>
          </article>

          <article className="min-w-[85%] snap-center shrink-0 bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform flex flex-col items-center">
            <img
              src="/src/assets/remaxbalao.png"
              alt="Logo da Re/Max"
              title="Imobiliária Re/Max - Corretor Fernando Franco"
              loading="lazy"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Associado à Re/Max</h3>
            <p className="text-sm text-[#444] text-center">
              Parte da maior rede imobiliária do mundo, garantindo confiança,
              credibilidade e visibilidade para seus imóveis no mercado local de
              Eusébio e arredores.
            </p>
          </article>
        </div>
      </div>

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
