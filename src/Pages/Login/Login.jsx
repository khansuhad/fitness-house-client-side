import { useContext } from "react";
import "./login.css"
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
    const navigate = useNavigate();
    const {loginUser  , googleLogin} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    const loginForm = {email , password}
    console.log(loginForm)
    loginUser(email , password)
    .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "profile updated successfully",
                showConfirmButton: false,
                timer: 1500
              });
            e.target.reset();
        console.log(res.user)
        navigate('/');
       
    })
    .catch(error => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "email or password doesn't match",
                showConfirmButton: false,
                timer: 1500
              });
            console.log(error.message)
    })

  }
  const handleGoogle = () => {
    googleLogin()
    .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "profile updated successfully",
                showConfirmButton: false,
                timer: 1500
              });
              const name = res?.user.displayName ;
              const email = res?.user.email ;
              const image = res?.user.photoURL ;
              const role = 'member' ;
              const userInfo = {name ,email ,role ,image};

              axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log(res?.data);
              })
           navigate('/');
    })
    .catch(error => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              });
            console.log(error.message)
            return
    })
}
    return (
        <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center py-10 lg:h-screen">
        <div className="w-[95%] md:w-[60%] mx-auto bg-black-dark grid lg:grid-cols-2 items-center gap-10 lg:gap-20 p-5 rounded-2xl">
            <div className="">
                {/* <img src="https://i.ibb.co/cv9L25r/signup-background.jpg" alt=""/> */}
                <img src="https://i.ibb.co/HhwYph0/teamwork.jpg" alt="" className=""/>
            </div>
    
            <div className=" grid gap-5">
                <div className="flex items-center gap-10">
                <h1 className="text-5xl font-bold text-white text-center lg:text-left">Login</h1>
                <div className="flex justify-center my-5 mb-5">
            <button className="btn px-10" onClick={handleGoogle} >
              <FcGoogle/>  Google</button>
            </div>
                </div>
                <form onSubmit={handleLogin} className="space-y-6 text-white ">
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                         <HiOutlineMail/>
                        </div>
                        <input type="email" name="email" placeholder="Email Address" className="w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                           <RiLockPasswordFill/>
                        </div>
                        <input type="text" name="password" placeholder="Password" className="w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
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