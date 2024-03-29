import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll";
import profile from "../assets/Profile.jpg"

const Home = () => {

    const handleDownload = () => {
        const resumeUrl ="/Resume of Salman1.pdf";
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download ="/Resume of Salman1.pdf";
        link.click();
      };
      
    return (
        <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full pt-24">
                    <h2 className="text-4xl md:text-7xl font-bold text-white">
                       Hi I am a, <br /> Front-End Developer
                    </h2>
                    <p className="text-gray-500 py-4 mx-w-md">
                    Here to help you to make your dream site, natus, eum dignissimos temporibus saepe sapiente amet, veritatis officiis illum! Ut, aperiam. Non, cupiditate? Nulla, minima! Eaque, voluptatum corrupti?
                    </p>
                    <div className="flex gap-4">
                        <Link to="portfolio" smooth duration={500} href='/public/Resume of Salman1.pdf' className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"></MdOutlineKeyboardArrowRight>
                            </span>
                        </Link>

                        

                        
                        <button onClick={handleDownload} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Download Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"></MdOutlineKeyboardArrowRight>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <img className="rounded-2xl mx-auto w-2/3 md:w-full" src={profile} />
                </div>
            </div>
        </div>
    );
};

export default Home;