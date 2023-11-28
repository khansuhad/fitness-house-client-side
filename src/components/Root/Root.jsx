import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
         <div className="min-h-[80vh] bg-[#EEE2DE] ">
         <Outlet></Outlet>
         </div>
            <Footer/>
        </div>
    );
};

export default Root;