import {
  FaBed,
  FaCoffee,
  FaCouch,
  FaDesktop,
  FaLeaf,
  FaRegWindowMaximize,
  FaShower,
  FaSnowflake,
  FaTv,
  FaWifi,
} from "react-icons/fa";

export const siteConfig = {
  navigation: [
    { path: "/", label: "Home", component: "MainPage" },
    { path: "/our-rooms", label: "Our Rooms", component: "OurRoomsPage" },
    { path: "/about", label: "About Us", component: "AboutUsPage" },
    {
      path: "/digital-nomads",
      label: "Digital Nomads",
      component: "DigitalNomadsPage",
    },
    { path: "/contact", label: "Contact Us", component: "ContactUsPage" },
  ],
  contact: {
    whatsapp: "573001234567",
  },
  banner: {
    title: "Balu Coliving",
    description:
      "Boutique Coliving Life is short - Let's enjoy it ☀️ Medellín - Colombia ",
    image: "./medellinBanner.jpg",
  },
  mosaicSection: {
    title: "Our Lifestyle",
    description:
      "Life at Balu Coliving is more than just a place to stay — it’s a shared experience of creativity, nature, connection, and joy. Our photo collage captures the vibrant energy of our community: from morning yoga and shared meals to hikes, workspaces, and cultural exchanges. This is the spirit of Balu — a space where digital nomads, travelers, and creators come together to live with intention.",
    images: [
      { src: "./collage/collage1.jpg", width: 2048, height: 1366 },
      { src: "./collage/collage2.jpg", width: 426, height: 756 },
      { src: "./collage/collage3.jpg", width: 768, height: 576 },
      { src: "./collage/collage4.jpg", width: 2048, height: 1366 },
      { src: "./collage/collage5.jpg", width: 2048, height: 1366 },
      { src: "./collage/collage6.jpg", width: 1875, height: 1251 },
      { src: "./collage/collage7.jpg", width: 2048, height: 1366 },
      { src: "./collage/collage8.jpg", width: 2048, height: 1536 },
      { src: "./collage/collage9.png", width: 360, height: 360 },
      { src: "./collage/collage10.jpg", width: 1440, height: 1080 },
      { src: "./collage/collage11.jpg", width: 1600, height: 1200 },
      { src: "./collage/collage12.jpg", width: 585, height: 878 },
      { src: "./collage/collage13.jpg", width: 2048, height: 1366 },
      { src: "./collage/collage14.jpg", width: 1512, height: 2016 },
      { src: "./collage/collage15.jpg", width: 1599, height: 899 },
    ],
    layout: "columns",
    columns: 5,
    spacing: 4,
    padding: 0,
  },
  carouselSections: [
    {
      id: "stay-live",
      image: "./carousel/stay-live.jpg",
      title: "Stay & Live",
      description1:
        "Balu Coliving is full of beautifully curated spaces to relax, work or enjoy. Chill on the spacious balcony, focus on work in the designated coworking space or put your feet up in the cosy living room. Connect with interesting souls from all over the world. Network. Be inspired. Make life long friends. It is time to create memories in Medellin.",
      description2:
        "All of our private rooms have been specially designed to create the ideal living environment for Digital Nomads. Each room has it’s own private bathroom, work desk, private fridge, air conditioning, smart tv & fast wifi.",
      cta: "Stay & Live At Balu",
    },
    {
      id: "create-experience",
      image: "./carousel/create-experience.jpg",
      title: "Create & Experience",
      description1:
        "Balu is so much more than a coliving space. It is an experience that will stay with you forever. We are located in the heart of Laureles near cute cafes, coworking spaces, restaurants, bars, supermarkets and gyms. We are also a short walk to the best salsa venue in Medellin – Son Havana. Perfect location. Amazing accommodation. Genuine connections",
      description2:
        "Balu is the perfect environment for living, working & socialising. You will be living your best life. This is your time to experience a new way of living.",
      cta: "Create & Experience At Balu",
    },
    {
      id: "explore-discover",
      image: "./carousel/explore-discover.jpg",
      title: "Explore & Discover",
      description1:
        "Colombia is a paradise waiting to be explored. Incredible beaches, lush jungle and colourful pueblos. Colombia has it all. The secret is finally out. Now it’s your time to experience all of the beauty that Colombia has to offer. Balu is here to help you with any Colombia related questions you may have. Whether you are looking for secret beaches, the best treks or the cutest boutique hotels then we are happy to share all of the gems with you. Get in touch with Balu today to start planning the dream chapter.",
      description2: "",
      cta: "Explore & Discover At Balu",
    },
  ],
  googleMap: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4214.008382269829!2d-75.59124592474005!3d6.247168193741228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429710cff0233%3A0x1cc5633e14a20552!2sBalu%20Coliving!5e1!3m2!1sen!2sco!4v1747780087163!5m2!1sen!2sco",
  },
  reviews: [
    {
      name: "Yan",
      initial: "Y",
      date: "2 months ago",
      text: "I stayed at Balu for 6 weeks in early 2025. The rooms are nice, the facilities and shared spaces are super clean, and the company was great! Jo and Diana go above and beyond trying to make their guest's experiences amazing. They organize …",
      stars: 5,
    },
    {
      name: "Dave",
      initial: "D",
      date: "2 months ago",
      text: "I’ve spent eight years as a digital nomad and backpacker, and in that time, Balu has consistently ranked among the best places I’ve experienced. They offer high-quality accommodation at fair prices in a prime Laureles location. The …",
      stars: 5,
    },
    {
      name: "Anonymous",
      initial: "A",
      date: "2 months ago",
      text: "Balu is a gem is beautiful city! I loved my time there - the space was so nice and clean, the community was fun and exciting, and the hosts were active and engaged! Would completely return!",
      stars: 5,
    },
    {
      name: "Anonymous",
      initial: "A",
      date: "2 months ago",
      text: "Balu es un lugar increíble! Joe y Diana son muy amigables, cada semana siempre están organizando eventos, paseos, comidas y deportes. ¡Una experiencia muy bonita!",
      stars: 5,
    },
    {
      name: "Traveler",
      initial: "T",
      date: "8 months ago",
      text: "Balu Coliving is one of my favorite coliving spots in the world — and I've stayed at over 10 of them across 4 continents. The rooms look *exactly* like the pictures, which is rare in the hospitality industry!",
      stars: 5,
    },
    {
      name: "Guest",
      initial: "G",
      date: "1 month ago",
      text: "I’ve had a great stay at Balu. Diana and Joe go above and beyond to make sure you’re getting a good experience out of your stay in Medellín!",
      stars: 5,
    },
  ],
  footer: {
    about: {
      logo: "/logo-footer.png",
      description:
        "We believe that life is all about creating unique and lasting memories, different cultures coming together to connect from all over the globe.",
      social: [
        { icon: "facebook", url: "https://www.facebook.com/balucoliving/" },
        {
          icon: "instagram",
          url: "https://www.instagram.com/balucolivingmedellin/",
        },
      ],
    },
    contact: {
      whatsapp: "+57 312 696 5333",
      email: "balucoliving@gmail.com",
    },
    quickMenu: [
      { label: "Home", path: "/" },
      { label: "Our Rooms", path: "/our-rooms" },
      { label: "About Us", path: "/about" },
      { label: "Digital Nomads", path: "/digital-nomads" },
    ],
    legal: {
      year: 2025,
      text: "Balu Coliving",
    },
  },
  rooms: [
    {
      title: "Bedroom 1",
      shortDescription:
        "One of only two rooms that comes with a cute, shared courtyard full of lush green plants.",
      longDescription:
        "This room has a lovely shared courtyard with dining areas, relaxation benches, and more.",
      slug: "bedroom-1",
      images: [
        {
          src: "/our-rooms/room-1/room1-main.jpg",
          alt: "Room 1 - Image Main",
          width: 1667,
          height: 2500,
        },
        {
          src: "/our-rooms/room-1/room1-1.jpg",
          alt: "Room 1 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-1/room1-2.jpg",
          alt: "Room 1 - Image 2",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-1/room1-3.jpg",
          alt: "Room 1 - Image 3",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Delightful Courtyard",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Largest Wardrobe In The Property",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 2",
      shortDescription:
        "It's the only bedroom in the house with a spacious private balcony with lots of room to work, chill or have an afternoon nap.",
      longDescription:
        "It's the only bedroom in the house with a spacious private balcony with lots of room to work, chill or have an afternoon nap.",
      slug: "bedroom-2",
      images: [
        {
          src: "/our-rooms/room-2/room2-main.jpg",
          alt: "Room 2 - Image Main",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-2/room2-1.jpg",
          alt: "Room 2 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-2/room2-2.jpg",
          alt: "Room 2 - Image 2",
          width: 1667,
          height: 2500,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Four Poster Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Balcony",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 3",
      shortDescription:
        "Wake up every morning to the beautiful hanging plants outside of the modern, bright and welcoming windows. It’s the perfect room for the early bird who loves lots of natural light.",
      longDescription:
        "Wake up every morning to the beautiful hanging plants outside of the modern, bright and welcoming windows. It’s the perfect room for the early bird who loves lots of natural light.",
      slug: "bedroom-3",
      images: [
        {
          src: "/our-rooms/room-3/room3-main.jpg",
          alt: "Room 3 - Image Main",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-3/room3-1.jpg",
          alt: "Room 3 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-3/room3-2.jpg",
          alt: "Room 3 - Image 2",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Huge King Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Fridge",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Chill Out Sofa",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Large Modern Windows with Hanging Plants Outside",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 4",
      shortDescription:
        "Cute, Cosy & Comfortable - it's the perfect environment for the Digital Nomad who enjoys a delightful space.",
      longDescription:
        "Cute, Cosy & Comfortable - it's the perfect environment for the Digital Nomad who enjoys a delightful space.",
      slug: "bedroom-4",
      images: [
        {
          src: "/our-rooms/room-4/room4-main.jpg",
          alt: "Room 4 - Image Main",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-4/room4-1.jpg",
          alt: "Room 4 - Image 2",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Single Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 5",
      shortDescription:
        "A beautiful room that is ideal for one or two guests. Soft, warm, and inviting colours ensure this is one of the cosiest rooms at Balu. You will find lots of hanging plants, natural sunlight, and welcoming features for you to have the perfect stay.",
      longDescription:
        "A beautiful room that is ideal for one or two guests. Soft, warm, and inviting colours ensure this is one of the cosiest rooms at Balu. You will find lots of hanging plants, natural sunlight and welcoming features for you to have the perfect stay.",
      slug: "bedroom-5",
      images: [
        {
          src: "/our-rooms/room-5/room5-main.jpg",
          alt: "Room 5 - Image Main",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-5/room5-1.jpg",
          alt: "Room 5 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-5/room5-2.jpg",
          alt: "Room 5 - Image 2",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Queen Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Fridge",
          icon: <FaSnowflake />,
        },
        {
          title: "Hanging Plants",
          icon: <FaLeaf />,
        },
        {
          title: "Large Modern Windows",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 6",
      shortDescription:
        "One of our most popular rooms. Our guests love to spend time in the chilled courtyard. Enjoy a morning coffee outside, reply to work emails from the long bench or just enjoy the glorious sunshine.",
      longDescription:
        "One of our most popular rooms. Our guests love to spend time in the chilled courtyard. Enjoy a morning coffee outside, reply to work emails from the long bench or just enjoy the glorious sunshine.",
      slug: "bedroom-6",
      images: [
        {
          src: "/our-rooms/room-6/room6-main.jpg",
          alt: "Room 6 - Image Main",
          width: 1667,
          height: 2500,
        },
        {
          src: "/our-rooms/room-6/room6-1.jpg",
          alt: "Room 6 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-6/room6-2.jpg",
          alt: "Room 6 - Image 2",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-6/room6-3.jpg",
          alt: "Room 6 - Image 3",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Delightful Courtyard",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Four Poster Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 7",
      shortDescription:
        "A beautifully shaped room makes this one of the guests’ favourites. It also comes with a huge work desk which is perfect for any Nomads travelling with a monitor.",
      longDescription:
        "A beautifully shaped room makes this one of the guests’ favourites. It also comes with a huge work desk which is perfect for any Nomads travelling with a monitor.",
      slug: "bedroom-7",
      images: [
        {
          src: "/our-rooms/room-7/room7-main.jpg",
          alt: "Room 7 - Image Main",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-7/room7-1.jpg",
          alt: "Room 7 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-7/room7-2.jpg",
          alt: "Room 7 - Image 2",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Largest Work Desk In Balu",
          icon: <FaDesktop />,
        },
        {
          title: "Comfy Work Chair",
          icon: <FaCouch />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Fridge",
          icon: <FaSnowflake />,
        },
        {
          title: "Chill-Out Chair",
          icon: <FaCouch />,
        },
        {
          title: "Extra Shelving Space",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Bedroom 8",
      shortDescription:
        "A huge King-sized bed awaits you. You will love this room if you value the comforts of life. Not only does it have the biggest bed in Balu, it also has the largest bathroom and the second largest work desk. Let the good times roll.",
      longDescription:
        "A huge King-sized bed awaits you. You will love this room if you value the comforts of life. Not only does it have the biggest bed in Balu, it also has the largest bathroom and the second largest work desk. Let the good times roll.",
      slug: "bedroom-8",
      images: [
        {
          src: "/our-rooms/room-8/room8-1.jpg",
          alt: "Room 8 - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/room-8/room8-2.jpg",
          alt: "Room 8 - Image 2",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          description: "Hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Second Largest Work Desk In Balu",
          icon: <FaDesktop />,
        },
        {
          title: "Comfy Work Chair",
          icon: <FaCouch />,
        },
        {
          title: "Fast Fibre Optic Internet",
          description: "Plug in directly from your desk",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Huge King Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
        {
          title: "Large Wardrobe",
          icon: <FaRegWindowMaximize />,
        },
        {
          title: "Private Fridge",
          icon: <FaSnowflake />,
        },
        {
          title: "Extra Shelving Space",
          icon: <FaRegWindowMaximize />,
        },
      ],
    },
    {
      title: "Studio",
      shortDescription:
        "Our modern, cosy and stylish studio is perfect for Nomads who enjoy all of the finer things in life.",
      longDescription:
        "Our modern, cosy and stylish studio is perfect for Nomads who enjoy all of the finer things in life.",
      slug: "studio",
      images: [
        {
          src: "/our-rooms/studio/studio-main.jpg",
          alt: "Studio - Image Main",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/studio/studio-1.jpg",
          alt: "Studio - Image 1",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/studio/studio-2.jpg",
          alt: "Studio - Image 2",
          width: 2500,
          height: 1667,
        },
        {
          src: "/our-rooms/studio/studio-3.jpg",
          alt: "Studio - Image 3",
          width: 2500,
          height: 1667,
        },
      ],
      features: [
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Modern Bathroom",
          description: "Shower with hot water 24/7",
          icon: <FaShower />,
        },
        {
          title: "Brand New Kitchen",
          description:
            "Fridge/Freezer, Stove, Coffee Machine, Smoothie Maker & Kettle",
          icon: <FaCoffee />,
        },
        {
          title: "Huge 58” Samsung Smart TV",
          description: "Compatible with Netflix, Apple TV, Prime Video, etc.",
          icon: <FaTv />,
        },
        {
          title: "Work Desk & Comfy Seating Area",
          icon: <FaDesktop />,
        },
      ],
    },
  ],
  commonAreas: {
    title: "Our Common Areas",
    description:
      "At Balu Coliving, our common areas are designed to foster a sense of community and collaboration among guests. Whether you’re looking to relax, socialize, or get some work done, our shared spaces offer everything you need for a comfortable and inspiring stay.",
    images: [
      { src: "/common-areas/common-1.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-2.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-3.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-4.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-5.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-6.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-7.jpg", width: 1667, height: 2500 },
      { src: "/common-areas/common-8.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-9.jpg", width: 2500, height: 1667 },
      { src: "/common-areas/common-10.jpg", width: 2500, height: 1667 },
    ],
    layout: "columns",
    columns: 5,
    spacing: 4,
    padding: 0,
  },
};
