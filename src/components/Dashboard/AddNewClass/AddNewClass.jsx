import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTrainers from "../../../hooks/useTrainers";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";



const AddNewClass = () => {
  const axiosSecure =  useAxiosSecure();
  const axiosPublic  = useAxiosPublic();
  const [trainerInfo, setTrainerInfo] = useState({});
  const {user} = useContext(AuthContext);
  console.log(trainerInfo);
//   const  {_id} = trainerInfo ;
//   const id = _id;
//   const info =  {id, skills,availableTimeWeek,fullName, age , experience, facebook , availableFirstTimeDay,availableSecondTimeDay,secondTimeFormat , firstTimeFormat, email , image}
const [trainers] = useTrainers();
  useEffect(() => {
    const userInfo = trainers?.find( trainer => trainer?.email === user?.email)
    setTrainerInfo(userInfo)
  },[trainers ,  user?.email])
    const handleAddNewClass = (e) => {
            e.preventDefault();
            const form = e.target ;
            const classDescription = form.class.value ;
            const plan = form.plan.value ;
            const classType = form.classType.value ;
           
            const classForm = {classDescription,classType , plan , trainerInfo }
            console.log(classForm);
            axiosPublic.post ('/newclass' , classForm)
            .then(res => {
                console.log(res?.data);
            })

    }
    return (
        <div className="lg:mx-12 mx-4  py-10" id="about">
                <Helmet>
            <title> Fitness house | Add New Classes </title>
          </Helmet>
        <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-primary italic">Add New Class</h1>
            </div>
        <div className="py-10">
            <form onSubmit={handleAddNewClass}>
         <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[60%]  mx-auto">
         <div className=" w-full my-10">
                <label
                 
                  className="text-xl  font-semibold text-headingcolor w-full"
                >
                 Class Type :
                </label>
                <input
                  type="text"
                required
                  name="classType"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
              </div>
         <div className="  w-full mb-5">
         <label
                 
                 className="text-xl  font-semibold  text-headingcolor  w-full"
               >
               Classes :
               </label>
         <textarea name="class" className="textarea border-primary mt-3 col-span-10 row-span-6 textarea-lg w-full" placeholder="Class Description..."></textarea>
         <div className=" w-full mt-10">
         <label
                 
                 className="text-xl  font-semibold  text-headingcolor  w-full"
               >
               Plan :
               </label>
                <select name="plan" id="timeformat" className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Diamond">Diamond</option>
            </select>
              </div>
         </div>
         <button type="submit" className=" px-10 py-2 w-full rounded border-[#860A35] transition-all duration-700  hover:bg-primary hover:text-white  text-black font-medium text-xl">Submit</button>
         </div>
            </form>
        </div>
    </div>
    );
};

export default AddNewClass;