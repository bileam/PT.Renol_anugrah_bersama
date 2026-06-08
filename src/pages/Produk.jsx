import Product from "../components/Produk/Product";
import Cover from "../components/Tentang/Cover";
import Banner_produk_RAB from "../assets/Banner/Banner_produk_RAB.png";

const Produk = () => {
  return (
    <div className="">
      <Cover
        title="Produk"
        desc="kami menyediakan berbagai produk material konstruksi berkualitas yang telah melalui proses seleksi dan pengujian ketat. di rancang untuk mendukung keberhasilan proyek dengan hasil kuat, aman, dan tahan lama"
        image={Banner_produk_RAB}
      />
      <div className="lg:container mx-auto px-2 md:px-10 ">
        <Product />
      </div>
    </div>
  );
};
export default Produk;
