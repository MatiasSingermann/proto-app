import { TbAccessible, TbAccessibleOff } from "react-icons/tb";
import { toggleFont } from '../app/layout'
import { useState } from 'react'

function FontButton() {
  const [font, setFont] = useState(true)
  
  const onClickFunc = () => {
    toggleFont();
    setFont(!font);
  }

  return (
    <button
      className="flex group items-center w-10 h-10 justify-center mr-1"
      type="button"
      onClick={() => onClickFunc()}
    >
      {font ? (
        <TbAccessible className="text-2xl text-center text-white group-hover:text-slate-500" />
      ) : (
        <TbAccessibleOff className="text-2xl text-center text-white group-hover:text-slate-500" />
      )}
    </button>
  )
}

export default FontButton