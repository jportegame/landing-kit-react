import SmallBanner from "../components/banners/SmallBanner";
import RoomCard from "../components/rooms/RoomCard";
import type { Room } from "../interfaces/Room";

import { siteConfig } from '../config/siteConfig'
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import type { LayoutType } from "react-photo-album";

const OurRoomsPage = () => {

  const rooms: Room[] = siteConfig.rooms;
  const commonAreas = siteConfig.commonAreas;

  return (
    <div>
      {/* Banner principal */}
      <SmallBanner
        image="/our-rooms/banner.jpg"
        title="Our Rooms"
        subtitle="Discover a world of luxury at Balu"
      />
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-2xl px-10 my-12">
        {rooms.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
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

export default OurRoomsPage;
