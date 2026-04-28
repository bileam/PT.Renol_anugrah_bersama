import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Produk from "./pages/Produk";
import Porto from "./pages/Porto";
import AOS from "aos";
import gambar from "./assets/image/home.jpg";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Init AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    AOS.refresh();

    // Simulasi loading (bisa diganti API nanti)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 LOADING SCREEN
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-6">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-[#1d4e89] border-t-transparent rounded-full animate-spin"></div>

          {/* Text */}
          <h1 className="text-xl font-semibold text-[#1d4e89]">
            Memuat halaman...
          </h1>
        </div>
      </div>
    );
  }

  // return (
  //   <div className="min-h-screen bg-white">
  //     {/* Hero Section dengan Background Fixed
  //     'bg-fixed' adalah kunci agar gambar tidak ikut bergerak saat scroll.
  //   */}
  //     <section
  //       className="relative h-screen w-full flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
  //       style={{
  //         // Menggunakan placeholder gambar interior yang mirip dengan contoh
  //         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2067')`,
  //       }}
  //     >
  //       <div className="text-center px-4 md:px-10 max-w-5xl">
  //         <h1 className="text-white text-4xl md:text-7xl font-semibold tracking-tight leading-tight mb-4 drop-shadow-lg">
  //           Changing the world is possible. <br />
  //           We've done it before.
  //         </h1>
  //         {/* Garis dekoratif opsional */}
  //         <div className="w-24 h-1 bg-white mx-auto mt-8 opacity-50"></div>
  //       </div>
  //     </section>

  //     {/* Konten selanjutnya untuk menunjukkan efek scroll */}
  //     <section className="py-20 px-8 bg-zinc-50">
  //       <div className="max-w-3xl mx-auto space-y-8">
  //         <h2 className="text-3xl font-bold text-zinc-900">Tentang Efek Ini</h2>
  //         <p className="text-lg text-zinc-700 leading-relaxed">
  //           Teknik ini menggunakan properti CSS{" "}
  //           <code className="bg-zinc-200 px-1 rounded text-red-600">
  //             background-attachment: fixed;
  //           </code>
  //           . Dalam Tailwind CSS, kita cukup menggunakan class{" "}
  //           <span className="font-mono font-bold">bg-fixed</span>.
  //         </p>
  //         <p className="text-lg text-zinc-700 leading-relaxed">
  //           Gunakan <span className="font-mono font-bold">bg-cover</span> untuk
  //           memastikan gambar memenuhi seluruh layar, dan{" "}
  //           <span className="font-mono font-bold">bg-center</span> untuk menjaga
  //           posisi gambar tetap di tengah secara horizontal dan vertikal.
  //         </p>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  //           <div className="p-6 bg-white shadow-sm border border-zinc-200 rounded-xl">
  //             <h3 className="font-bold mb-2">Desain Minimalis</h3>
  //             <p className="text-zinc-600 italic text-sm">
  //               "Simplicity is the ultimate sophistication."
  //             </p>
  //           </div>
  //           <div className="p-6 bg-white shadow-sm border border-zinc-200 rounded-xl">
  //             <h3 className="font-bold mb-2">Responsif</h3>
  //             <p className="text-zinc-600 text-sm">
  //               Teks akan menyesuaikan ukuran pada layar kecil secara otomatis
  //               berkat utilitas responsive Tailwind.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Section kedua dengan background berbeda untuk variasi */}
  //     <section
  //       className="h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
  //       style={{
  //         backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2001')`,
  //       }}
  //     >
  //       <h2 className="text-white text-3xl md:text-5xl font-light italic">
  //         Inovasi tanpa batas.
  //       </h2>
  //     </section>

  //     <section className="bg-white py-20 text-black border">
  //       <h2 className="text-3xl font-bold text-zinc-900">Tentang Efek Ini</h2>
  //     </section>
  //     <section
  //       className="object-cover object-center h-[50vh] bg-fixed"
  //       style={{
  //         backgroundImage: `url(${gambar})`,
  //       }}
  //     >
  //       <div className="h-full  flex items-center justify-center bg-black/60">
  //         <h1 className="text-white text-3xl md:text-5xl font-light italic">
  //           inovasi tampa batas
  //         </h1>
  //       </div>
  //     </section>
  //     <footer className="py-10 text-center text-zinc-400 text-sm">
  //       © 2024 Your Creative Agency.
  //     </footer>
  //   </div>
  // );

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/portofolio" element={<Porto />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
