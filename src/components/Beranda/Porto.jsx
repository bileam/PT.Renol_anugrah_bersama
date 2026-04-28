import gambar from "../../assets/image/home.jpg";
import gambar2 from "../../assets/image/contoh.jpeg";
import gambar3 from "../../assets/image/cott.jpeg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { project } from "../../datas/project";
import ModalProject from "../ModalProject";
const Porto = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const Navigasi = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectdata, setselectData] = useState(null);
  return (
    <div className="flex flex-col gap-6  justify-center items-center ">
      <h2 className="text-center text-rab-green font-bold">Proyek Terbaru</h2>
      <h1
        data-aos="zoom-in"
        className="text-center text-rab-navy font-bold md:text-3xl text-2xl"
      >
        Hasil Kerja kami
      </h1>
      <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 flex-col gap-4 w-full items-center justify-center">
        {[...project]
          .sort((a, b) => b.id - a.id)
          .slice(0, 3)
          .map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={item.id}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="relative rounded-2xl overflow-hidden group w-full "
            >
              <img
                src={item.img[0]}
                alt="gambar"
                className="w-full h-90  object-cover group-hover:scale-110 transition-all duration-500"
              />

              <div
                className={`
              absolute inset-0 bg-black/60 backdrop-blur-sm
               transition-all duration-500 flex items-center justify-center
               ${activeIndex === index ? "opacity-70" : "opacity-0"}
                md:opacity-0 md:group-hover:opacity-70
      `}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setselectData(item);
                    setOpen(true);
                  }}
                  className="cursor-pointer p-4 hover:scale-120  transition-all duration-300 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl"
                >
                  <FaEye className="text-white text-2xl" />
                </button>
              </div>

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
      <ModalProject
        isOpen={open}
        onClose={() => setOpen(false)}
        data={selectdata}
      />
    </div>
  );
};
export default Porto;
