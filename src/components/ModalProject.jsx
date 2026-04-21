import contoh from "../assets/image/home.jpg";
import { Calendar, Tag, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
const ModalProject = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex z-50 p-2 md:p-6 items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full md:h-[90vh] md:max-w-6xl rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* LEFT - THUMBNAIL */}
        <div className="hidden md:flex mt-10 flex-col gap-3 p-4 w-25 overflow-y-auto overflow-x-auto ">
          {[1, 2, 3, 4].map((item) => (
            <img
              key={item}
              src={contoh}
              alt=""
              className="rounded-lg object-cover h-20 cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>

        {/* RIGHT - CONTENT */}
        <div className="flex-1 flex flex-col">
          {/* HEADER */}
          <div className="flex justify-between items-center px-4 py-3">
            <p className="text-sm text-gray-500">01 / 08</p>
            <button
              onClick={onClose}
              className="text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>
          </div>

          {/* SCROLL AREA */}
          <div className="overflow-y-auto flex-1 p-4">
            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={contoh}
                alt=""
                className="w-full h-55 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* MOBILE THUMB */}
            <div className="flex md:hidden gap-3 mt-3 overflow-x-auto ">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={contoh}
                  alt=""
                  className="h-16 w-24 rounded-lg object-cover shrink-0"
                />
              ))}
            </div>

            {/* CONTENT */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              {/* LEFT TEXT */}
              <div className="flex-1 flex flex-col gap-3">
                {/* icon */}
                <h1 className="text-rab-navy text-sm uppercase">
                  Infrastruktur
                </h1>
                <h2 className="font-bold text-xl md:text-2xl">
                  Pembangunan Jembatan
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, tenetur! Perspiciatis, tempora.
                </p>
              </div>
              {/* RIGHT DETAIL */}
              <div className="flex-1 bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                <h1 className="text-rab-navy font-semibold">Detail Proyek</h1>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>Tahun</span>
                  </div>
                  <span>2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Tag size={16} />
                    <span>Kategori</span>
                  </div>
                  <span>Infrastruktur</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>Lokasi</span>
                  </div>

                  <span>Jakarta Utara</span>
                </div>
                <div className=" flex justify-end">
                  <a
                    href="https://wa.me/6281242922597?text=hallo%20saya%20ingin%20konsultasi%20mengenai%20konstruksi%20dan%20suplier%20barang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rab-navy w-full text-center flex justify-center items-center gap-2 py-2 rounded-xl text-white brightness-125 transition-all duration-300"
                  >
                    <FaWhatsapp aEye className="text-white text-2xl" />
                    <span>Hubungi Kami</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
