import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hubungi from "./Hubungin";
import { FaWhatsapp } from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header className=" bg-white shadow z-50">
        <Navbar />
      </header>
      <main className="px-2 md:px-10 md:pt-24 pt-20">
        <Outlet />
      </main>
      <div className="mt-5">
        <Hubungi />
      </div>
      <a
        href="https://wa.me/6281242922597?text=hallo%20saya%20ingin%20konsultasi%20mengenai%20konstruksi%20dan%20suplier%20barang"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-rab-navy lg:hidden z-20 fixed bottom-10 hover:scale-110 transition-all  shadow-2xl right-6 group gap-2 items-center text-white hoverbrightness-125 py-4 px-4 rounded-full ml-4"
      >
        <FaWhatsapp className="text-xl group-hover:scale-125 transition-all duration-500" />
      </a>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
