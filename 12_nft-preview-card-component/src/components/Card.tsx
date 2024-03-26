const Card = () => {
  return (
    <div className="bg-[#15243D] rounded-xl w-80">
      <div className="m-5">
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="object-cover bg-no-repeat rounded-lg shadow-md"
            src="/images/image-equilibrium.jpg"
            alt="equilibrium"
          />
          <div className="opacity-0 hover:opacity-100 transition-all absolute bg-[#01fff768] inset-0 flex items-center justify-center">
            <img src="/images/icon-view.svg" alt="view" />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <h1 className="text-2xl font-semibold text-white hover:text-[#01FFF6] transition-all">
            Equilibrium #3429
          </h1>
          <p className="text-[#8AABD9]">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <img
                className="h-4"
                src="/images/icon-ethereum.svg"
                alt="ethereum"
              />
              <p className="text-md text-[#01FFF6] text-md font-bold">
                0.041 ETH
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <img className="h-5" src="/images/icon-clock.svg" alt="clock" />
              <p className="text-[#8AABD9] text-sm">3 days left</p>
            </div>
          </div>
        </div>

        <div className="w-full my-5 border-b-[1px] border-[#8aabd970]" />

        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 border rounded-full"
            src="/images/image-avatar.png"
            alt="avatar"
          />
          <p className="text-[#8AABD9] text-md">
            Creation of
            <span className="ml-2 text-white hover:text-[#01FFF6]">
              Rishabh Gupta
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
