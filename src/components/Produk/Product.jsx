import { RiGhost2Fill } from "react-icons/ri";
import contohgambar from "../../assets/image/home.jpg";
// import waterprooping_RenolAnugrahBersama from "../../assets/Produk/Produk+RAB+Waterprooping.png";
// import concreteRepair from "../../assets/Produk/Produk+RAB+ConcreteRepair.png";
import brus from "../../assets/Produk/waterprooping/Brushbond+Flex.png";
import { Search, Sliders, SlidersVertical } from "lucide-react";
import { GiTopPaw } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import { produk } from "../../datas/Produk";
import { useState } from "react";
import ModalProduk from "../ModalProduk";
const Product = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [selectData, setSelectData] = useState(null);
  const filteredProduk = produk.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.kategori.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="mt-22 flex flex-col gap-12 pb-12">
      <div className="flex flex-col  items-stars ">
        <h1 data-aos="fade-up" className="font-bold text-rab-green text-lg">
          KATALOK SUPLAI
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="font-bold text-rab-navy text-4xl text-stars -mt-1"
        >
          Material Bangunan Unggulan
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full mt-1 flex md:justify-between md:flex-row flex-col gap-4"
        >
          <p className=" text-sm  md:w-[50%]">
            Kami menyediakan material konstruksi berkualitas tinggi yang
            dirancang untuk mendukung kekuatan, ketahanan, dan keberhasilan
            setiap proyek pembangunan Anda.
          </p>
          <div className="w-full relative flex  md:w-[40%]">
            <input
              type="text"
              name=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id=""
              className="py-2 text-sm px-10 outline-[#1d4e89] outline rounded-lg w-full "
              placeholder="Cari nama/katerogi material"
            />
            <Search className="absolute top-2 left-2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4  items-center md:grid-cols-2 lg:grid-cols-4">
        {/* untuk animasi */}

        {filteredProduk.length > 0 ? (
          filteredProduk.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              key={index}
              className="w-full group"
            >
              <div className="  group-hover:-translate-y-2 transition-all duration-300 outline-0  outline-[#8db03e] group-hover:outline-1   bg-white rounded-2xl overflow-hidden shadow">
                <div className=" bg-rab-navy h-50 relative ">
                  <span className=" py-1.5 shadow-2xl top-2 left-2 text-sm group-hover:bg-rab-green transition-colors duration-500  z-2 absolute  px-2 bg-black/60  text-center rounded-full backdrop-blur-3xl text-white ">
                    {item.kategori}
                  </span>
                  <img
                    src={item.img}
                    alt={item.nama}
                    className="object-cover h-50 group-hover:scale-110 transition-all w-full duration-700  mx-auto "
                  />
                </div>
                <div className="px-4 py-6 space-y-1">
                  <div className="space-y-1.5">
                    <h1 className="font-bold text-rab-navy text-xl">
                      {item.nama}
                    </h1>
                  </div>
                  <p
                    className="text-sm overflow-hidden text-ellipsis line-clamp-2
    "
                  >
                    {item.desc}
                  </p>
                  <div className=" outline w-full outline-green-100 mt-2"></div>
                  <div className="mt-5">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setSelectData(item);
                      }}
                      className="border-2 border-[#1d4e89] text-rab-navy rounded-lg group/button  hover:brightness-120 transition-all cursor-pointer duration-500 py-2 px-8 w-full flex gap-4 items-center"
                    >
                      <span className="group-hover/button:text-rab-green transition-all duration-300 text-sm">
                        {" "}
                        Detail Produk
                      </span>
                      <span
                        className="
      transition-colors
      duration-200
      group-hover/button:text-rab-green
    "
                      >
                        <FiArrowRight
                          className="ml-0 group-hover/button:ml-10 transition-[margin] duration-700
      "
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mx-auto w-100">
            <h1 className="font-bold">
              Cari produk berdasarkan kategori dan nama...
            </h1>
          </div>
        )}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col gap-6 items-center "
      >
        <h1>Butuh Material spesifik lainnya?</h1>
        <a
          href="https://wa.me/6282320960810?text=hallo%20saya%20ingin%20menanyakan%20mengenai%20dan%20Material"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 py-2 px-6 border-[#1d4e89] text-[#1d4e89] shadow-2xl shadow-[#cdcdcd] hover:brightness-150 transition-all duration-500 cursor-pointer rounded-2xl"
        >
          Hubungi Tim Kami
        </a>
      </div>
      <ModalProduk
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        data={selectData}
      />
    </div>
  );
};
export default Product;
