
import bg_parallex from "../../assets/image/contoh.jpeg";
const VisiMisi2 = () => {
  const misi = [
    {
      desc: "Menjadi Peruhahaan konstruksi dan suplier terkemuka yang dikenal akan kualitas, ketepatan dan keandalan dalam setiap proyek, serta memberikan nilai terbaik untuk meningkatkan kepercayaan dan kepuasan klien",
    },
    {
      desc: "menghadirkan inovasi serta memastikan ketersedian material yang andal dan tepat guna dalam setiap proyek",
    },
    {
      desc: "membangun hubungan jangka panjang dengan klien melalui kepercayaan, prefesionalisme dan transparansi",
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${bg_parallex})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative md:h-[55vh] h-full object-cover    bg-fixed object-center overflow-hidden px-5 py-10 rounded-2xl flex md:flex-row flex-col gap-10 "
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1a]/80 via-[#0a0f1a]/50 to-[#0a0f1a]/80"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0f1a]/90"></div>
      <div className="flex-1 relative z-10">
        <h2 data-aos="fade-up" className="text-rab-green font-bold text-lg">
          Visi Kami
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white text-md md:mt-4 mt-2"
        >
          Menjadi Peruhahaan konstruksi dan suplier terkemuka yang dikenal akan
          kualitas, ketepatan dan keandalan dalam setiap proyek, serta
          memberikan nilai terbaik untuk meningkatkan kepercayaan dan kepuasan
          klien
        </p>
      </div>
      <div className="md:w-[50%]  relative z-10">
        <h2 data-aos="fade-up" className="text-rab-green font-bold text-lg">
          Misi kami
        </h2>
        <ul className="text-white text-md space-y-3 md:mt-4 mt-2">
          {misi.map((item, index) => (
            <div key={index} className="flex gap-2 ">
              <span
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="text-rab-green font-extrabold"
              >
                {">"}
              </span>
              <li data-aos="fade-up" data-aos-delay={index * 200}>
                {item.desc}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default VisiMisi2;
