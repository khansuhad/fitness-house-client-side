import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useActivityLogClass from "../../../hooks/useActivityLogClass";
import moment from "moment";
import { Helmet } from "react-helmet";

const ActivityLog = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email ;
    console.log(email);
    const currentDay = moment().format("dddd");
    console.log(currentDay);
    const [todayTrainers,setTodayTrainers] = useState();
    const [activityClass] = useActivityLogClass({email});
    useEffect(() => {
        const filteredTrainers = activityClass?.filter(item => {
            const trainerAvailability = item.details?.trainerInfo?.availableTimeWeek;
            return trainerAvailability?.includes(currentDay);
        });
        setTodayTrainers(filteredTrainers);
    }, [activityClass , currentDay]);
   const noActivity = todayTrainers?.length ;
   console.log(noActivity);
    return (
       <div>
              <Helmet>
            <title> Fitness house | Activity Log </title>
          </Helmet>
  <div className=" flex justify-center items-center mt-20">
  {
noActivity === 0 && <div className=" flex justify-center  text-5xl font-semibold text-center">
<h1>No Activity's for today</h1>
</div>
            }
  </div>
         <div className="w-[90%] mx-auto grid grid-cols-2 gap-10 mt-10">
   
            {
                todayTrainers?.map(activity => <div key={activity?._id} className="border-2 border-black rounded pl-5 py-5">
                    <h1>Class : {activity?.details?.classType}</h1>
            <p>Plan : {activity?.details?.plan}</p>
        <p>Trainer name : {activity?.details?.trainerInfo?.fullName}</p>
        <p>Trainer Email : {activity?.details?.trainerInfo?.email}</p>
        <p>Time Slot : {activity?.selectedSlot?.timeSlot}</p>

        <p>Class Description : <br/>
     {activity?.details?.classDescription}</p>
                </div>)
            }
        </div>
       </div>
    );
};

export default ActivityLog;