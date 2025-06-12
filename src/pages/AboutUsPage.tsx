import { useRef, useState } from "react";
import SmallBanner from "../components/banners/SmallBanner";
import ImageCard from "../components/cards/ImageCard";
import Modal from "../components/common/Modal";
import { siteConfig } from "../config/siteConfig";
import InfoCard from "../components/cards/InfoCard";

const AboutUsPage = () => {
  const modalRef = useRef<any>(null);

  const info = siteConfig.aboutUs.info;
  const aboutUs = siteConfig.aboutUs;

  const [selectedTopic, setSelectedTopic] = useState<number>(-1);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  /* const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.closeModal();
    }
  }; */

  const getModalData =
    selectedTopic !== -1
      ? info[selectedTopic].content.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            image={item.image}
            description1={item.description1}
            description2={item.description2}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))
      : null;

  return (
    <div>
      <SmallBanner
        image="/about-us/banner.jpg"
        title="About Us"
        subtitle="Discover Balu's Values and Activities"
      />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {info.map((item, index) => (
          <ImageCard
            onClick={() => {
              setSelectedTopic(index);
              setTimeout(openModal, 100);
            }}
            key={index}
            data={item}
          />
        ))}
      </div>
      <section className="px-6 py-5 mt-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">{aboutUs.callToAction}</h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-lg">
          {aboutUs.description}
        </p>
      </section>
      {selectedTopic !== -1 && (
        <Modal ref={modalRef} title={info[selectedTopic].title}>
          <div>{getModalData}</div>
        </Modal>
      )}
    </div>
  );
};

export default AboutUsPage;
