import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header className=" bg-white shadow z-50">
        <Navbar />
      </header>
      <main className="px-2 md:px-10 md:pt-24 pt-20">
        <Outlet />
      </main>
      <div className="hidden">contack</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
