import gambar from "../../assets/image/about.jpeg";
const Profile = () => {
  return (
    <div className="flex  overflow-hidden md:flex-row flex-col md:gap-10 gap-2 w-full md:items-center ">
      <div
        data-aos="fade-right"
        className="relative flex-1 rounded-2xl overflow-hidden"
      >
        <img
          src={gambar}
          alt="gambar bangunanan"
          className="w-full md:h-100 object-cover rounded-2xl  "
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="md:w-[40%]">
        <h1 data-aos="fade-left" className="font-bold text-rab-green">
          Profile Perusahaan
        </h1>
        <h2
          data-aos-delay="400"
          data-aos="fade-left"
          className="font-extrabold text-3xl "
        >
          PT. RENOL ANUGRAH
          <span className="block text-rab-green ">BERSAMA</span>
        </h2>
        <p
          data-aos="fade-left"
          data-aos-delay="600"
          className="text-sm text-between mt-2"
        >
          PT Renol Anugrah Bersama adalah perusahaan terpercaya yang bergerak di
          bidang konstruksi, aplikator dan supplier material konstruksi dan
          chemical konstruksi. Berdiri dengan visi untuk menghadirkan
          pembangunan yang berkualitas, aman, nyaman penyediaan material yang
          sesuai dengan kebutuhan customer, kami mengedepankan keahlian,
          ketepatan, serta inovasi dalam setiap proyek dan layanan yang kami
          berikan.
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="800"
          className="text-sm mt-2 md:block hidden"
        >
          Mulai dari pembangunan proyek konstruksi, jasa aplikator hingga
          penyediaan material yang berkualitas, misi kami adalah memberikan
          hasil terbaik, tepat waktu, dan sesuai kebutuhan untuk melampaui
          harapan setiap klien.
        </p>
      </div>
    </div>
  );
};
export default Profile;
