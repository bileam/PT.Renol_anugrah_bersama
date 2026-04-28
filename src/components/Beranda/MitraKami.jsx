import React from "react";
import Logo_Mitra_01 from "../../assets/LogoMitra/Logo_Mitra-weber.png";
import Logo_Mitra_02 from "../../assets/LogoMitra/Logo-Mitra-Fosroc.jpeg";
import Logo_Mitra_03 from "../../assets/LogoMitra/Logo-Mitra-Saint-Gobain.png";
import Logo_Mitra_04 from "../../assets/LogoMitra/Logo-Mitra-Vexcolt.png";
import Logo_Mitra_05 from "../../assets/LogoMitra/Logo-Mitra-Wavin.png";
const MitraKami = () => {
  const partners = [
    { name: "PT.WEBER", logo: Logo_Mitra_01 },
    { name: "PT.FOSROC", logo: Logo_Mitra_02 },
    { name: "PT.SAINT-GOBAIN", logo: Logo_Mitra_03 },
    { name: "PT.VEXCOLT", logo: Logo_Mitra_04 },
    { name: "PT.WAVIN", logo: Logo_Mitra_05 },
  ];

  const scrollPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-6 bg-[#0f172a] overflow-hidden relative rounded-2xl">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-rab-green/10 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="text-rab-green font-bold text-sm md:text-lg uppercase tracking-[0.3em] mb-3">
            Mitra Strategis
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            Perusahaan yang Telah <br className="hidden md:block" />
            <span className="text-rab-green">Bekerja Sama</span> dengan Kami
          </h2>
          <div className="w-20 h-1.5 bg-rab-green mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="relative mt-12 group">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-liner-to-r from-rab-navy via-rab-navy/50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-rab-navy via-rab-navy/50 to-transparent z-20 pointer-events-none"></div>
          <div className="flex overflow-hidden">
            <div className="flex  animate-marquee whitespace-nowrap  py-5 group-hover:[animation-play-state:paused]">
              {scrollPartners.map((partner, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-center justify-center mx-3 md:mx-6"
                >
                  <div className="w-36 md:w-60 h-24 md:h-40 bg-white md:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center p-6 transition-all duration-500 md:hover:bg-white md:hover:scale-110 md:hover:shadow-[0_20px_50px_rgba(141,176,62,0.2)] group/item">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter brightness-110 contrast-125 grayscale-0 md:grayscale md:group-hover/item:grayscale-0 transition-all duration-500 opacity-100 md:opacity-60 md:group-hover/item:opacity-100"
                    />
                  </div>

                  <p className="mt-4 text-[10px] md:text-xs font-medium text-white/70 md:text-white/40 uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity duration-300 text-center max-w-35 whitespace-normal">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default MitraKami;
