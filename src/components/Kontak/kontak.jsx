const Kontak = ({ icon, judul, konten }) => {
  return (
    <div className="flex gap-2 mt-6 items-center">
      <div className="rounded-md p-2 bg-gray-200">{icon}</div>
      <div>
        <h1 className="text-rab-navy font-semibold">{judul}</h1>
        <p className="text-sm -mt-1">{konten}</p>
      </div>
    </div>
  );
};
export default Kontak;
