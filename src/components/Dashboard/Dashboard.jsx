import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
             <div className="p-2 w-[300px] hidden lg:block overflow-y-auto text-center bg-gray-900 shadow h-screen text-gray-200 rounded">
     <div className="my-10">
     <Link to='/sakdashboard' className="text-gray-200 text-3xl">Dashboard</Link>
     </div>
        <hr className="px-1" />
       <div className="">
        {/* admin routes */}
       <Link to='/sakdashboard/home' className="p-2.5 my-2 flex items-center  rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">All Subscribers</Link>
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">All Trainers</Link>
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Applied Trainer</Link>
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Balance</Link>

        {/* trainer route */}
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Manage Slots</Link>
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Manage Member</Link>
       
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Add New Class</Link>
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Activity log</Link>
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Recommended Class</Link>
        {/* for admin and trainer */}
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">Add New Forum</Link>
        {/* for all users */}
        <Link to='/sakdashboard/about' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">profile Setting</Link>
       </div>
       <hr className="px-1"/>
     
  </div>

  <div className="flex-1">
    <Outlet></Outlet>
</div>


        </div>
    );
};

export default Dashboard;