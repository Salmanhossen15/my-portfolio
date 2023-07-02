import project1 from "../assets/project11 (2).png"
import project2 from "../assets/project2 (2).png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"

const Portfolio = () => {


    const portfolio = [
        {
            id: 1,
            src: project1,
            demoLink:"https://summer-camp-a300e.web.app/"
        },
        {
            id: 2,
            src: project2,
            demoLink:"https://toy-market-51ca8.web.app/"
        },
        {
            id: 3,
            src: project3,
            demoLink:"https://chef-website-assignment.web.app/"
        },
        {
            id: 4,
            src: project4,
            demoLink:"https://regal-bombolone-116b32.netlify.app/"
        },
        {
            id: 5,
            src: project5,
            demoLink:"https://friendly-babka-8aa67d.netlify.app/"
        },
        {
            id: 6,
            src: project6,
            demoLink:"https://glistening-bunny-6d5224.netlify.app/"
        },
    ]
    return (
        <div name="portfolio" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className=" text-4xl font-bold inline border-b-4 border-gray-500">--- Portfolio ---</p>
                    <p className="py-6">Check out some of my work here</p>

                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolio.map(({ id, src, demoLink }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img className="rounded-md duration-200 hover:scale-105" src={src} alt="" />
                                <div className="flex items-center justify-center">
                                    <button onClick={() => window.location.href = demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    );
};

export default Portfolio;