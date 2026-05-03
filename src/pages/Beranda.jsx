import BannerCarousel from "../components/Beranda/BannerCarousel";
import Layanan from "../components/Beranda/Layanan";
import MitraKami from "../components/Beranda/Mitrakami";
import Porto from "../components/Beranda/Porto";

const Beranda = () => {
  return (
    <section className="space-y-16">
      <BannerCarousel />
      <div className="xl:container mx-auto px-2 md:px-5 flex flex-col gap-16">
        <Layanan />
        <MitraKami />
        <Porto />
      </div>
    </section>
  );
};

export default Beranda;
