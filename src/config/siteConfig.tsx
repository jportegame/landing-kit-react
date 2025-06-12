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
    whatsapp: "573126965333",
    whatsapplabel: "+57 312 696 5333",
    email: "balucoliving@gmail.com",
    social: [
      { icon: "facebook", url: "https://www.facebook.com/balucoliving/" },
      {
        icon: "instagram",
        url: "https://www.instagram.com/balucolivingmedellin/",
      },
    ],
    additionalInfo: {
      title: "Why Choose Balu?",
      description:
        "At Balu, we provide a safe, friendly, and productive environment for Digital Nomads and travelers alike. Whether you are here for work or leisure, you will find a welcoming community ready to share experiences and create new memories together.",
      image: "/contact-us/why-choose-balu.png",
    },
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
  aboutUs: {
    callToAction:
      "Are You Ready To Join Balu For An Unbelievable Experience In Medellin?",
    description:
      "Just a little heads up – this chapter in Medellin may completely change your life. If you are looking for cosy accommodation, a community of like minded souls & friendly bilingual hosts who are there to support you 24/7",
    info: [
      {
        title: "Values (Balu's philosophy)",
        image: "/about-us/values.jpg",
        content: [
          {
            title: "Values of Balu",
            description1: (
              <>
                We are a friendly, passionate group driven by curiosity to
                travel, explore, and experience new cultures. Colombia is
                calling, and we’re ready for the next exciting chapter.{" "}
                <strong className="font-bold">
                  Reach out to us today through our contact page!
                </strong>
              </>
            ),
            description2: (
              <>
                Strong communities are built on shared values. Balu is a place
                where like-minded individuals connect. We seek those who value a
                peaceful, positive, and enjoyable environment.{" "}
                <strong className="font-bold">
                  Please ensure the values below resonate with you.
                </strong>
              </>
            ),
            image: "/about-us/values/values.jpg",
          },
          {
            title: "Respect",
            description1: (
              <>
                For your housemates, the culture, and the property itself. We've
                created a safe environment where people can live an
                unforgettable experience. If you're looking for a party
                atmosphere, guest flexibility, or somewhere to bring random
                dates, this is not the place. Safety is our number 1 priority.{" "}
                <strong className="font-bold">
                  We value a peaceful environment for everyone.
                </strong>
              </>
            ),
            description2: (
              <>
                We welcome trusted individuals but have a very strict guest
                policy. Transparency is key for us. We always require ID for
                anyone entering the property, and we do not allow overnight
                guests.{" "}
                <strong className="font-bold">
                  Your safety and privacy are always our priority.
                </strong>
              </>
            ),
            image: "/about-us/values/respect.jpg",
          },
          {
            title: "Kindness",
            description1: (
              <>
                Humble folks only, please. Life is more enjoyable when we are
                humble, caring, and kind! We all play a part in creating a
                positive living dynamic. Co-living can be a wonderful
                experience, but please ensure this is the right environment for
                you. Are you looking for shared experiences? Friends to go out
                to dinner with? A group to attend a salsa class? If you’re
                looking to explore a new city with nice souls, this is the right
                place for you.{" "}
                <strong className="font-bold">
                  Let’s make it an unforgettable experience together!
                </strong>
              </>
            ),
            description2: (
              <>
                If you’ve never stayed in a co-living space before and have
                questions, we’re here to answer them. We’ve created Balu
                Coliving to provide you with a community from the moment you
                arrive in Medellín.{" "}
                <strong className="font-bold">
                  Join us and experience the warmth of our community.
                </strong>
              </>
            ),
            image: "/about-us/values/kindness.jpg",
          },
          {
            title: "Integrity",
            description1: (
              <>
                We live in an honest, supportive, and trusting environment.
                Please always keep this in mind. We ensure that the shared
                spaces are kept clean, and we respect each other’s property.
                Your room will be deep cleaned once a week, and fresh bed linen
                and towels will be provided. Everyone plays a part in keeping
                the shared spaces spotless, especially the kitchen. We become a
                family during our time together.{" "}
                <strong className="font-bold">
                  Respect and cleanliness are key values here.
                </strong>
              </>
            ),
            description2: (
              <>
                Everyone at Balu is here to support you during your time in
                Medellín. You’ll have bilingual hosts who are happy to assist
                you with anything you need. Need a taxi on arrival? No worries.
                Looking for the best local cafes? We’ve got you covered.
                Whatever you need, we are here to help.{" "}
                <strong className="font-bold">
                  We are Balu Coliving, and we’re here to support you.
                </strong>
              </>
            ),
            image: "/about-us/values/integrity.jpg",
          },
          {
            title: "Community",
            description1: (
              <>
                At the heart of everything we do, we are all unique, coming
                together from different cultures around the world. Let’s learn
                from one another and enjoy a memorable chapter in Medellín. We
                all share the common goal of living in Medellín for a period of
                our lives. Let’s learn, live, and explore together.{" "}
                <strong className="font-bold">Community is key at Balu.</strong>
              </>
            ),
            description2: (
              <>
                In Medellín, you will find a community or WhatsApp group for
                almost anything! Trekking, Salsa, Foodies, Sport, Music – the
                list goes on. Medellín is an incredible place to live and work,
                and it’s our responsibility to ensure you have the best
                experience possible here. We are always here to help.{" "}
                <strong className="font-bold">
                  Let’s make your time in Medellín unforgettable.
                </strong>
              </>
            ),
            image: "/about-us/values/community.jpg",
          },
        ],
      },
      {
        title: "Running Club",
        image: "/about-us/running.jpg",
        content: [
          {
            title: "Join the Running Club",
            description1: (
              <>
                Running in Medellín is one of the best ways to explore the city
                while staying fit. Our running club welcomes all fitness levels,
                whether you’re a beginner or an experienced runner. Enjoy the
                beautiful parks, scenic routes, and camaraderie as we run
                through the city together.{" "}
                <strong className="font-bold">Come run with us!</strong>
              </>
            ),
            description2: (
              <>
                We organize weekly runs in different parts of the city. Join us
                for a fun and challenging experience, meet new friends, and
                enjoy the outdoors! Whether it’s early morning or evening,
                there’s always a spot for you in the Balu Running Club.{" "}
                <strong className="font-bold">
                  Let’s run and have fun together.
                </strong>
              </>
            ),
            image: "/about-us/running.jpg",
          },
        ],
      },
      {
        title: "Hikes",
        image: "/about-us/hikes.jpg",
        content: [
          {
            title: "Explore Medellín’s Nature",
            description1: (
              <>
                Medellín is surrounded by breathtaking mountains and beautiful
                hiking trails. Our hiking group explores the city’s nature,
                offering hikes for all levels, from easy walks to more
                challenging hikes. We aim to explore the stunning natural beauty
                of the region while bonding with others in the Balu community.{" "}
                <strong className="font-bold">Join us on our next hike!</strong>
              </>
            ),
            description2: (
              <>
                Whether you want to explore lush forests, visit waterfalls, or
                take in panoramic city views, there’s a hike for you. Come
                discover the hidden gems of Medellín and enjoy fresh air,
                stunning views, and great company.{" "}
                <strong className="font-bold">Let’s explore together!</strong>
              </>
            ),
            image: "/about-us/hikes/trail.jpg",
          },
        ],
      },
      {
        title: "Community",
        image: "/about-us/community.jpg",
        content: [
          {
            title: "Balu’s Community Spirit",
            description1: (
              <>
                At Balu, community is at the heart of everything we do. We bring
                together people from all over the world to create a space where
                everyone can feel at home. We offer a variety of activities to
                help you connect with others, whether it’s through group
                dinners, outdoor activities, or just socializing in the shared
                spaces.{" "}
                <strong className="font-bold">Join our community today!</strong>
              </>
            ),
            description2: (
              <>
                From weekly events to spontaneous meet-ups, Balu is the place to
                form lasting friendships and create unforgettable memories.
                Whether you’re a digital nomad, a traveler, or just looking for
                a place to belong, we welcome you to our community.{" "}
                <strong className="font-bold">
                  Let’s build this community together!
                </strong>
              </>
            ),
            image: "/about-us/community/spirit.jpg",
          },
        ],
      },
    ],
  },
  digitalNomads: {
    description1: (
      <>
        <strong className="font-bold">
          Balu is an environment where you can feel safe, appreciated and
          respected.
        </strong>{" "}
        We understand that work is a big part of everyone’s lives and our values
        in our living environment reflect this. It’s really important for us
        that it is a good fit for both sides. We want you to have the most
        enjoyable experience in Medellin, in a safe living environment. If you
        are looking for flexibility with bringing guests or individuals from
        dating apps then it’s not the right environment for you. We have a
        really strict guest policy as the safety of our guests will always be
        our number one priority.
      </>
    ),
    description2: (
      <>
        <strong className="font-bold">
          Our guests typically fall in the 20 – 40 age category.
        </strong>{" "}
        Everyone is either working online, or in the process of creating their
        own business. Please ensure that it’s the right environment for you. We
        love a social outside of Balu but it’s definitely an environment where
        we respect that everyone is working Monday – Friday.
      </>
    ),
    info: [
      {
        title: "Living With Like-Minded Souls",
        description1: (
          <>
            <strong className="font-bold">
              We speak with every guest before they are able to book.
            </strong>{" "}
            It’s important that it’s the right living environment for both
            sides. At Balu, you don’t have to worry about a housemate throwing a
            huge party on a Tuesday night, knowing you have an important meeting
            in just a few hours. We’ve got the chilled working / living
            environment covered for you.
          </>
        ),
        description2: (
          <>
            At Balu, you’re going to walk into a relaxed environment where you
            can focus on your work but also{" "}
            <strong className="font-bold">
              meet amazing souls on day one.
            </strong>
          </>
        ),
        image: "/digital-nomads/living-with-like-minded-souls.jpg",
      },
      {
        title: "Minimum 30 Day Stay",
        description1: (
          <>
            <strong className="font-bold">
              We value community and continuity.
            </strong>{" "}
            At Balu, we believe there is nothing better than living in an
            environment where you can actually get to know your housemates. No
            random short stays. Everyone at Balu is committed to a minimum
            30-day stay. New bonds are created. Real friendships are formed.
          </>
        ),
        description2: (
          <>
            A minimum 30-day stay not only allows you to develop long-lasting
            friendships with your new housemates, but it also allows you to
            <strong className="font-bold">
              discover all of the wonderful experiences that Medellín offers.
            </strong>
          </>
        ),
        image: "/digital-nomads/minimum-stay.jpg",
      },
      {
        title: "Community Activities",
        description1: (
          <>
            <strong className="font-bold">
              Dinners. Weekends away. Dance partners. Gym buddies.
            </strong>{" "}
            One of the biggest wins at Balu is walking into an environment where
            you have access to good souls from day one. Enjoy exploring Medellín
            with your new housemates.
          </>
        ),
        description2: (
          <>
            It can be difficult when you move to a new city where you don’t know
            anyone.{" "}
            <strong className="font-bold">
              Balu gives you access to a community of lovely souls from the
              moment you touch down in Medellín.
            </strong>
          </>
        ),
        image: "/digital-nomads/community-activities.jpg",
      },
      {
        title: "Medellín Community",
        description1: (
          <>
            <strong className="font-bold">
              The Digital Nomad scene is thriving in Medellín.
            </strong>{" "}
            Almost every activity you can think of has a WhatsApp Group in
            Medellín. You’ll find yourself well and truly at home in the city of
            eternal spring.
          </>
        ),
        description2: (
          <>
            Medellín has recently overtaken Buenos Aires as the most popular
            spot in South America for Digital Nomads. Balu Coliving is based in
            the Laureles neighborhood, which was recently voted by{" "}
            <strong className="font-bold">
              Time Out Magazine as the coolest neighborhood in the world.
            </strong>
          </>
        ),
        image: "/digital-nomads/medellin-community.jpg",
      },
      {
        title: "Beauty of Colombia",
        description1: (
          <>
            <strong className="font-bold">Colombia is a paradise.</strong>{" "}
            Whether it’s the gorgeous beaches of the Caribbean Coast, the unique
            charm of beautiful pueblos such as Jardin, or the epic magic of the
            Amazon – Colombia has it all. It would be our pleasure to share all
            of our secret tips with you. We love you, Colombia.
          </>
        ),
        description2: (
          <>
            Colombia is the second most biodiverse country in the world. It
            really does have it all.{" "}
            <strong className="font-bold">
              We hope to welcome you to Balu Coliving Medellín soon. Please send
              us a message if you have any questions.
            </strong>
          </>
        ),
        image: "/digital-nomads/beauty-of-colombia.jpg",
      },
    ],
  },
};
