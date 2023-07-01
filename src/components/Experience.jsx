

const Experience = () => {

    const skills = [
        {
            id: 1,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title:"HTML",
            style: "shadow-orange-500"

        },
        {
            id: 2,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title:"HTML",
            style: "shadow-orange-500"
        },
        {
            id: 3,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title:"HTML",
            style: "shadow-orange-500"
        },
        {
            id: 4,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title:"HTML",
            style: "shadow-orange-500"
        },
        {
            id: 5,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title:"HTML",
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title:"HTML",
            style: "shadow-orange-500"
        },
    ]
    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">experiences</p>
                    <p className="py-6">this is the teqnologes i ahave been work with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm:px-0 text-center">
                    {
                        skills.map(({id, src, title, style}) =>(
                            <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img className="w-20 mx-auto" src={src} alt="" />
                        <p className="mt-4">{title}</p>
                    </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Experience;