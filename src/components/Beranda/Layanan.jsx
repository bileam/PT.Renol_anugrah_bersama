import logoKonstruksi from "../../assets/Logo/Kontruksi.jpg";
import supliermaterial from "../../assets/Logo/material.png";
import Kemitraan from "../../assets/Logo/kemitraan.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Layanan = () => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    AOS.init({
      // Pengaturan opsional:
      // duration: 800, // durasi animasi (ms)
      once: true, // jika false, animasi akan muncul setiap kali discroll (atas/bawah)
      // mirror: true, // apakah elemen harus animasi keluar saat discroll lewat
    });

    // Penting: Refresh AOS setiap kali ada perubahan konten
    // AOS.refresh();
    AOS.refreshHard();
  }, []);
  const layanan = [
    {
      judul: "Konstruksi Bangunan aplikator",
      desk: "Mengerjakan berbagai proyek konstruksi, mulai dari hunian, komersial, hingga infrastruktur, concrite repair, waterproofing, epoxy flooring, floorhardener dan perkuatan struktur dengan standar kualitas dan keselamatan.",
      img: logoKonstruksi,
    },
    {
      judul: "Suplier Material",
      desk: "menyediakan material bangunan berkualitas dari pemasok terpercaya dengan harga kompetitif dan pengiriman cepat",
      img: supliermaterial,
    },
    {
      judul: "Solusi Proyek Terintegrasi",
      desk: "Memberikan pembangunan terintegrasi mulai dari konsultasi, pengadaan material, hingga pelaksanaan proyek secata efisien dan profesional",
      img: logoKonstruksi,
    },
    {
      judul: "Kemitraan Terpercaya",
      desk: "membangun hubungan jangka panjang dengan klien melalui kepercayaan, integritas, dan komitmen terhadap kepuasan pelanggan.",
      img: Kemitraan,
    },
  ];

  useEffect(() => {
    const checkWidth = () => {
      setMobile(window.innerWidth < 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  });

  return (
    <div className="flex flex-col gap-6  justify-center items-center ">
      <h2 data-aos="fade-up" className="text-center text-rab-green font-bold">
        Layanan Utama
      </h2>
      <h1
        data-aos="fade-up"
        className="text-center text-rab-navy font-bold md:text-3xl text-2xl"
      >
        Apa Yang Kami Lakukan?
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {layanan.map((item, index) => (
          <div
            data-aos={isMobile ? "fade-up" : "flip-left"}
            data-aos-delay={index * 200}
            key={index}
          >
            <div
              className="px-6 py-6 w-full h-full bg-white group gap-4 
                 hover:-translate-y-2 hover:scale-105 hover:shadow-xl 
                 transition-all duration-500 ease-in-out 
                 rounded-2xl flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.judul}
                className="w-24 h-24 rounded-md 
                   group-hover:shadow-2xl shadow-[#8db03e] 
                   transition-all duration-500 object-cover bg-rab-light"
              />
              <h2 className="font-bold text-lg">{item.judul}</h2>
              <p className="text-sm">{item.desk}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Layanan;
