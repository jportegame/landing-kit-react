interface InfoCardProps {
  image: string;
  title: string;
  description1: React.ReactNode;
  description2: React.ReactNode;
  imagePosition?: 'left' | 'right';
}

const InfoCard = ({
  image,
  title,
  description1,
  description2,
  imagePosition = 'left',
}: InfoCardProps) => {
  const imageComponent = (
    <div className="w-full md:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] md:h-[400px] object-cover rounded shadow"
      />
    </div>
  );

  const textComponent = (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-2">{description1}</p>
      <p className="text-gray-600 mb-6">{description2}</p>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 pt-4 pb-10">
      {imagePosition === 'left' ? (
        <>
          {imageComponent}
          {textComponent}
        </>
      ) : (
        <>
          {textComponent}
          {imageComponent}
        </>
      )}
    </div>
  );
};

export default InfoCard;
