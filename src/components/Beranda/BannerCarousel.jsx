import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./style.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import corrosel from "../../assets/image/BangunRumah-2-setengah-Lantai.jpeg";
import corrosel2 from "../../assets/image/pengerjaan-menggunakan-Produk.jpeg";

const BannerCarousel = () => {
  const slides = [
    {
      title: "Membangun Rumah Impian Anda",
      desc: "Layanan kontraktor umum dengan standar kualitas tinggi dan integritas terjamin.",
      img: corrosel,
    },
    {
      title: "Suplai Material ",
      desc: "Distribusi material bangunan dengan kualitas yang Bagus.",
      img: corrosel2,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="w-full h-125 md:min-h-screen overflow-hidden mt-5 rounded-3xl md:rounded-4xl shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
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
              <div className="absolute inset-0 bg-black/60  backdrop-blur-[0.5px]" />

              <div className="relative h-full flex flex-col items-stars justify-center text-stars px-6 max-w-4xl mx-auto">
                <h2
                  className="text-white text-3xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter
                               transition-all duration-1000 ease-out translate-y-12 opacity-0
                               in-[.swiper-slide-active_&]:translate-y-0 in-[.swiper-slide-active_&]:opacity-100"
                >
                  {slide.title}
                </h2>

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
    </div>
  );
};

export default BannerCarousel;
