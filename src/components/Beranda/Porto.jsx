import gambar from "../../assets/image/home.jpg";
import gambar2 from "../../assets/image/contoh.jpeg";
import gambar3 from "../../assets/image/cott.jpeg";
import { Link, useNavigate } from "react-router-dom";
const Porto = () => {
  const Navigasi = useNavigate();
  const project = [
    { kategori: "infrastrukture", name: "pembangunan Jembatan", img: gambar },
    { kategori: "infrastrukture", name: "pembangunan Jembatan", img: gambar2 },
    { kategori: "infrastrukture", name: "pembangunan Jembatan", img: gambar3 },
  ];

  return (
    <div className="flex flex-col gap-6  justify-center items-center ">
      <h2 className="text-center text-rab-green font-bold">Proyek Terbaru</h2>
      <h1
        data-aos="zoom-in"
        className="text-center text-rab-navy font-bold md:text-5xl text-2xl"
      >
        Hasil Kerja kami
      </h1>
      <div className="py-10 flex md:flex-row flex-col gap-4 w-full items-center justify-center">
        {project.slice(0, 3).map((item, index) => (
          <Link
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            key={index}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={item.img}
              alt="gambar"
              className="W-full h-100 object-cover group-hover:scale-120 rounded-2xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black group-hover:opacity-70 transition-opacity duration-500 opacity-0"></div>
            <div className="absolute -bottom-5 opacity-0 transition-all duration-500 group-hover:opacity-100 ease-in-out  group-hover:bottom-2 left-0 right-0 p-4 text-white">
              <h1 className="text-md opacity-80">{item.kategori}</h1>
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          </Link>
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
