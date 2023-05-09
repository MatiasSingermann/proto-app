import Link from "next/link";
import { GiCapybara } from "react-icons/gi";
import ThemeButton from "./ThemeButton";
import {useState, useEffect} from 'react'
import FontButton from "./FontButton";

function NavBar() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <nav className="hidden md:flex md:fixed justify-between items-center top-0 w-full h-16 bg-slate-900 pl-2 pr-4 py-4 mb-2">
      <button className="flex group items-center w-14 h-14 justify-center">
        <GiCapybara className="text-4xl text-center text-white group-hover:text-slate-500"/>
      </button>
      <div className="flex justify-center items-center">
        <FontButton/>
        {mounted && <ThemeButton/>}
      </div>
    </nav>
  );
}

export default NavBar;
