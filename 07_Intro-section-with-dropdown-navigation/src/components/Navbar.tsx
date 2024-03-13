import { useState } from "react";

const Navbar = () => {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-12 py-8">
      <div className="flex items-center justify-center gap-20">
        <img className="mb-[-8px]" src="/images/logo.svg" alt="logo" />
        <ol className="flex gap-8 font-semibold text-gray-500 cursor-pointer">
          <li
            className="relative flex items-center justify-center gap-2"
            onClick={() => setIsFeatureOpen((prev) => !prev)}
          >
            Features
            <span>
              <img src="/images/icon-arrow-down.svg" />
            </span>
            {isFeatureOpen && (
              <div className="absolute z-10 px-4 py-6 mt-4 mr-12 bg-white shadow-2xl w-36 rounded-xl top-2 whitespace-nowrap">
                <ol className="flex flex-col items-start justify-start gap-6">
                  <li className="flex items-center justify-center gap-2">
                    <span>
                      <img src="/images/icon-todo.svg" alt="todo icon" />
                    </span>
                    Todo List
                  </li>

                  <li className="flex items-center justify-center gap-2">
                    <span>
                      <img
                        src="/images/icon-calendar.svg"
                        alt="calendar icon"
                      />
                    </span>
                    Calendar
                  </li>

                  <li className="flex items-center justify-center gap-2">
                    <span>
                      <img
                        src="/images/icon-reminders.svg"
                        alt="reminders icon"
                      />
                    </span>
                    Reminders
                  </li>

                  <li className="flex items-center justify-center gap-2">
                    <span>
                      <img
                        src="/images/icon-planning.svg"
                        alt="planning icon"
                      />
                    </span>
                    Planning
                  </li>
                </ol>
              </div>
            )}
          </li>
          <li
            className="relative flex items-center justify-center gap-2"
            onClick={() => setIsCompanyOpen((prev) => !prev)}
          >
            Company
            <span>
              <img src="/images/icon-arrow-down.svg" />
            </span>
            {isCompanyOpen && (
              <div className="absolute z-10 px-4 py-6 mt-4 ml-12 bg-white shadow-2xl w-36 rounded-xl top-2 whitespace-nowrap">
                <ol className="flex flex-col items-start justify-start gap-6">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ol>
              </div>
            )}
          </li>
          <li>Careers</li>
          <li>About</li>
        </ol>
      </div>
      <div>
        <ol className="flex items-center justify-center gap-6 font-semibold text-gray-500 ">
          <li>Login</li>
          <li className="px-4 py-2 border-2 border-gray-400 rounded-2xl">
            Register
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
