import { siteConfig } from "../config/siteConfig";
import { type LayoutType } from "react-photo-album";
import ParallaxBanner from "../components/banners/ParallaxBanner";
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import CarouselSection from "../components/carousel/Carousel";
import BaluFeatureCard from "../features/balu/BaluFeatureCard";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel";

const MainPage = () => {
  const banner = siteConfig.banner;
  const mosaic = siteConfig.mosaicSection;

  const getCarouselData = siteConfig.carouselSections.map((section, index) => (
    <BaluFeatureCard
      image={section.image}
      title={section.title}
      description1={section.description1}
      description2={section.description2}
      ctaLabel={section.cta}
      imagePosition={index % 2 === 0 ? "left" : "right"}
      whatsapp={siteConfig.contact.whatsapp}
    />
  ));

  return (
    <div>
      {/* Banner */}
      <ParallaxBanner
        title={banner.title}
        subtitle={banner.description}
        image={banner.image}
      />

      {/* Collage */}
      <section className="px-6 py-5 mt-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">{mosaic.title}</h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-10">
          {mosaic.description}
        </p>
        <PhotoMosaic
          images={mosaic.images}
          layout={mosaic.layout as LayoutType}
          columns={mosaic.columns}
          spacing={mosaic.spacing}
          padding={mosaic.padding}
        />
      </section>

      {/* Carousel */}
      <section className="max-w-screen-xl mx-auto py-5 bg-white">
        <CarouselSection data={getCarouselData} />
      </section>

      {/* Reviews */}
      <section className="w-full mx-auto px-6 py-5">
        <h2 className="text-3xl font-bold text-center mb-6">
          What our guests say
        </h2>
        <div className="w-full">
          <ReviewsCarousel reviews={siteConfig.reviews} />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
