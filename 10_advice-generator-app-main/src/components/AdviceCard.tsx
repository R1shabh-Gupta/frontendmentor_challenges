import { useEffect, useState } from "react";

const AdviceCard = () => {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "Loading...",
  });

  const fetchAdvice = async () => {
    setAdvice({ id: "", advice: "Loading..." });
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip);
    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="relative bg-[#323A49] rounded-lg shadow-lg flex flex-col gap-4 py-7 text-center px-8 items-center w-4/5 md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-lg text-[#51FFA7]">
        ADVICE <span className="ml-2">#{advice.id}</span>
      </h2>
      <p className="font-bold text-3xl text-[#CEE2E9]">{advice.advice}</p>
      <div className="mb-10">
        <img src="/images/pattern-divider-desktop.svg" alt="divider" />
      </div>
      <button
        className="bg-[#51FFA7] p-4 rounded-full absolute -bottom-6 left-1/2 -translate-x-1/2 hover:shadow-[0px_0px_30px_5px_rgb(81,_255,_166,0.5)] transition-all"
        onClick={fetchAdvice}
      >
        <img src="/images/icon-dice.svg" alt="dice" />
      </button>
    </div>
  );
};

export default AdviceCard;
