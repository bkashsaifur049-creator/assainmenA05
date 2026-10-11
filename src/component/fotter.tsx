import logo from "../assets/logo-text.png"
const Fotter = () => {
    return (
        <div>
            <div className='grid grid-cols-2 mb-6 gap-5 mt-14 mr-0 container mx-auto md:grid-cols-4 max-w-6xl'>
                <div>
                    <img src={logo} alt='foter logo' />
                    <p className='text-mauve-400 mt-5'>Curated tools, technologies, and resources for developers buiding<br /> moodern softwer</p>
                    <ul className='flex gap-4 font-semibold text-mauve-600 mb-3 mt-5'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>Linkedln</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-black'>PRODUCT</h2>
                    <ul className='font-semibold text-gray-400 mt-4'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-black'>COMPANY</h2>
                    <ul className='font-semibold text-gray-400 mt-4'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-black'>LEGAL</h2>
                    <ul className='font-semibold text-gray-400 mt-4'>
                        <li>Privacy policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="h-px w-280 mt-30 bg-gray-300"></div>
            </div>
            <p className="text-1xl items-center ml-25 mb-5 text-gray-500">
                © 2026 Dev Stack. All rights reserved.
            </p>
        </div>
    );
};

export default Fotter;