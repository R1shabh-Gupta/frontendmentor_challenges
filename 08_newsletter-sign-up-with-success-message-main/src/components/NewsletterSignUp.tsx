import { useEffect, useRef, useState } from "react";

const NewsletterSignUp = () => {
  const [isSignupState, setIsSignupState] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState({ text: "", valid: false });
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setLargeScreen(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isValidEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const email = inputRefEmail.current?.value ?? "";
    if (email === "" || !isValidEmail(email)) {
      setIsEmailValid({ text: "Valid email required", valid: false });
      return;
    }
    setIsEmailValid({ text: "", valid: true });
    setIsSignupState(false);
  };

  const thankState = () => {
    return (
      <div className="flex flex-col gap-3 lg:gap-6 p-6 lg:p-12 bg-white rounded-3xl max-w-[90%] lg:max-w-[32%]">
        <img
          src="/assets/images/icon-list.svg"
          alt="list icon"
          width={52}
          height={52}
        />
        <h1 className="text-[#242742] text-3xl lg:text-5xl font-bold ">
          Thanks for subscribing!
        </h1>

        <p className="text-[#242742]">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{inputRefEmail.current?.value}</span>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>

        <button
          className="text-white bg-[#242742] rounded-md w-full py-3 font-semibold mt-4 hover:bg-gradient-to-r from-rose-500 to-orange-400 transition-all ease-in duration-75 hover:shadow-[0_10px_20px_#FDCDD2]"
          onClick={() => setIsSignupState(true)}
        >
          Dismiss message
        </button>
      </div>
    );
  };

  const signupState = () => {
    return (
      <div className="flex flex-col-reverse justify-between gap-12 bg-white lg:w-2/3 lg:p-6 lg:flex-row rounded-3xl">
        <div className="flex flex-col justify-center gap-6 px-4 mb-4 lg:mb-0 lg:px-0 lg:pl-12">
          <h1 className="text-[#242742] text-4xl lg:text-5xl font-bold ">
            Stay updated!
          </h1>
          <p className="text-[#242742]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col gap-3 text-[#242742] mb-2">
            <li className="flex gap-2">
              <img
                src="/assets/images/icon-list.svg"
                alt="list icon"
                className="scale-[90%]"
              />
              <span>Product discovery and building what matters</span>
            </li>

            <li className="flex gap-2">
              <img
                src="/assets/images/icon-list.svg"
                alt="list icon"
                className="scale-[90%]"
              />
              <span>Measuring to ensure updates are a success</span>
            </li>

            <li className="flex gap-2">
              <img
                src="/assets/images/icon-list.svg"
                alt="list icon"
                className="scale-[90%]"
              />
              <span>And much more!</span>
            </li>
          </ul>

          <form className="flex flex-col gap-2 text-[#242742]">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-md">Email address</label>
              <span className="text-md text-[#FF6156] font-semibold">
                {isEmailValid.text}
              </span>
            </div>

            <input
              type="email"
              id="email"
              ref={inputRefEmail}
              className={`border-[1px] border-[#2427424e] rounded-md px-4 py-3 focus:outline-none focus:border-[#242742] transition-all duration-300 ease-in-out ${
                !isEmailValid.valid &&
                isEmailValid.text !== "" &&
                "border-[#FF6156] focus:border-[#FF6156] text-[#FF6156] bg-[#ff61561d]"
              }`}
              placeholder="email@company.com"
            />
            <button
              className="text-white bg-[#242742] rounded-md w-full py-3 font-semibold mt-4 hover:bg-gradient-to-r from-rose-500 to-orange-400 transition-all ease-in duration-75 hover:shadow-[0_10px_20px_#FDCDD2]"
              onClick={handleFormSubmit}
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="overflow-hidden rounded-xl h-72 lg:h-full">
          <img
            className="w-full bg-center bg-cover rounded-xl lg:rounded-r-xl"
            src={
              largeScreen
                ? "/assets/images/illustration-sign-up-desktop.svg"
                : "/assets/images/illustration-sign-up-mobile.svg"
            }
            alt="illustration"
          />
        </div>
      </div>
    );
  };

  return <>{isSignupState ? signupState() : thankState()}</>;
};

export default NewsletterSignUp;
