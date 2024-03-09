const AgeCalculator = () => {
  return (
    <div className="px-10 py-12 rounded-br-[30%] bg-white rounded-2xl w-[44%] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      {/* Input Area */}
      <div className="flex gap-8">
        {/* Day */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-500" htmlFor="day">
            DAY
          </label>
          <input
            className="bg-transparent rounded-md border border-[#71717150] h-12 w-28 py-2 px-4 text-xl font-bold active:border-[#717171] focus:border-[#717171] focus:outline-none"
            type="string"
            id="day"
          />
        </div>

        {/* Month */}
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-gray-500"
            htmlFor="month"
          >
            MONTH
          </label>
          <input
            className="bg-transparent rounded-md border border-[#71717150] h-12 w-28 py-2 px-4 text-xl font-bold active:border-[#717171] focus:border-[#717171] focus:outline-none"
            type="string"
            id="month"
          />
        </div>

        {/* Year */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-500" htmlFor="year">
            YEAR
          </label>
          <input
            className="bg-transparent rounded-md border border-[#71717150] h-12 w-28 py-2 px-4 text-xl font-bold active:border-[#717171] focus:border-[#717171] focus:outline-none"
            type="string"
            id="year"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="w-full h-px my-8 bg-gray-200 border-1 dark:bg-gray-200" />
        <div className="p-4 bg-[#864cfe] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </div>
      </div>

      {/* Output Area */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h2 className="italic text-[#864cfe] font-extrabold text-7xl">38</h2>
          <h2 className="italic font-extrabold text-black text-7xl">years</h2>
        </div>

        <div className="flex gap-2">
          <h2 className="italic text-[#864cfe] font-extrabold text-7xl">3</h2>
          <h2 className="italic font-extrabold text-black text-7xl">months</h2>
        </div>

        <div className="flex gap-2">
          <h2 className="italic text-[#864cfe] font-extrabold text-7xl">26</h2>
          <h2 className="italic font-extrabold text-black text-7xl">days</h2>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
