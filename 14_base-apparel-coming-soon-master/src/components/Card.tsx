import { useRef, useState } from "react";

const Card = () => {
  const [isEmailValid, setIsEmailValid] = useState({
    text: "",
    valid: false,
    color: "",
  });

  const inputRefEmail = useRef<HTMLInputElement>(null);

  const isValidEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const email = inputRefEmail.current?.value ?? "";
    if (email === "" || !isValidEmail(email)) {
      setIsEmailValid({
        text: "Please provide a valid email",
        valid: false,
        color: "text-red-500",
      });
      return;
    }
    setIsEmailValid({
      text: "Thank you for subscribing to our newsletter!",
      valid: true,
      color: "text-green-500",
    });
  };

  return (
    <div className="flex flex-col-reverse w-full md:flex-row">
      <div className="md:w-[58%] bg-[url(/images/bg-pattern-desktop.svg)] py-16 md:py-16 md:px-36 flex flex-col md:gap-28 text-center md:text-start mx-auto md:mx-0 w-full">
        <div className="hidden md:block">
          <img className="w-48" src="/images/logo.svg" alt="logo" />
        </div>
        <div>
          <h1 className="text-[#CE9797] text-6xl md:text-7xl font-light tracking-widest">
            WE'RE
          </h1>
          <h1 className="tracking-widest text-6xl md:text-7xl font-medium text-[#413A3A]">
            COMING
          </h1>
          <h1 className="tracking-widest text-6xl md:text-7xl font-medium text-[#413A3A]">
            SOON
          </h1>
          <p className="mt-6 md:mt-4 text-[#CE9797] px-8 md:px-0 md:w-3/4 leading-7">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <div className="mt-12">
            <div className="relative flex">
              <input
                ref={inputRefEmail}
                className="border border-[#CE9797] placeholder:font-body placeholder:text-[#ce9797bd] rounded-full placeholder:font-light py-3 px-6 md:w-[70%] w-[90%] focus:outline-none focus:ring-0 placeholder:text-sm placeholder:px-2 mx-6 md:mx-0"
                type="email"
                placeholder="Email Address"
              />
              <img
                src="/images/icon-error.svg"
                alt="error"
                className={`absolute transition-all transform -translate-y-1/2 left-72 top-1/2 ${
                  isEmailValid.valid || isEmailValid.text == ""
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />
              <button
                className="flex items-center justify-center -ml-24 md:mr-0 mr-6 md:-ml-12 rounded-full bg-gradient-to-r from-[#F5B6B5] to-[#EF9696] shadow-lg hover:shadow-[5px_10px_20px_7px_#ddd] transition-all px-4 md:px-0"
                onClick={handleSubmit}
              >
                <img
                  className="px-4 py-2 md:px-10"
                  src="/images/icon-arrow.svg"
                  alt="arrow"
                />
              </button>
            </div>

            <p className={`${isEmailValid.color} text-xs mt-2 ml-4`}>
              {isEmailValid.text}
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="md:w-[42%]">
        <img
          className="hidden object-cover w-full h-full bg-center bg-cover md:block"
          src="/images/hero-desktop.jpg"
          alt="hero"
        />
        <img
          className="block object-cover w-full h-full bg-center bg-cover md:hidden"
          src="/images/hero-mobile.jpg"
          alt="hero"
        />
      </div>
      <div className="block px-8 my-8 md:hidden">
        <img className="w-36" src="/images/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Card;
