import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hubungi from "./Hubungin";
import { FaWhatsapp } from "react-icons/fa";

const MainLayout = () => {
  const logos = ["logo1", "logo2", "logo3", "logo4"];

  const loop = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className="min-h-screen  ">
      <header className=" bg-white shadow z-50">
        <Navbar />
      </header>
      <main className="px-2 md:px-10 md:pt-24 pt-20">
        <Outlet />
      </main>
      <div className="relative">
        <div className="mt-5 ">
          <Hubungi />
        </div>
        {/* 
        <div className="bg-white overflow-hidden ">
          <div className="py-6">
            <div className="flex w-max marquee">
              {loop.map((logo, i) => (
                <div key={i} className="px-10 shrink">
                  <h1>{logo}</h1>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* end */}
        <a
          href="https://wa.me/6285216591210?text=hallo%20saya%20ingin%20konsultasi%20mengenai%20konstruksi%20dan%20suplier%20barang"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rab-navy lg:hidden z-20 fixed bottom-10 hover:scale-110 transition-all  shadow-2xl right-6 group gap-2 items-center text-white hoverbrightness-125 py-4 px-4 rounded-full ml-4"
        >
          <FaWhatsapp className="text-xl group-hover:scale-125 transition-all duration-500" />
        </a>
        <footer className=" sticky bottom-0 -z-20 ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
export default MainLayout;
