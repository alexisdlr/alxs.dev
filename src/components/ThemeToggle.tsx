import { useEffect, useState } from "preact/hooks";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";

export default function ThemeToggle() {
  const isLocalStorageAvailable = typeof localStorage !== 'undefined';

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
      document.documentElement.classList.remove('dark');
    };
  }, [theme, isLocalStorageAvailable]);

  return (
    
    <button onClick={handleClick} class='hover:opacity-80 transition-all text-slate-700 dark:text-darkText'>{theme === "light" ? <Moon /> : <Sun />}</button>
  );
}
