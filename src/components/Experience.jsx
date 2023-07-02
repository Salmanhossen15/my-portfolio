

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
            src: "https://img.freepik.com/free-icon/css_318-698167.jpg?size=626&ext=jpg&ga=GA1.2.276070302.1680262065&semt=ais",
            title:"CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3Z7Qx0guvXKY0WgStMeHGBFu4Qay8YqYDPBvCwk&s",
            title:"JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
            title:"NODE JS",
            style: "shadow-orange-500"
        },
        {
            id: 5,
            src: "https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png",
            title:"MONGODB",
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
            title:"BOOTSTRAP",
            style: "shadow-orange-500"
        },
        {
            id: 7,
            src: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
            title:"TAILWIND",
            style: "shadow-blue-500"
        },
        {
            id: 8,
            src: "https://blog.openreplay.com/images/building-react-components-with-daisyui/images/hero.png",
            title:"Daisy UI",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: "https://w7.pngwing.com/pngs/322/725/png-transparent-node-js-javascript-npm-express-js-sharp-miscellaneous-angle-text-thumbnail.png",
            title:"Express JS",
            style: "shadow-blue-500"
        },
    ]
    return (
        <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div className="text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">--- Skills ---</p>
                    <p className="py-6">This is the technologies I have been work with !</p>
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