import { Clock, Form, MapPin, Timeline } from "lucide-react";
import FormKontak from "./FormKontak";
import Kontak from "./kontak";
import { MdEmail, MdWifiCalling } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Formulir = () => {
  return (
    <div className="flex lg:flex-row flex-col space-x-4 gap-2 -mt-40 z-10 w-full min-h-60 ">
      <div className="lg:flex-1 w-full bg-white rounded-2xl shadow-2xl space-y-6  p-6">
        <div className="flex gap-2 ">
          <Form className="text-rab-navy w-8 h-8" />
          <div>
            <h1 className="text-rab-navy text-md font-semibold">
              Formulir Konsultasi Proyek
            </h1>
            <p className="text-sm text-[#a09b9b]">
              Isi formulir berikut untuk mendapatkan konsultasi terkait
              kebutuhan proyek konstruksi, renovasi, waterproofing maupun
              pengadaan material bangunan
            </p>
          </div>
        </div>
        <FormKontak />
      </div>
      <div className="md:w-100 bg-white rounded-2xl shadow-2xl p-6 ">
        <h1 className="text-rab-navy font-semibold">Informasi Perusahaan</h1>
        <div className="outline w-20 outline-[#8db03e] mt-2"></div>
        <div className="flex flex-col gap-2 md:mt-15">
          <Kontak
            icon={<MapPin className="text-rab-green w-6 h-6" />}
            judul="Alamat Kantor"
            konten="Makassar, Sulawesi Selatan"
          />
          <Kontak
            icon={<MdWifiCalling className="text-rab-green w-6 h-6" />}
            judul="Telopon/whatsapp"
            konten="+62 8232-0960-810"
          />
          <Kontak
            icon={<BsInstagram className="text-rab-green w-6 h-6" />}
            judul="Instagram"
            konten="renol_anugrah_bersama"
          />
          <Kontak
            icon={<MdEmail className="text-rab-green w-6 h-6" />}
            judul="Email"
            konten="renolanugrahbersama@gmail.com"
          />
          <Kontak
            icon={<Clock className="text-rab-green w-6 h-6" />}
            judul="Jam operasional"
            konten="Senin-Sabtu"
          />
        </div>
      </div>
    </div>
  );
};
export default Formulir;
