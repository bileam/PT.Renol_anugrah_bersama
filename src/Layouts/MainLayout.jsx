import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hubungi from "./Hubungin";

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
