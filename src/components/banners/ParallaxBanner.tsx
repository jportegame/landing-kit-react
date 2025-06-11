import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";

interface ParallaxBannerProps {
  image?: string;
  title?: string;
  subtitle?: string;
}

const ParallaxBanner = ({
  image = "/medellinBanner.jpg",
  title = "Vive la experiencia Balu",
  subtitle = "Boutique Coliving para nómadas digitales",
}: ParallaxBannerProps) => {
  useEffect(() => {
    if (window.scrollY === 0) {
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 50, behavior: "smooth" });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 400);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <ParallaxProvider>
      <div className="relative h-screen overflow-hidden">
        {/* Imagen con parallax */}
        <Parallax speed={-40}>
          <img
            src={image}
            alt="Banner"
            className="w-full h-screen object-cover"
          />
        </Parallax>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Contenido centrado */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl drop-shadow-sm">{subtitle}</p>
          <div className="absolute bottom-6 animate-bounce text-white">
            <FaChevronDown size={40} />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxBanner;
