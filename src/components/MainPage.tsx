import logoremax from "../assets/logoremax.png";
import casas from "../assets/casas.jpg";
import Cards from "../components/Cards";

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
