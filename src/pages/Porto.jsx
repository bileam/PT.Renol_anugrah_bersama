import Portofolio from "../components/Portofolio/Pertofolio";
import Cover from "../components/Tentang/Cover";
import Banner_Portofolio_RAB from "../assets/Banner/Banner_Portofolio_RAB.png";

const Porto = () => {
  return (
    <section>
      <Cover
        title="PORTOFOLIO"
        desc="hasil kerja nyata yang mencerminkan kualitas dan profesionalisme kami"
        image={Banner_Portofolio_RAB}
      />
      <div className="lg:container mx-auto px-2 md:px-10 ">
        <Portofolio />
      </div>
    </section>
  );
};
export default Porto;
