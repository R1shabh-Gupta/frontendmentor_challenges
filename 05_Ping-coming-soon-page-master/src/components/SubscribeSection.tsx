import { useRef, useState } from "react";

const SubscribeSection = () => {
  const email = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState({
    isFirst: true,
    isEmailValid: false,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email && email.current?.value) {
      const emailValue = email.current.value;
      if (regEmail.test(emailValue))
        setIsValid({ ...isValid, isEmailValid: true, isFirst: false });
      else setIsValid({ ...isValid, isEmailValid: false, isFirst: false });
    } else {
      setIsValid({ ...isValid, isEmailValid: false, isFirst: false });
    }
    console.log(isValid);
    return;
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <img src="/images/logo.svg" alt="logo" />

      {/* Subscribe Input */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-5xl font-thin text-gray-400">
          We are launching <b className="font-semibold text-black">soon!</b>
        </h2>
        <p className="mb-6 font-light text-gray-700 text-md">
          Subscribe and get notified
        </p>

        <div>
          <form className="flex gap-3">
            <input
              ref={email}
              type="email"
              name="email"
              className={`py-2 px-4 rounded-full border-[1px] border-gray-200 w-96 focus:outline-none focus:border-[#4E7DF3] transition-all ${
                isValid.isFirst === true
                  ? ""
                  : isValid.isEmailValid === true
                  ? "border-green-500"
                  : "border-red-500"
              }`}
              placeholder="Your email address..."
            />
            <button
              onClick={handleClick}
              className="px-10 py-2 font-medium text-sm text-white bg-[#4E7DF3] rounded-3xl hover:bg-[#4e7df3e8] shadow-md shadow-[#4e7df335] hover:shadow-lg hover:shadow-[#4e7df34b] transition-all"
            >
              Notify Me
            </button>
          </form>
          {isValid.isFirst === false && isValid.isEmailValid === false ? (
            <p className="mt-1 ml-4 text-xs text-red-500">
              Please provide a valid email
            </p>
          ) : isValid.isFirst === false && isValid.isEmailValid === true ? (
            <p className="mt-1 ml-4 text-xs text-green-500">
              Thank you for subscribe.
            </p>
          ) : null}
        </div>
      </div>

      <img
        className="my-6"
        src="/images/illustration-dashboard.png"
        alt="dashboard"
      />

      {/* Social links */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {/* facebook */}
          <svg
            width={36}
            height={36}
            className="text-[#4E7DF3] border-[1px] border-[#4e7df33f] rounded-full p-2 fill-current hover:text-white hover:bg-[#4E7DF3] transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>

          {/* Twitter */}
          <svg
            width={36}
            height={36}
            className="text-[#4E7DF3] border-[1px] border-[#4e7df33f] rounded-full p-2 fill-current hover:text-white hover:bg-[#4E7DF3] transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
          </svg>

          {/* Instagram */}
          <svg
            width={36}
            height={36}
            className="text-[#4E7DF3] border-[1px] border-[#4e7df33f] rounded-full p-2 fill-current hover:text-white hover:bg-[#4E7DF3] transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </div>
        <p className="text-gray-400">©Copyright Ping. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SubscribeSection;
