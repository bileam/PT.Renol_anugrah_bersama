import contoh_bg from "../../assets/Pengerjaan/Bangunan/FRP/compres.jpeg";

const Cover = ({ title, desc, image }) => {
  return (
    <section
      className="relative  h-screen  w-full flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${image || contoh_bg})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1a]/80 via-[#0a0f1a]/50 to-[#0a0f1a]/80"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0f1a]/90"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="xl:container mx-auto px-4 md:px-8 flex flex-col items-center text-center text-white gap-4">
          <h1 className="text-rab-green font-bold tracking-[4px] text-lg md:text-xl">
            {title}
          </h1>
          <h1 className="text-5xl md:text-7xl font-black leading-none">KAMI</h1>
          <div className="w-40 h-0.5 bg-gray-700 relative">
            <div className="absolute w-[60%] h-full bg-rab-green"></div>
          </div>
          <p className="text-white/90 text-base md:text-lg max-w-xl leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
