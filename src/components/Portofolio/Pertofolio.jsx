import { useState } from "react";
import contohgambar from "../../assets/image/home.jpg";
import { project } from "../../datas/project";
import { FaEye } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import ModalProject from "../ModalProject";
const Portofolio = () => {
  const [isOpen, setOpen] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectData, setSelectData] = useState(null);

  return (
    <div className="mt-4 flex flex-col gap-12 pb-12">
      <div className="flex flex-col  items-center gap-6">
        <h1 data-aos="fade-up" className="font-bold text-rab-green text-lg">
          SHOW CASE
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="font-bold text-rab-navy text-4xl text-center"
        >
          Portofolio proyek kami
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 lg:grid-cols-3">
        {[...project]
          .sort((a, b) => b.id - a.id)
          .map((item, index) => (
            <div
              onClick={() => setOpen(isOpen === index ? null : index)}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="w-full h-100 group bg-white shadow rounded-3xl"
            >
              <div className="h-full relative rounded-2xl overflow-hidden">
                <img
                  src={item.img[0]}
                  alt={item.name}
                  className={`w-full h-full object-cover  group-hover:scale-110 ${
                    isOpen === index ? "scale-110" : "scale-100"
                  } transition-all duration-500`}
                />
                <div
                  className={`absolute  group-hover:bg-black/70 ${
                    isOpen === index ? "opacity-100 bg-black/70 " : "opacity-0"
                  } transition-all group-hover:opacity-100  gap-4 duration-500 inset-0 flex items-center justify-center`}
                >
                  <button
                    onClick={() => {
                      setSelectData(item);
                      setModal(true);
                    }}
                    className="cursor-pointer p-4 hover:scale-120  transition-all duration-300 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl"
                  >
                    <FaEye className="text-white text-2xl" />
                  </button>
                  <a
                    href="https://wa.me/6285216591210?text=hallo%20saya%20ingin%20konsultasi%20mengenai%20konstruksi%20dan%20suplier%20barang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group hover:bg-green-500  p-4 hover:scale-120  transition-all duration-300 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl"
                  >
                    <FaWhatsapp
                      aEye
                      className="text-white text-2xl group-hover:scale-100 transition-all group-hover:delay-300 duration-500"
                    />
                  </a>
                </div>
                <div
                  className={`absolute group-hover:bottom-6 lg:w-60 w-100 ${
                    isOpen === index ? "bottom-6" : "-bottom-full"
                  } -bottom-full transition-all duration-500 left-6 text-white`}
                >
                  <h1 className="text-xl">{item.kategori}</h1>
                  <h2 className="text-2xl font-bold ">{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ModalProject
        isOpen={modal}
        onClose={() => setModal(false)}
        data={selectData}
      />
    </div>
  );
};
export default Portofolio;
