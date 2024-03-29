const Card = () => {
  return (
    <div className="bg-[#1B1938] flex flex-col-reverse md:flex-row w-3/4 rounded-lg overflow-hidden shadow-lg min-h-96">
      <div className="flex-1 w-full h-full p-10 mx-auto my-auto md:mx-0 md:p-0 md:pl-14">
        <h1 className="mb-6 text-3xl font-bold text-center md:w-3/4 text-slate-100 md:text-start">
          Get <span className="text-[#AA5CDB]">insights</span> that help your
          business grow.
        </h1>
        <p className="mb-10 text-sm text-center md:w-3/4 md:mb-14 text-slate-300 md:text-start">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="flex flex-col items-center justify-between gap-6 md:items-start md:gap-0 md:flex-row md:w-3/4">
          <div className="flex flex-col gap-1 text-center md:text-start">
            <h2 className="text-xl font-semibold text-slate-100">10k+</h2>
            <p className="text-sm uppercase text-slate-300">companies</p>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-start">
            <h2 className="text-xl font-semibold text-slate-100">314</h2>
            <p className="text-sm uppercase text-slate-300">templates</p>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-start">
            <h2 className="text-xl font-semibold text-slate-100">12M+</h2>
            <p className="text-sm uppercase text-slate-300">queries</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="top-0 w-full h-full bg-[#a52ef484] absolute"></div>
        <img
          className="object-cover w-full h-full bg-center"
          src="/images/image-header-desktop.jpg"
          alt="cover photo"
        />
      </div>
    </div>
  );
};

export default Card;
