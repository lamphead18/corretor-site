import fotoCorretor from "../assets/corretor2.jpg";

const cards = [
  {
    key: "corretor",
    title: "Fernando Franco",
    image: fotoCorretor,
    alt: "Foto do corretor Fernando Franco",
    description:
      "Corretor com ampla experiência na região do Eusébio, dedicado a oferecer um atendimento humano, ético e personalizado para ajudar você a realizar o sonho da casa própria.",
  },
  {
    key: "casa",
    title: "Seu imóvel ideal está aqui",
    image: "/src/assets/casinha.png",
    alt: "Imagem de casa à venda no Eusébio",
    description:
      "Conheça diversas opções de imóveis cuidadosamente selecionados para combinar com seu estilo de vida. Agende uma visita e descubra seu novo lar no Eusébio!",
  },
  {
    key: "remax",
    title: "Associado à Re/Max",
    image: "/src/assets/images.png",
    alt: "Logo da Re/Max",
    description:
      "Parte da maior rede imobiliária do mundo, garantindo confiança, credibilidade e visibilidade para seus imóveis no mercado local de Eusébio e arredores.",
  },
];

const Cards = () => {
  return (
    <div className="relative z-10 mt-16 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <article
          key={card.key}
          className="bg-white/80 bg-gradient-to-b from-white/80 to-gray-100/60 border border-[#00498e]/20 ring-1 ring-[#b40027]/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform rounded-xl overflow-hidden"
        >
          <img
            src={card.image}
            alt={card.alt}
            title={card.title}
            loading="lazy"
            className="mx-auto rounded-t-xl mb-0 w-full h-48 object-cover"
          />

          <div className="p-6 space-y-4 text-center">
            <div>
              <h3 className="text-xl font-bold text-[#00498e] mb-1">
                {card.title}
              </h3>
              <hr className="mx-auto border-t-2 border-[#b40027] w-12 mb-2" />
              <p className="text-sm text-[#333] leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Cards;
