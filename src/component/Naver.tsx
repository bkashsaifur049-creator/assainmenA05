
import logo from "../assets/logo-text.png";

import { useState } from "react";
function Naver(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="grid grid-cols-2 mt-4 sticky top-0 z-50 bg-white border-b border-gray-300 mx-auto max-w-6xl px-6">
<button onClick={() =>
     setIsOpen(!isOpen)} className="md:hidden" > 
    ☰
     </button>

        <img className="absolute left-1/2 w-24 -translate-x-1/2 md:static md:w-30 md:translate-x-0" src={logo} alt="logoImg" />
        <div className="flex "> 
            {/* destop */}
            <ul className=" hidden gap-4 font-semibold text-mauve-500 md:flex">
                <li className="text-pink-500">Home</li>
                <li>Technologes</li>
                <li>Project</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* mobaile */}
            {isOpen && (
                 <ul className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 bg-white p-5 font-semibold text-mauve-500 shadow-md md:hidden">
                 <li className="text-pink-500">Home</li>
                 <li>Technologies</li>
                  <li>Projects</li>
                   <li>About</li> 
                   <li>Contact</li> 
                   </ul>
                 )}
            <div className="ml-auto flex item-center gap-1">
                <button>Saign In</button>
                <button className="bg-pink-500 rounded-full w-24 h-8 mt-2 mb-2">Saign Up</button>
            </div>
        </div>
        </nav>
    );
};

export default Naver;