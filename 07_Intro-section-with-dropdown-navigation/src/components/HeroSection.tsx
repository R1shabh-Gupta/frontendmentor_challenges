const HeroSection = () => {
  return (
    <div className="flex w-[75%] mx-auto gap-6">
      <div className="flex flex-col justify-center gap-12 ">
        <h1 className="mt-8 font-bold text-7xl">
          Make <br /> remote work
        </h1>
        <h3 className="font-medium text-gray-500 w-[70%] text-md">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </h3>
        <button className="px-6 py-2 text-lg font-semibold text-white transition-all bg-black border-2 border-black rounded-lg w-fit hover:text-black hover:bg-white">
          Learn more
        </button>
        <div className="flex justify-between w-[88%] mt-10">
          <img
            className="scale-90"
            src="/images/client-databiz.svg"
            alt="client databiz"
          />
          <img src="/images/client-audiophile.svg" alt="client audiophile" />
          <img src="/images/client-meet.svg" alt="client meet" />
          <img src="/images/client-maker.svg" alt="client maker" />
        </div>
      </div>
      <div className="flex">
        <img
          className="scale-75"
          src="/images/image-hero-desktop.png"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
