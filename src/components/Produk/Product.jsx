import contohgambar from "../../assets/image/home.jpg";
const Product = () => {
  const produk = [
    {
      kategori: "kategori",
      nama: "Pasir & batu Kali",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure.",
      img: contohgambar,
    },
    {
      kategori: "kategori",
      nama: "Pasir & batu Kali",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure.",
      img: contohgambar,
    },
    {
      kategori: "kategori",
      nama: "Pasir & batu Kali",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure.",
      img: contohgambar,
    },
    {
      kategori: "kategori",
      nama: "Pasir & batu Kali",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure.",
      img: contohgambar,
    },
    {
      kategori: "kategori",
      nama: "Pasir & batu Kali",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure.",
      img: contohgambar,
    },
    {
      kategori: "kategori",
      nama: "Pasir & batu Kali",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure.",
      img: contohgambar,
    },
  ];
  return (
    <div className="mt-4 flex flex-col gap-12 pb-12">
      <div className="flex flex-col  items-center gap-6">
        <h1 data-aos="fade-up" className="font-bold text-rab-green text-lg">
          KATALOK SUPLAI
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="font-bold text-rab-navy text-4xl text-center"
        >
          Material Bangunan Unggulan
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 lg:grid-cols-3">
        {/* untuk animasi */}
        {produk.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={index}
            className="w-full group"
          >
            <div className="h-[90%]  group-hover:-translate-y-2 transition-all duration-300 outline-0  outline-[#8db03e] group-hover:outline-1   bg-white rounded-2xl overflow-hidden shadow">
              <img src={item.img} alt="" />
              <div className="px-4 py-6 space-y-4">
                <div className="space-y-1.5">
                  <h1 className="py-1 px-2 bg-black/10 w-[25%] text-center rounded-full backdrop-blur-3xl text-rab-navy font-semibold">
                    {item.kategori}
                  </h1>
                  <h1 className="font-bold text-rab-navy text-xl">
                    {item.nama}
                  </h1>
                </div>
                <p className="text-sm pb-6">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col gap-6 items-center "
      >
        <h1>Butuh Material spesifik lainnya?</h1>
        <a
          href="https://wa.me/6285216591210?text=hallo%20saya%20ingin%20menanyakan%20mengenai%20dan%20suplier%20barang"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 py-2 px-6 border-[#1d4e89] text-[#1d4e89] shadow-2xl shadow-[#cdcdcd] hover:brightness-150 transition-all duration-500 cursor-pointer rounded-2xl"
        >
          Hubungi Tim Kami
        </a>
      </div>
    </div>
  );
};
export default Product;
