import  { useContext,  useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi"; 
import { RxCross1 } from "react-icons/rx"; 
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import "./Navbar.css"
import { FaUser, FaUserAlt, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user , logOut  } = useContext(AuthContext);
    console.log(user?.photoURL);
    const handleSignOut = () => {
      logOut()
      .then(() => {
        console.log('successfully sign out ')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign out successfully",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch(error => {
        console.log(error.message)
      })
     }


    return (
        <header className="w-full  bg-[white] fixed  z-[1000]">
      <nav
        className={` md:px-12 px-4  py-2`}
      >
        <div className="flex items-center justify-between">
    <div className='flex items-center'>
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-body text-3xl">
            { isMenuOpen === false ? <HiMenu /> : <RxCross1/> }
          </button>
          
    </div>
          
          {/* for larger device */}
          <div className="lg:flex items-center gap-5 hidden text-body font-medium">
            <NavLink 
              to="/"
              className="block  hover:text-[red] text-black px-2 py-2 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink    to="/gallery" className="block hover:text-[red] text-black px-2 py-2 cursor-pointer">
            Gallery
            </NavLink>
            <NavLink   to="/trainer" className="block  hover:text-[red] text-black px-2 py-2 cursor-pointer">
              
            Trainer
            </NavLink>
            <NavLink  to="/classes" className="block  hover:text-[red] text-black px-2 py-2 cursor-pointer">
              
            Classes
            </NavLink>
            <NavLink  to="/forums" className="block  hover:text-[red] text-black px-2 py-2 cursor-pointer">
            Forums
            </NavLink>
            <NavLink  to="/dashboard" className="block  hover:text-[red] text-black py-2 px-2 cursor-pointer">
            Dashboard
            </NavLink> 
            <div className=" ">
          {
                user ? <div className='flex gap-2 items-center'>
              
                {/* <div>
                <label  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                </div> */}
            
    <div>
    <Link  className="p-2 rounded-full text-xl bg-[red] font-roboto  w-[40px] h-[40px] gap-2  font-bold text-white   hover:w-[100px] transition-all duration-300 ease-out float-left flex justify-center items-center group" onClick={handleSignOut}>
      <p className='w-[40px] h-[40px] items-center flex justify-center'><FaUserCircle ></FaUserCircle></p>
    <p className=' group-hover:block hidden '>SignOut</p></Link>
    </div>
   
             
              </div>  :
                <div>
                <Link to="/login" className="p-2 rounded-full text-xl bg-[red] font-roboto  w-[40px] h-[40px] gap-2  font-bold text-white   hover:w-[100px] transition-all duration-300 ease-out float-left flex justify-center items-center group" >
                  <p className='w-[40px] h-[40px] items-center flex justify-center'><FaUserCircle ></FaUserCircle></p>
                <p className=' group-hover:flex hidden'>SignIn </p></Link>
                </div>
             }
          </div>
          </div>

        

          {/* btn for small devices */}
        <div className='flex items-center'>
      
          
         
        </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-navmenu p-4 rounded-lg lg:hidden text-black font-medium text-center">
            <NavLink   to="/" className="block hover:text-[red] text-black py-2">
              Home
            </NavLink>
            <NavLink   to="/gallery" className="block hover:text-[red] text-black py-2">
            Gallery
            </NavLink>
            <NavLink   to="/trainer" className="block hover:text-[red] text-black py-2">
            Trainer
            </NavLink>
            <NavLink   to="/classes" className="block hover:text-[red] text-black py-2">
            Classes
            </NavLink>
            <NavLink   to="/forums" className="block hover:text-[red] text-black py-2">
            Forums
            </NavLink>
            <NavLink  to="/dashboard" className="block  hover:text-[red] text-black px-2 py-2 cursor-pointer">
            Dashboard
            </NavLink>
           
        
          </div>
        )}
          
         
      </nav>
    </header>
    );
};

export default Navbar;