import bgimg from "../../assets/image/gem.jpeg";
const VisiMisi = () => {
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
    <div className="bg-rab-navy relative overflow-hidden px-5 py-10 rounded-2xl flex md:flex-row flex-col gap-10 ">
      <img
        src={bgimg}
        alt="background konstruksi"
        className="absolute w-full inset-0 h-full object-cover md:object-top"
      />
      <div className="bg-[#0f172a]/85 absolute inset-0"></div>
      <div className="flex-1 relative z-10">
        <h1 data-aos="fade-up" className="text-rab-green font-bold text-lg">
          Visi Kami
        </h1>
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
        <h1 data-aos="fade-up" className="text-rab-green font-bold text-lg">
          Misi kami
        </h1>
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
    </div>
  );
};
export default VisiMisi;
