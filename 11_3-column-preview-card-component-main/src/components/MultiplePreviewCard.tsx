import { cardData } from "../../constants";
import SinglePreviewCard from "./SinglePreviewCard";

const MultiplePreviewCard = () => {
  return (
    <div className="flex w-[60%] mx-auto md:flex-row flex-col overflow-hidden rounded-lg">
      <SinglePreviewCard
        cardData={cardData[0]}
        bgColor="bg-[#E28725]"
        textColor="text-[#E28725]"
      />
      <SinglePreviewCard
        cardData={cardData[1]}
        bgColor="bg-[#016870]"
        textColor="text-[#016870]"
      />
      <SinglePreviewCard
        cardData={cardData[2]}
        bgColor="bg-[#004241]"
        textColor="text-[#004241]"
      />
    </div>
  );
};

export default MultiplePreviewCard;
