const Hero = () => {
  return (
    <div className="flex flex-col gap-2 px-8 py-8 sm:px-16 sm:gap-4 sm:flex-row">
      <div className="flex-[60%]">
        <img src="/images/illustration-mockups.svg" alt="illustration" />
      </div>
      <div className="flex-[40%] mt-8 sm:mt-16 flex flex-col items-center text-center sm:text-start sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-white w-[90%]">
          Build The Community Your Fans Will Love
        </h1>
        <p className="py-6 text-lg text-white w-[90%]">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="px-16 py-3 bg-white rounded-full text-[#674BAF] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:bg-[#E782E8] hover:text-white transition-all">
          Register
        </button>
      </div>
    </div>
  );
};

export default Hero;
