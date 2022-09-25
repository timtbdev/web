import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      setToggle(false);
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      setToggle(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
      setToggle(false);
    } else {
      setTheme("dark");
      setToggle(true);
    }
  }, [theme]);

  return (
    <div className="relative col-start-1 col-end-4 row-start-1 row-end-2 mt-6 mb-3 px-4 pb-8 sm:px-6 md:px-8 lg:col-start-2 lg:col-end-4 lg:px-0 lg:pb-11 xl:col-end-3 xl:row-end-3 xl:pb-0">
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <Switch
            onChange={handleOnClick}
            checked={toggle ? true : false}
            className={`relative inline-flex items-center rounded-full py-1.5 px-2 transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
              toggle
                ? "bg-slate-700 text-slate-400 focus-visible:ring-slate-50"
                : "bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600"
            }`}
          >
            <span className="sr-only">Disable dark mode</span>
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className={`transform text-slate-400 transition-transform duration-500 ${
                toggle ? "scale-100" : "scale-0"
              }`}
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className={`ml-3.5 transform text-cyan-200 transition-transform duration-500 ${
                toggle ? "scale-0" : "scale-100"
              }`}
            >
              <path
                d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span
              className={`absolute top-0.5 left-0.5 flex h-8 w-8 transform items-center justify-center rounded-full bg-white transition duration-500 ${
                toggle ? "translate-x-[2.625rem]" : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className={`flex-none transform text-cyan-500 transition duration-300 ${
                  toggle ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className={`-ml-6 flex-none transform text-slate-700 transition duration-500 ${
                  toggle ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <path
                  d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </Switch>
        </div>
      </div>
    </div>
  );
}
