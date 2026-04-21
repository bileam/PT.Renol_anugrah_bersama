import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./style.css";
// aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Ganti path sesuai dengan lokasi asset Anda
import corrosel1 from "../../assets/image/home.jpg";
import corrosel2 from "../../assets/image/houseExample.jpg";
import corrosel3 from "../../assets/image/gem.jpeg";

const BannerCarousel = () => {
  const slides = [
    {
      title: "Membangun Impian Anda",
      desc: "Layanan kontraktor umum dengan standar kualitas tinggi dan integritas terjamin.",
      img: corrosel1,
    },
    {
      title: "Suplai Material Grade A",
      desc: "Distribusi material bangunan dengan standar mutu SNI untuk ketahanan jangka panjang.",
      img: corrosel2,
    },
    {
      title: "Suplai Material Grade A",
      desc: "Distribusi material bangunan dengan standar mutu SNI untuk ketahanan jangka panjang.",
      img: corrosel3,
    },
  ];

  useEffect(() => {
    AOS.init({
      // Pengaturan opsional:
      duration: 800, // durasi animasi (ms)
      once: true, // jika false, animasi akan muncul setiap kali discroll (atas/bawah)
      // mirror: true, // apakah elemen harus animasi keluar saat discroll lewat
    });

    // Penting: Refresh AOS setiap kali ada perubahan konten
    AOS.refresh();
  }, []);
  return (
    <div className="w-full h-125 md:h-150 overflow-hidden mt-5 rounded-3xl md:rounded-4xl shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        // navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay gelap agar teks kontras */}
              <div className="absolute inset-0 bg-black/60  backdrop-blur-[0.5px]" />

              {/* Container Konten */}
              <div className="relative h-full flex flex-col items-stars justify-center text-stars px-6 max-w-4xl mx-auto">
                {/* Judul dengan Animasi */}
                <h2
                  className="text-white text-3xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter
                               transition-all duration-1000 ease-out translate-y-12 opacity-0
                               in-[.swiper-slide-active_&]:translate-y-0 in-[.swiper-slide-active_&]:opacity-100"
                >
                  {slide.title}
                </h2>

                {/* Deskripsi dengan Animasi (Delay 300ms) */}
                <p
                  className="text-slate-200 text-base md:text-xl mb-8 leading-relaxed
                              transition-all duration-1000 delay-300 ease-out translate-y-8 opacity-0
                              in-[.swiper-slide-active_&]:translate-y-0 in-[.swiper-slide-active_&]:opacity-100"
                >
                  {slide.desc}
                </p>
                <div
                  className="transition-all duration-1000 delay-500 ease-out translate-y-5 opacity-0
                                in-[.swiper-slide-active_&]:translate-y-0 in-[.swiper-slide-active_&]:opacity-100"
                >
                  <button
                    className="bg-rab-navy text-white px-4 py-2 rounded-full font-bold 
                                   text-sm shadow-lg  transition-all transform  duration-500 cursor-pointer
                                   hover:scale-105 active:scale-95"
                  >
                    Pelajari Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Kustomisasi CSS untuk Navigasi Swiper (Opsional) */}
      {/* <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #adff2f; 
          opacity: 1;
          width: 30px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
      `}</style> */}
    </div>
  );
};

export default BannerCarousel;
