import { NavLink } from "react-router-dom";
import logoRAB from "../assets/Logo/NobgLogo.png";

const Footer = () => {
  const menu = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/Tentang" },
    { name: "Produk", path: "/produk" },
    { name: "Portofolio", path: "/portofolio" },
  ];

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-6 md:px-12 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* 🔹 Logo & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logoRAB}
              alt="logo PT Renol Anugrah Bersama"
              className="w-12 md:w-14"
            />
            <div>
              <h1 className="font-bold text-lg">PT. Renol Anugrah Bersama</h1>
              <p className="text-sm text-rab-green">
                General Contractor & Supplier
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            Menjadi mitra terpercaya dalam pembangunan nasional melalui
            integrasi dan dedikasi tinggi.
          </p>
        </div>

        {/* 🔹 Navigasi */}
        <div>
          <h1 className="font-bold mb-4">Navigasi</h1>
          <div className="flex flex-col gap-2">
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "text-rab-green font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* 🔹 Kontak */}
        <div>
          <h1 className="font-bold mb-4">Hubungi Kami</h1>

          <div className="flex flex-col gap-3 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <p className="break-all">renolanugrahbersama@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <span>📱</span>
              <p>+62 852 1659 1210</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} PT. Renol Anugrah Bersama. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
