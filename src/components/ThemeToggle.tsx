import { useEffect, useState } from "preact/hooks";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";

export default function ThemeToggle() {
    const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const [theme, setTheme] = useState(
    isLocalStorageAvailable ? localStorage.getItem("theme") || "light" : "light"
  );
    const handleClick = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  
  useEffect(() => {
    if (isLocalStorageAvailable) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [theme, isLocalStorageAvailable]);

  return (
    <div className="flex items-center gap-x-2 text-slate-700 dark:text-darkText">
      <Moon />
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          onClick={handleClick}
          id="switch"
          type="checkbox"
          className="peer sr-only"
        />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border bg-slate-700/20 dark:bg-iris/20 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-900 after:bg-slate-700 dark:after:bg-iris/50 after:transition-all after:content-['']  peer-checked:after:translate-x-full peer-checked:after:border-iris/60 peer-focus:ring-navy"></div>
      </label>
      <Sun />

    </div>
  );
}
