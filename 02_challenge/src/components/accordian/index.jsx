import { useState } from "react";
import data from "./data.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleAccordianClick = (id) => {
    setSelected(id == selected ? null : id);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-lg w-[85%] md:w-[65%] lg:w-[36%] py-10 px-8 z-[1] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="27"
          fill="none"
          viewBox="0 0 40 41"
        >
          <path
            fill="#AD28EB"
            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
          />
        </svg>
        <h1 className="font-extrabold text-4xl text-[#341839]">FAQs</h1>
      </div>

      {/* Question-Answer Part */}
      <div>
        {data && data.length > 0 ? (
          data.map((dataPoint) => (
            <div
              className="cursor-pointer"
              key={dataPoint.id}
              onClick={() => handleAccordianClick(dataPoint.id)}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[#341839] text-md font-semibold hover:text-[#AD28EB]">
                  {dataPoint.question}
                </h2>
                {/* Plus and Minus */}
                {selected == dataPoint.id ? (
                  <img
                    src="/assets/images/icon-minus.svg"
                    alt="minus"
                    width={26}
                  />
                ) : (
                  <img
                    src="/assets/images/icon-plus.svg"
                    alt="minus"
                    width={26}
                  />
                )}
              </div>
              {selected == dataPoint.id ? (
                <p className="text-[#53265b93] mt-3">{dataPoint.answer}</p>
              ) : null}

              {/* Divider */}
              {dataPoint.id != data[data.length - 1].id ? (
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-100" />
              ) : null}
            </div>
          ))
        ) : (
          <h3>Data Not Found!!</h3>
        )}
      </div>
    </div>
  );
};

export default Accordion;
