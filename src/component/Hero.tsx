
import baner from "../assets/banner-stack.png"
const Hero = () => {
    return (
        <div className='grid grid-cols-2 container mx-auto w-full max-w-6xl px-10'>
            <div>
                <h2 className="font-bold text-5xl mt-24">Build Yuor Ideal</h2>
                <h1 className="text-5xl font-bold bg-linear-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Development Stack </h1>
                <p className="font-bold text-mauve-500 mt-6">Explore frontend, bakend, database, and tooling options,</p>
                <p className="font-bold text-mauve-500">compare them side by side, and put together the stack that fits yoour </p>
                  <p className="font-bold text-mauve-500">  next project. </p>
            
            <ul className="flex gap-4 mt-10">
                <li><button className="bg-linear-to-r from-red-500 to-amber-400 hover:bg-pink-200 font-bold px-5 py-3 shadow-lg  text-white rounded-xl" >Explore Technologies</button></li>
                <li><button className="hover:bg-pink-200 font-bold px-5 py-3 border-b-gray-400 rounded-xl shadow-lg border-x-olive-500">Learn More</button></li>
            </ul>
            </div>
            <div>
<img src={baner} alt='baner' />
            </div>
            
        </div>
    );
};

export default Hero;