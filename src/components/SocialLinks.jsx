import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href: "https://www.linkedin.com/in/salman-hossen-939220279/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30}></FaGithub>
                </>
            ),
            href: "https://github.com/",

        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href: "mailto: salmanhossen202022@gmail.com",

        },
        // {
        //     id: 4,
        //     child: (
        //         <>
        //             Resume <FaLinkedin size={30}></FaLinkedin>
        //         </>
        //     ),
        //     href:"https//linkedin.com",

        // }
    ]
    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul >
                {
                    links.map((link) => (
                        <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + link.style}>
                            <a href={ link.href} className="flex justify-between items-center w-full text-white" target="_blank" rel="noopener noreferrer" >
                                {link.child}
                            </a>
                        </li>
                    ))
                }
                {/* <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
                    <a href="" className="flex justify-between items-center w-full text-white" >
                        <>
                            Linkedin <FaLinkedin size={30}></FaLinkedin>
                        </>
                    </a>
                </li> */}
            </ul>
        </div>

    );
};

export default SocialLinks;