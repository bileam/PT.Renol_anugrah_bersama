import gambar from "../assets/image/home.jpg";
import { FaWhatsapp } from "react-icons/fa";
const Hubungin = () => {
  return (
    <div className="relative w-full h-100 md:h-112.5 overflow-hidden">
      {/* Background Image */}
      <img
        src={gambar}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 text-white">
          <div className="max-w-2xl space-y-4">
            <h1 className="font-bold text-2xl md:text-4xl leading-tight">
              Percayakan Setiap Project Anda Kepada Kami
            </h1>

            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              PT Renol Anugrah siap menjadi mitra terpercaya dalam bidang
              konstruksi dan penyedia layanan material. Dengan pengalaman,
              komitmen terhadap kualitas, serta dukungan tim profesional, kami
              memastikan setiap proyek dikerjakan tepat waktu, efisien, dan
              sesuai standar terbaik.
            </p>
            <button className="mt-4 px-6 py-3 bg-[#1d4e89] hover:bg-[#163b66] transition-all duration-300 rounded-lg text-sm md:text-base shadow-lg flex items-center gap-2">
              <FaWhatsapp className="text-xl" />
              Konsultasi dengan Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hubungin;
