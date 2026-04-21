import Berkualitas from "../../assets/icon/Berkualitas_Konstruksi_Suplier_Barang.svg";
import jaminan from "../../assets/icon/Jaminan_Konstruksi_Suplier_Barang.svg";
import Pelanggan from "../../assets/icon/Pelanggan_Konstruksi_Suplier_Barang.svg";
import tim from "../../assets/icon/Tim_Konstruksi_Suplier_Barang.svg";
const KeunggulanKami = () => {
  const keunggulan = [
    {
      tema: "Tim Berpengalaman",
      desc: "tim prefesional yang terampil dan berdedikasi pada keunggulan",
      img: tim,
    },
    {
      tema: "Jaminan Kualitas ",
      desc: "kami menggunakankan material berkualitas tinggi dan bekerja sama dengan pemasok terpercaya untuk memastikan hasil yang tahan lama",
      img: jaminan,
    },
    {
      tema: "Pendekatan berfokus pada pelanggan",
      desc: "Kebutuhan dan kepuasan anda adalah prioritas utama kami",
      img: Pelanggan,
    },
    {
      tema: "Berkelanjutan",
      desc: "berkomitmen pada praktik ramah lingkungan dan solusi berkelanjutan untuk masa depan yang lebih baik",
      img: Berkualitas,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-5 overflow-hidden pb-5">
      <h1 data-aos="fade-up" className="text-rab-green font-bold text-lg ">
        keunggulan kami
      </h1>
      <h2 data-aos="fade-up" className="text-rab-navy font-bold text-3xl">
        Mengapa Memili kami?
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
        {keunggulan.map((item, index) => (
          <div data-aos="fade-up" data-aos-delay={index * 200} key={index}>
            <div className="px-4 h-full py-4 flex flex-col items-center hover:border-[#adff2f] bg-white border-l-4 border-[#8db03e] transition-all duration-300 hover:-translate-y-2 ease-in-out rounded-2xl flex-1 space-y-2">
              <img
                src={item.img}
                alt={item.img}
                className="w-15 h-15 rounded-full p-2 bg-rab-navy"
              />
              <h1 className="text-rab-navy font-bold text-center">
                {item.tema}
              </h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default KeunggulanKami;
