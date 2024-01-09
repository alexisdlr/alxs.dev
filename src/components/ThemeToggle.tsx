import { useEffect, useState } from "preact/hooks";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";

export default function ThemeToggle() {
  // Verificar si localStorage está disponible
  const isLocalStorageAvailable = typeof localStorage !== 'undefined';

  // Obtener el tema guardado o establecer 'light' por defecto
  const [theme, setTheme] = useState(
    isLocalStorageAvailable ? localStorage.getItem("theme") || "light" : "light"
  );

  // Manejar el clic en el botón
  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Actualizar la clase 'dark' en el elemento HTML y guardar el tema en localStorage
  useEffect(() => {
    if (isLocalStorageAvailable) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLocalStorageAvailable]);

  // Renderizar el botón con el ícono correspondiente al tema actual
  return (
    <button onClick={handleClick} class='hover:opacity-80 transition-all text-slate-700 dark:text-darkText'>{theme === "light" ? <Moon /> : <Sun />}</button>
  );
}
