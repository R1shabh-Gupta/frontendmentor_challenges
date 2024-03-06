const Card = () => {
  return (
    <div className="bg-[#FFFDFF] w-[80vw] md:w-[40vw] lg:w-[23vw] p-5 rounded-2xl border-[1px] border-black  shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-lg h-44">
        <img
          className="object-cover w-full h-full"
          src="/assets/images/illustration-article.svg"
          alt="cover photo"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex flex-col gap-2">
          <span className="text-black bg-[#F6D35D] py-1 px-2 w-fit rounded-md font-semibold text-sm">
            Learning
          </span>
          <p className="text-xs text-black">Published 21 Dec 2023</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">HTML & CSS foundations</h1>
          <p className="text-sm text-gray-500">
            These languages are the backbone of every websites, defining
            structure, content, and presentation.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <img src="/assets/images/image-avatar.webp" alt="profile picture" />
          </div>
          <p className="text-sm font-semibold">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
