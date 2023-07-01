

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">--- Contact ---</p>
                    <p className="py-6">Submit the form bellow to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/b32bb060-57f8-4f95-8dc6-fc9665fd1380" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Enter Your Email" className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea name="message" placeholder="Enter Your massage" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">lets talk</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;