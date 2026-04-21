import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Produk from "./pages/Produk";
import Porto from "./pages/Porto";
import AOS from "aos";
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

  // 🔥 MAIN APP
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
