import BannerCarousel from "../components/Beranda/BannerCarousel";
import Layanan from "../components/Beranda/Layanan";
import MitraKami from "../components/Beranda/Mitrakami";
import Porto from "../components/Beranda/Porto";

const Beranda = () => {
  return (
    <div className="xl:container mx-auto px-2 md:px-5 flex flex-col gap-16">
      <BannerCarousel />
      <Layanan />
      <MitraKami />
      <Porto />
    </div>
  );
};

export default Beranda;
