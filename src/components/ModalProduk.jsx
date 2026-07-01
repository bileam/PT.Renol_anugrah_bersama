import { BsWhatsapp } from "react-icons/bs";
const ModalProduk = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed py-2 inset-0 px-2 bg-black/60 flex items-center justify-center z-100"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white md:w-[60%]  relative md:h-[80%] h-full flex md:flex-row flex-col rounded-xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer z-100 hover:scale-110 transition-all duration-300 top-2 right-6  w-8 h-8 rounded-full border flex items-center justify-center bg-rab-green brightness-110 hover:brightness-125"
        >
          <span className="text-[#f1f5f9]">X</span>
        </button>
        <div className="relative overflow-hidden md:w-[60%]  group">
          <img
            src={data.img}
            alt=""
            className="
      w-full 
      h-full 
      object-cover
 
      transition-all
      duration-700
    "
          />
          <div
            className="
      absolute 
      inset-0 
      bg-black/50
    "
          />
          <div
            className="
      absolute 
      bottom-0 
      left-0 
      w-full 
      h-40
      bg-linear-to-t
      from-blue-800
      via-blue-600/40
      to-transparent
    "
          />

          <div className="absolute bottom-6 left-6 z-10">
            <span className="py-2 px-4 text-sm bg-rab-navy text-[#f1f5f9] rounded-md">
              {data.kategori}
            </span>

            <h2 className="text-[#adff2f] font-bold mt-2">{data.nama}</h2>
          </div>
        </div>
        <div className="flex-1 p-4 bg-[#012552] space-y-4 relative">
          <div>
            <p className="text-sm text-gray-400">nama produk</p>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-rab-green "></div>
              <p className="text-[#f1f5f9]">{data.nama}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">Janis</p>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-rab-green "></div>
              <p className="text-[#f1f5f9]">{data.kategori}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">deskripsi</p>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-rab-green "></div>
              <p className="text-[#f1f5f9] text-sm">{data.desc}</p>
            </div>
          </div>
          <div className="absolute bottom-5 gap-2 left-0 w-full flex flex-col  items-center justify-center">
            <a
              href={`https://wa.me/6282320960810?text=Hallo,%20saya%20ingin%20konsultasi%20mengenai%20produk%20${data.nama}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rab-green cursor-pointer hover:brightness-125 transition-all duration-500 flex items-center justify-center gap-2 w-[80%] p-2 rounded-lg text-[#0f172a] font-semibold text-sm"
            >
              <BsWhatsapp />
              <span>konsultasi dengan kami</span>
            </a>
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-50 cursor-pointer transition-colors duration-300"
            >
              Kembali ke katalok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduk;
