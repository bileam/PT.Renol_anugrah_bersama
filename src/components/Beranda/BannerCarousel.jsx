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
import corrosel2 from "../../assets/image/pengerjaan-menggunakan-Produk.jpeg";
import Banner_01 from "../../assets/Banner/Banner_RAB_01.png";
import Banner_02 from "../../assets/Banner/Banner_RAB_02.png";
import { BsWhatsapp } from "react-icons/bs";

const BannerCarousel = () => {
  const slides = [
    {
      id: 0,
      title: "Membangun Rumah Impian Anda",
      desc: "Layanan kontraktor umum dengan standar kualitas tinggi dan integritas terjamin.",
      img: Banner_01,
    },
    {
      id: 1,
      title: "Membangun Rumah Impian Anda",
      desc: "Layanan kontraktor umum dengan standar kualitas tinggi dan integritas terjamin.",
      img: Banner_02,
    },
    {
      title: "Suplai Material ",
      desc: "Distribusi material bangunan dengan kualitas yang Bagus.",
      img: corrosel2,
    },
  ];

  const whatsappLink = `https://wa.me/6282320960810?text=${encodeURIComponent(
    "saya ingin berkonsultasi mengenai konstruksi bangunan dan Material"
  )}`;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="h-screen overflow-hidden  shadow-2xl">
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
              <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1a]/50 via-[#0a0f1a]/50 to-[#0a0f1a]/50"></div>
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0f1a]/20"></div>
              <div className="relative h-full flex flex-col items-stars justify-center text-stars px-6 max-w-4xl mx-auto">
                <h1
                  className="text-white text-3xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter
                               transition-all duration-1000 ease-out translate-y-12 opacity-0
                               in-[.swiper-slide-active_&]:translate-y-0 in-[.swiper-slide-active_&]:opacity-100"
                >
                  {slide.title.toLowerCase()}
                </h1>

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
                    onClick={() => window.open(whatsappLink, "_blank")}
                    className="bg-rab-navy  flex gap-2 text-white px-4 md:py-3 py-2 rounded-full font-bold 
                                   text-sm shadow-lg  transition-all transform  duration-500 cursor-pointer
                                   hover:scale-105 items-center active:scale-95"
                  >
                    <BsWhatsapp className="text-[#adff2f] brightness-125" />
                    <span>Konsultasi Dengan Kami</span>
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
