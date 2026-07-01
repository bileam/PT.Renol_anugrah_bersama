import { useState } from "react";
import { LocateIcon, Phone, WorkflowIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { CgNametag } from "react-icons/cg";
import { TbMeterSquare } from "react-icons/tb";

const FormKontak = () => {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    lokasi: "",
    perusahaan: "",
    kebutuhan: "",
    estimasi: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const message = `
Hallo, saya ingin konsultasi mengenai kebutuhan material.

Nama Lengkap : ${form.nama}
Nomor WhatsApp : ${form.whatsapp}
Lokasi Proyek : ${form.lokasi}

Nama Perusahaan : ${form.perusahaan}
Kebutuhan : ${form.kebutuhan}
Estimasi Luas / Volume : ${form.estimasi}

Deskripsi :
${form.deskripsi}
  `;

  const whatsappLink = `https://wa.me/6282320960810?text=${encodeURIComponent(
    message
  )}`;

  const handleWhatsapp = (e) => {
    const requiredFields = [
      {
        key: "nama",
        label: "Nama Lengkap",
      },
      {
        key: "whatsapp",
        label: "Nomor WhatsApp",
      },
      {
        key: "lokasi",
        label: "Lokasi Proyek",
      },
      {
        key: "perusahaan",
        label: "Nama Perusahaan",
      },
      {
        key: "kebutuhan",
        label: "Kebutuhan",
      },
    ];

    const emptyField = requiredFields.find((field) => !form[field.key].trim());

    if (emptyField) {
      e.preventDefault();
      alert(`${emptyField.label} wajib diisi!`);
      return;
    }
  };

  return (
    <form>
      <div className="flex gap-10 md:flex-row flex-col ">
        <div className="flex flex-col gap-4 md:w-[50%]">
          <div className="flex flex-col gap-1 ">
            <label className="text-rab-navy">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>

            <div className="relative ">
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukan nama lengkap anda"
                className="p-2 outline rounded-lg outline-gray-100 bg-gray-50 w-full"
              />

              <CgNametag className="absolute top-2 right-0 w-10 h-6 text-rab-green" />
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-rab-navy">
              Nomor whatsapp <span className="text-red-500">*</span>
            </label>

            <div className="relative ">
              <input
                type="number"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="Contoh : 08xxxxxxxxxx"
                className="p-2 outline rounded-lg outline-gray-100 bg-gray-50 w-full"
              />

              <Phone className="absolute top-2 right-0 w-10 h-5 text-rab-green" />
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-rab-navy">
              Lokasi Proyek <span className="text-red-500">*</span>
            </label>

            <div className="relative ">
              <input
                type="text"
                name="lokasi"
                value={form.lokasi}
                onChange={handleChange}
                placeholder="Contoh: Jakarta Selatan"
                className="p-2 outline rounded-lg outline-gray-100 bg-gray-50 w-full"
              />

              <LocateIcon className="absolute top-2 right-0 w-10 h-5 text-rab-green" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-[50%] ">
          <div className="flex flex-col gap-1 ">
            <label className="text-rab-navy">
              Nama Perusahaan <span className="text-red-500">*</span>
            </label>

            <div className="relative ">
              <input
                type="text"
                name="perusahaan"
                value={form.perusahaan}
                onChange={handleChange}
                placeholder="PT / CV / INSTANSI"
                className="p-2 outline rounded-lg outline-gray-100 bg-gray-50 w-full"
              />

              <WorkflowIcon className="absolute top-2 right-0 w-10 h-6 text-rab-green" />
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-rab-navy">
              Kebutuhan <span className="text-red-500">*</span>
            </label>

            <div className="relative ">
              <input
                type="text"
                name="kebutuhan"
                value={form.kebutuhan}
                onChange={handleChange}
                placeholder="Masukan kebutuhan anda"
                className="p-2 outline rounded-lg outline-gray-100 bg-gray-50 w-full"
              />

              <WorkflowIcon className="absolute top-2 right-0 w-10 h-6 text-rab-green" />
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-rab-navy">Estimasi luas / volume</label>

            <div className="relative ">
              <input
                type="text"
                name="estimasi"
                value={form.estimasi}
                onChange={handleChange}
                placeholder="Contoh : 250 M²"
                className="p-2 outline rounded-lg outline-gray-100 bg-gray-50 w-full"
              />

              <TbMeterSquare className="absolute top-2 right-0 w-10 h-6 text-rab-green" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <textarea
          name="deskripsi"
          value={form.deskripsi}
          onChange={handleChange}
          placeholder="Jelaskan kebutuhan proyek atau material yang anda butuhkan"
          className="w-full bg-gray-100 outline p-2 outline-gray-100 min-h-20 max-h-30 rounded-lg"
        ></textarea>
      </div>

      <div className="md:w-[70%] md:mx-auto mt-6 ">
        <a
          href={whatsappLink}
          onClick={handleWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-rab-green
            py-2
            px-6
            shadow
            hover:scale-105
            transition-all
            duration-500
            flex
            justify-center
            items-center
            mx-auto
            gap-4
            rounded-lg
          "
        >
          <BsWhatsapp className="text-gray-100 w-8 h-8" />

          <div className="text-start">
            <p className="text-gray-50 text-lg">konsultasi via whatsapp</p>

            <span className="text-sm text-gray-100 ">
              Tim kami akan segera menghubungi anda
            </span>
          </div>
        </a>
      </div>
    </form>
  );
};

export default FormKontak;
