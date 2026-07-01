import gambar from "../assets/image/gem.jpeg";
import { FaWhatsapp } from "react-icons/fa";
const Hubungin = () => {
  return (
    <div
      style={{ backgroundImage: `url(${gambar})` }}
      className="relative w-full h-80 md:h-[60vh]   overflow-hidden object-cover object-center bg-fixed"
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1a]/80 via-[#0a0f1a]/50 to-[#0a0f1a]/80"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0f1a]/90"></div>
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
            <div>
              <a
                href="https://wa.me/6282320960810?text=hallo%20saya%20ingin%20konsultasi%20mengenai%20konstruksi%20dan%20Material"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-65 px-6 py-3 bg-[#1d4e89] hover:bg-[#163b66] transition-all duration-300 rounded-lg text-sm md:text-base shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Konsultasi dengan Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hubungin;
