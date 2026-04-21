import gambar from "../../assets/image/home.jpg";
import gambar2 from "../../assets/image/contoh.jpeg";
import gambar3 from "../../assets/image/cott.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { project } from "../../datas/project";
const Porto = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const Navigasi = useNavigate();

  return (
    <div className="flex flex-col gap-6  justify-center items-center ">
      <h2 className="text-center text-rab-green font-bold">Proyek Terbaru</h2>
      <h1
        data-aos="zoom-in"
        className="text-center text-rab-navy font-bold md:text-3xl text-2xl"
      >
        Hasil Kerja kami
      </h1>
      <div className="py-10 flex md:flex-row flex-col gap-4 w-full items-center justify-center">
        {project.slice(0, 3).map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="relative rounded-2xl overflow-hidden group "
          >
            <img
              src={item.img}
              alt="gambar"
              className="w-full h-90  object-cover group-hover:scale-110 transition-all duration-500"
            />

            {/* Overlay */}
            <div
              className={`
              absolute inset-0 bg-black/60 backdrop-blur-sm
               transition-all duration-500 flex items-center justify-center
               ${activeIndex === index ? "opacity-70" : "opacity-0"}
                md:opacity-0 md:group-hover:opacity-70
      `}
            >
              <button className="cursor-pointer p-4 hover:scale-120  transition-all duration-300 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl">
                <FaEye className="text-white text-2xl" />
              </button>
            </div>

            {/* Text */}
            <div
              className={`
        absolute left-0 right-0 p-4 text-white transition-all duration-500
         ${
           activeIndex === index
             ? "bottom-2 opacity-100"
             : "-bottom-5 opacity-0"
         }
        md:-bottom-5 md:opacity-0 
        md:group-hover:bottom-2 md:group-hover:opacity-100
      `}
            >
              <h1 className="text-md opacity-80">{item.kategori}</h1>
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => Navigasi("/portofolio")}
        className="border-2 py-2 px-6 border-[#1d4e89] text-[#1d4e89] shadow-2xl shadow-[#cdcdcd] hover:brightness-150 transition-all duration-500 cursor-pointer rounded-2xl"
      >
        lihat semua portofolio
      </button>
    </div>
  );
};
export default Porto;
