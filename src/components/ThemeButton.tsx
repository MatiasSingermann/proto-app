import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className="flex group items-center w-10 h-10 justify-center ml-1"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MdDarkMode className="text-2xl text-center text-white group-hover:text-slate-500" />
      ) : (
        <MdOutlineDarkMode className="text-2xl text-center text-white group-hover:text-slate-500" />
      )}
    </button>
  );
}

export default ThemeButton;
