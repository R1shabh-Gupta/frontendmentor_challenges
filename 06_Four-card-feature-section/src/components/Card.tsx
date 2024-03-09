interface CardProps {
  heading: string;
  content: string;
  image: string;
  color: string;
}

const Card = ({ heading, content, image, color }: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 px-8 py-6 w-96 bg-[#FAFAFA] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md border-t-[6px] ${color}`}
    >
      <h2 className="text-xl font-bold text-gray-700">{heading}</h2>
      <p className="text-sm text-gray-400">{content}</p>
      <div className="flex justify-end pt-6">
        <img src={image} alt="Supervisor logo" width={62} height={62} />
      </div>
    </div>
  );
};

export default Card;
