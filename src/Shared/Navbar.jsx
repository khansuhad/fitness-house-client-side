import  { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi"; 
import { RxCross1 } from "react-icons/rx"; 
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

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
//   const [isSticky, setIsSticky] = useState(false);



//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsSticky(true);
//       }
//     };

    // window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
    return (
        <header className="w-full  ">
      <nav
        className={`py-4 md:px-12 px-4 bg-white `}
      >
        <div className="flex items-center justify-between">
    <div className='flex items-center'>
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-body text-3xl">
            { isMenuOpen === false ? <HiMenu /> : <RxCross1/> }
          </button>
          <div className="text-white font-bold text-lg cursor-pointer">
            <img src='https://i.ibb.co/Jntk2zH/Whats-App-Image-2023-11-23-at-8-00-34-PM-1-removebg-preview.png' alt="" className=" w-40 lg:w-60" />
          </div>
    </div>
          
          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body font-medium">
            <NavLink 
              to="/"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink    to="/gallery" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">
            Gallery
            </NavLink>
            <NavLink   to="/trainer" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
            Trainer
            </NavLink>
            <NavLink  to="/classes" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
            Classes
            </NavLink>
            <NavLink  to="/community" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
            Community
            </NavLink>
            <NavLink  to="/dashboard" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
            Dashboard
            </NavLink>
            {/* {
            user?.email === 'suhadahmodkhan@gmail.com' &&  <NavLink to="/sakdashboard" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">Dashboard</NavLink>
           } */}
      
          </div>

        

          {/* btn for small devices */}
        <div className='flex items-center'>
      
          <div className=" ">
          {
                user ? <div className='flex gap-2 items-center'>
              
                <div>
                <label  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                </div>
            
    <div>
    <Link  className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300" onClick={handleSignOut}>Log out</Link>
    </div>
             
              </div>  :
                <Link to='/login' className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">Login</Link>
             }
          </div>
         
        </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-navmenu p-4 rounded-lg lg:hidden text-black font-medium text-center">
            <NavLink   to="/" className="block hover:text-gray-400 py-2">
              Home
            </NavLink>
            <NavLink   to="/gallery" className="block hover:text-gray-400 py-2">
            Gallery
            </NavLink>
            <NavLink   to="/trainer" className="block hover:text-gray-400 py-2">
            Trainer
            </NavLink>
            <NavLink   to="/classes" className="block hover:text-gray-400 py-2">
            Classes
            </NavLink>
            <NavLink   to="/community" className="block hover:text-gray-400 py-2">
            Community
            </NavLink>
            <NavLink  to="/dashboard" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
            Dashboard
            </NavLink>
            {/* <NavLink   to="/portfolio" className="block hover:text-gray-400 py-2">
            Classes
            </NavLink> */}
           {/* {
            user?.email === 'suhadahmodkhan@gmail.com' &&  <NavLink to="/sakdashboard" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">Dashboard</NavLink>
           } */}
        
          </div>
        )}
          {/* contact me btn */}
         
      </nav>
    </header>
    );
};

export default Navbar;