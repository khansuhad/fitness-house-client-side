import "./login.css"
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center py-10 lg:h-screen">
        <div className="w-[95%] md:w-[60%] mx-auto bg-black-dark grid lg:grid-cols-2 items-center gap-10 lg:gap-20 p-5 rounded-2xl">
            <div className="">
                {/* <img src="https://i.ibb.co/cv9L25r/signup-background.jpg" alt=""/> */}
                <img src="https://i.ibb.co/HhwYph0/teamwork.jpg" alt="" className=""/>
            </div>
    
            <div className=" grid gap-5">
                <h1 className="text-5xl font-bold text-white text-center lg:text-left">Login</h1>
                <form action="" className="space-y-6 text-white ">
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                         <HiOutlineMail/>
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                           <RiLockPasswordFill/>
                        </div>
                        <input type="text" placeholder="Password" className="w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
                    <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2">Sign in</button>
                </form>
                <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                    <p>Do not have an account? <Link to='/register' className="text-neon-blue font-semibold cursor-pointer">Sign up</Link></p>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default Login;