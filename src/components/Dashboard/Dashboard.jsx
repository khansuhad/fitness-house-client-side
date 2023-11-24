import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
             <div className="p-2 w-[300px] hidden lg:block overflow-y-auto text-center bg-dashmenu shadow h-screen text-gray-200 rounded">
     <div className="my-10">
     <Link to='/dashboard' className="text-primary text-3xl">Dashboard</Link>
     </div>
        <hr className="px-1" />
       <div className="text-primary font-semibold">
        {/* admin routes */}
       <Link to='/dashboard/allsubscribers' className="p-2.5 my-2 flex items-center  rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">All Subscribers</Link>
        <Link to='/dashboard/alltrainers' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">All Trainers</Link>
        <Link to='/dashboard/appliedtrainer' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Applied Trainer</Link>
        <Link to='/dashboard/balance' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Balance</Link>

        {/* trainer route */}
        <Link to='/dashboard/manageslots' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Manage Slots</Link>
        <Link to='/dashboard/managemember' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Manage Member</Link>
       
        <Link to='/dashboard/addnewclass' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Add New Class</Link>
        <Link to='/dashboard/activitylog' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Activity log</Link>
        <Link to='/dashboard/recommendedclass' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Recommended Class</Link>
        {/* for admin and trainer */}
        <Link to='/dashboard/addnewform' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Add New Forum</Link>
        {/* for all users */}
        <Link to='/dashboard/profilesetting' className="p-2.5 my-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-primary hover:text-dashmenu">Profile Setting</Link>
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