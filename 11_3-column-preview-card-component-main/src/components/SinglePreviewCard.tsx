import React from "react";

interface SinglePreviewCardProps {
  cardData: {
    image: string;
    title: string;
    description: string;
  };
  bgColor: string;
  textColor: string;
}

const SinglePreviewCard: React.FC<SinglePreviewCardProps> = ({
  cardData,
  bgColor,
  textColor,
}) => {
  return (
    <div className={`flex flex-col gap-8 px-10 py-12 ${bgColor}`}>
      <img src={cardData.image} alt="sedans icon" width={62} height={62} />
      <h1 className="text-4xl font-bold text-white font-heading">
        {cardData.title}
      </h1>
      <p className="text-sm font-normal text-[#ffffff97] font-body">
        {cardData.description}
      </p>
      <button
        className={`px-8 py-3 mt-4 w-fit bg-white ${textColor} font-medium text-sm rounded-full border-2 hover:bg-transparent border-white hover:text-white transition-all duration-300 ease-in-out active:scale-95`}
      >
        Learn More
      </button>
    </div>
  );
};

export default SinglePreviewCard;
