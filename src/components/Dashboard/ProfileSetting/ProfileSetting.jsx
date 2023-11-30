import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ProfileSetting = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const [users] = useUsers();
    const email = user?.email;
    const userInfo = users?.find(users => users?.email === email);


    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
            const info = {name , image}

            axiosSecure.patch(`/users/profile/${userInfo?._id}`,info)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "profile updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  console.log(res?.data);
           
                console.log(res?.data);
            })
            axiosSecure.patch(`/bookedclass/profile/${userInfo?._id}`,info)
            .then(res => {
                console.log(res?.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "profile updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  console.log(res?.data);
                 
            })
    }
    return (
        <div className="lg:mx-12 mx-4 mt-40 py-10" id="about">
                  <Helmet>
            <title> Fitness house | Profile Setting </title>
          </Helmet>
        <h1 className="text-primary w-fit mx-auto md:text-5xl text-4xl font-bold text-center flex">---<h2 className=" border-4  p-2 border-primary rounded italic ">Profile Setting </h2>---</h1>
        <div className="py-10">
            <form onSubmit={handleUpdate}>
         <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[60%]  mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10  w-full mb-5">
            <input required type="text" defaultValue={userInfo?.name} name="name" placeholder="name...." className="input input-bordered border-primary  w-full" />
            <input required type="text" defaultValue={userInfo?.image} name="image" placeholder="profile image url...." className="input input-bordered border-primary  w-full" />
         </div>
         <button type="submit" className="btn px-10 py-2 w-full rounded btn-primary border-2 border-black transition-all duration-700 border-none hover:bg-[#860A35] hover:text-white hover:border-primary hover:border-4 text-black  font-medium text-xl">Update</button>
         </div>
            </form>
        </div>
    </div>
    );
};

export default ProfileSetting;