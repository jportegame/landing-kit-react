// src/pages/RoomDetailsPage.tsx
import { useParams } from "react-router-dom"; // Asumiendo que tienes un componente PhotoMosaic
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import type { Room } from "../interfaces/Room";
import { siteConfig } from "../config/siteConfig";
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import SmallBanner from "../components/banners/SmallBanner";
import type { LayoutType } from "react-photo-album";

const RoomDetailsPage = () => {
  const { slug } = useParams();
  const [room, setRoom] = useState<Room | null>(null);

  const rooms: Room[] = siteConfig.rooms;
  const commonAreas = siteConfig.commonAreas;

  useEffect(() => {
    const foundRoom = rooms.find((r) => r.slug === slug);
    setRoom(foundRoom || null);
  }, [slug]);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div>
      <SmallBanner
        image={room.images[0].src}
        title={room.title}
        subtitle="Discover a world of luxury at Balu"
      />

      <section className="px-6 py-5 mt-4 bg-white text-center">
        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-5">
          {room.longDescription}
        </p>
        <PhotoMosaic
          images={room.images}
          layout="rows"
          columns={1}
          spacing={4}
          padding={0}
        />
      </section>

      <div className="container p-6 w-full mx-auto">
        <div className="mt-2">
          <h2 className="text-4xl font-semibold text-center mb-4">Room Features</h2>

          {/* Grid para características del cuarto */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {room.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-2 text-7xl text-gray-600">
                  {feature.icon}
                </div>
                <h3 className="font-medium">{feature.title}</h3>
                {feature.description && (
                  <p className="text-sm text-gray-400 mt-1">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Botón de reserva */}
        <div className="flex justify-center mt-8 w-full">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-md font-medium px-16 py-3 rounded hover:bg-opacity-80 transition flex items-center gap-2"
          >
            <FaWhatsapp />
            BOOK NOW
          </a>
        </div>
      </div>
      {/* Common Areas */}
      <section className="px-6 py-5 mt-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">{commonAreas.title}</h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-10">
          {commonAreas.description}
        </p>
        <PhotoMosaic
          images={commonAreas.images}
          layout={commonAreas.layout as LayoutType}
          columns={commonAreas.columns}
          spacing={commonAreas.spacing}
          padding={commonAreas.padding}
        />
      </section>
    </div>
  );
};

export default RoomDetailsPage;
