import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Home = () => {

    const handleDownload = () => {
        const resumeUrl = '/public/Resume of Salman1.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = '/public/Resume of Salman1.pdf';
        link.click();
      };
      
    return (
        <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl md:text-7xl font-bold text-white">
                        I am a full stack developer
                    </h2>
                    <p className="text-gray-500 py-4 mx-w-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero doloribus commodi, natus, eum dignissimos temporibus saepe sapiente amet, veritatis officiis illum! Ut, aperiam. Non, cupiditate? Nulla, minima! Eaque, voluptatum corrupti?
                    </p>
                    <div className="flex gap-4">
                        <button href='/public/Resume of Salman1.pdf' className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"></MdOutlineKeyboardArrowRight>
                            </span>
                        </button>

                        {

                        }
                        <button onClick={handleDownload} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"></MdOutlineKeyboardArrowRight>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="w-full h-1/3">
                    <img className="rounded-2xl mx-auto w-2/3 md:w-full" src="https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.276070302.1680262065&semt=sph"  />
                </div>
            </div>
        </div>
    );
};

export default Home;