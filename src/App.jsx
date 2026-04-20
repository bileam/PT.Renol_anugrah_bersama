import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Produk from "./pages/Produk";
import Porto from "./pages/Porto";
import AOS from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      // Pengaturan opsional:
      duration: 800, // durasi animasi (ms)
      once: true, // jika false, animasi akan muncul setiap kali discroll (atas/bawah)
      // mirror: true, // apakah elemen harus animasi keluar saat discroll lewat
    });

    // Penting: Refresh AOS setiap kali ada perubahan konten
    AOS.refresh();
  }, []);
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
