import Formulir from "../components/Kontak/Formulir";
import Cover from "../components/Tentang/Cover";

const Kontak = () => {
  return (
    <section>
      <Cover
        title="Hubungi"
        desc="Isi formulir berikut untuk memulai konsultasi mengenai konstruksi, renovasi, waterproofing, dan kebutuhan material bangunan Anda."
      />
      <div className="flex space-x-2 lg:container mx-auto px-2 md:px-10 ">
        <Formulir />
      </div>
    </section>
  );
};
export default Kontak;
