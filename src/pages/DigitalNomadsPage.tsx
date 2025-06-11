import SmallBanner from "../components/banners/SmallBanner";
import { siteConfig } from "../config/siteConfig";
import InfoCard from "../components/cards/InfoCard";

const DigitalNomadsPage = () => {
  const digitalNomads = siteConfig.digitalNomads;

  const getInfoCards = digitalNomads.info.map((item, index) => (
    <InfoCard
      key={index}
      title={item.title}
      image={item.image}
      description1={item.description1}
      description2={item.description2}
      imagePosition={index % 2 === 0 ? "left" : "right"}
    />
  ));

  return (
    <>
      <div>
        <SmallBanner
          image="/about-us/banner.jpg"
          title="Digital Nomads"
          subtitle="Discover the freedom of working remotely in Medellín"
        />
      </div>
      <section className="px-6 py-5 mt-4 max-w-screen-xl mx-auto bg-white text-justify">
        <p className="text-gray-600 mx-auto mb-10 text-lg">
          {digitalNomads.description1}
        </p>
        <p className="text-gray-600  mx-auto mb-10 text-lg">
          {digitalNomads.description2}
        </p>
      </section>
      <section className="px-6 py-5 mt-4 max-w-screen-xl mx-auto">
        {getInfoCards}
      </section>
    </>
  );
};

export default DigitalNomadsPage;
