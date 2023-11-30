import { useContext, useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";



const AddNewForum = () => {
   const axiosPublic = useAxiosPublic();
    const [presentUser , setPresentUser] = useState();
    const [users] = useUsers();
    const {user} = useContext(AuthContext);
    useEffect(() => {
        const userInfo = users?.find( backuser => backuser.email === user?.email)
        setPresentUser(userInfo)
    },[users , user?.email])
    const handleAddNewForum = (e) => {
        e.preventDefault();
        const form = e.target ;
        const description = form.description.value ;
        const name = presentUser?.name ;
        const email = presentUser?.email ;
        const role = presentUser?.role ;
        const photoURL = user?.photoURL ;
        const newForumInfo = {name , email , role , description , photoURL};
        console.log(newForumInfo);
        axiosPublic.post('/newforums', newForumInfo)
        .then(res => {
            console.log(res?.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "added new forum successfully",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(res?.data);
              navigate('/')
        })

    }
    return (
        <div className="lg:mx-12 mx-4  py-10" id="about">
                  <Helmet>
            <title> Fitness house | New Forums </title>
          </Helmet>
        <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-primary italic">Add New Forum</h1>
            </div>
        <div className="py-10">
            <form onSubmit={handleAddNewForum}>
         <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[60%]  mx-auto">
         <div className="  w-full mb-5">
         <textarea name="description" className="textarea border-primary col-span-10 row-span-6 textarea-lg w-full" placeholder="forum Description..."></textarea>
         </div>
         <button type="submit" className=" px-10 py-2 w-full rounded border-[#860A35] transition-all duration-700  hover:bg-primary hover:text-white  text-black font-medium text-xl">Submit</button>
         </div>
            </form>
        </div>
    </div>
    );
};

export default AddNewForum;