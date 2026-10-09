
import logo from "../assets/logo-text.png";
function Naver(){
    return (
        <nav className="grid grid-cols-2 container mt-4 sticky top-0 z-50 bg-white border-b border-gray-300">
        <img className="ml-16" src={logo} alt="logoImg" />
        <div className="flex gap-12"> 
            <ul className="flex gap-5 font-semibold text-mauve-500">
                <li className="text-pink-500">Home</li>
                <li>Technologes</li>
                <li>Project</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="ml-0">
                <button className="m-2">Saign In</button>
                <button className="bg-pink-500 rounded-full w-24 h-8">Saign Up</button>
            </div>
        </div>
        </nav>
    );
};

export default Naver;