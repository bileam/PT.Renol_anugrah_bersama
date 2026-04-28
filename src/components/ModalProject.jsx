import { Calendar, Tag, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const ModalProject = ({ isOpen, onClose, data }) => {
  const [selectImg, setSelectImg] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setSelectImg(0);
    setIsZoomed(false);
  }, [data]);

  if (!isOpen || !data) return null;

  const image = data.img || [];
  const nextImg = () => {
    setSelectImg((prev) => (prev + 1) % image.length);
    setIsZoomed(false);
  };
  const prevImg = () => {
    setSelectImg((prev) => (prev === 0 ? image.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex z-50 px-2 py-1 md:px-6 items-start md:items-center justify-center overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-full min-h-full ${
          isOpen ? "modal-open" : "modal-close"
        } md:h-[90vh] md:max-w-6xl rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl`}
      >
        <div className="hidden md:flex mt-15 flex-col gap-3 p-4 w-24 overflow-y-auto">
          {image.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectImg(index);
                setIsZoomed(false);
              }}
              className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                selectImg === index ? "scale-110" : ""
              }`}
            >
              <img
                src={item}
                alt=""
                className="rounded-lg object-cover w-full h-20 cursor-pointer"
              />
              <div
                className={`absolute inset-0 ${
                  selectImg === index ? "bg-black/10" : "bg-black/40"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center px-4 py-3">
            <p className="text-sm text-gray-500">
              {String(selectImg + 1).padStart(2, "0")} /{" "}
              {String(image.length).padStart(2, "0")}
            </p>
            <button
              onClick={onClose}
              className="text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>
          </div>

          <div className="overflow-y-auto flex-1 p-3 md:p-4 max-h-[calc(100vh-80px)] md:max-h-full">
            <div className="relative rounded-xl overflow-hidden bg-black">
              <img
                src={image[selectImg]}
                alt=""
                onClick={() => setIsZoomed(!isZoomed)}
                className={`
                  w-full aspect-video object-cover h-120 md:h-200 transition-all duration-300
                  ${
                    isZoomed
                      ? "scale-150 cursor-zoom-out"
                      : "scale-100 cursor-zoom-in"
                  }
                `}
              />

              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              <button
                onClick={nextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                →
              </button>

              <button
                onClick={prevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                ←
              </button>
            </div>
            <div className="flex md:hidden gap-3 mt-3 overflow-x-auto">
              {image.map((item, index) => (
                <img
                  key={index}
                  onClick={() => {
                    setSelectImg(index);
                    setIsZoomed(false);
                  }}
                  src={item}
                  alt=""
                  className="h-16 w-24 rounded-lg object-cover shrink-0 cursor-pointer"
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <h1 className="text-rab-navy text-xs md:text-sm uppercase tracking-wide">
                  {data.kategori}
                </h1>
                <h2 className="font-bold text-lg md:text-2xl leading-tight wrap-break-words">
                  {data.name}
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed w-full md:max-w-md wrap-break-words">
                  {data.desc}
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                <h1 className="text-rab-navy font-semibold">Detail Proyek</h1>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>Tahun</span>
                  </div>
                  <span>{data.tahun}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Tag size={16} />
                    <span>Kategori</span>
                  </div>
                  <span>{data.kategori}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>Lokasi</span>
                  </div>
                  <span>{data.lokasi}</span>
                </div>
                <div className="mt-3">
                  <a
                    href="https://wa.me/6285216591210?text=hallo%20saya%20ingin%20konsultasi%20mengenai%20konstruksi%20dan%20suplier%20barang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rab-navy w-full flex justify-center items-center gap-2 py-2 rounded-xl text-white hover:brightness-110 transition"
                  >
                    <FaWhatsapp className="text-xl" />
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
