import KeunggulanKami from "../components/Tentang/KeunggulanKami";
import Profile from "../components/Tentang/Profile";
import VisiMisi from "../components/Tentang/VisiMisi";

const Tentang = () => {
  return (
    <div className="xl:container mx-auto px-2 md:px-5 flex flex-col gap-16 ">
      <Profile />
      <VisiMisi />
      <KeunggulanKami />
    </div>
  );
};
export default Tentang;
