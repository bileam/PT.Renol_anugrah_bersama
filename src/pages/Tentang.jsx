import Cover from "../components/Tentang/Cover";
import KeunggulanKami from "../components/Tentang/KeunggulanKami";
import Profile from "../components/Tentang/Profile";
import VisiMisi2 from "../components/Tentang/rvVisiMisi";
import VisiMisi from "../components/Tentang/VisiMisi";

const Tentang = () => {
  const desc =
    "Mitra terpercaya dalam layanan konstruksi dan penyedia material  berkualitas dengan komitmen tinggi terhadap ketepatan waktu, kualitas pengerjaan, dan kepuasan pelanggan.";
  return (
    <section className="space-y-16">
      <Cover title="Tentang" desc={desc} />
      <div className="xl:container mx-auto px-2 md:px-5 flex flex-col gap-16 ">
        <Profile />
        <VisiMisi2 />
        {/* <VisiMisi /> */}
        <KeunggulanKami />
      </div>
    </section>
  );
};
export default Tentang;
