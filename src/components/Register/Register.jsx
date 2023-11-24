import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css"
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {

    const { createUser, setUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const photoURL = e.target.photoURL.value;
      console.log(name, email, password, photoURL);
      const role = 'member';
      const userInfo = {name ,email ,role}
  
      if (password.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be 6 charecter.",
            showConfirmButton: false,
            timer: 1500
          })
        return;
      }
  
      if (!/[A-Z]/.test(password)) {
 
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be Uppercase.",
            showConfirmButton: false,
            timer: 1500
          })
        return;
      }
      if (!/[#?!@%$^*&-]/.test(password)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be have atleast one special charecter.",
            showConfirmButton: false,
            timer: 1500
          })
        return;
      }
  
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photoURL });
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account created and login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              axiosPublic.post('/users' , userInfo)
              .then( res => {
                console.log(res?.data);
              })
              navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
              return;
            });
        })
        .catch((error) => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              })
        });
    };
    return (
        <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center py-10 lg:h-screen">
        <div className="w-[95%] md:w-[60%] mx-auto bg-black-dark grid lg:grid-cols-2 items-center gap-10 lg:gap-20 p-5 rounded-2xl">
            <div className="">
                {/* <img src="https://i.ibb.co/cv9L25r/signup-background.jpg" alt=""/> */}
                <img src="https://i.ibb.co/HhwYph0/teamwork.jpg" alt="" className=""/>
            </div>
    
            <div className=" grid gap-5">
                <h1 className="text-5xl font-bold text-white text-center lg:text-left">Register</h1>
                <form onSubmit={handleRegister} className="space-y-6 text-white ">
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                         <GrUserManager/>
                        </div>
                        <input type="text" name="name" placeholder="Name" className="w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                         <MdOutlinePhotoCamera/>
                        </div>
                        <input type="text" name="photoURL" placeholder="photo URL" className="w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
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
                    <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2">Register</button>
                </form>
                <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                    <p>Do you have an account? <Link to="/login" className="text-neon-blue font-semibold cursor-pointer">Sign in</Link></p>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default Register;