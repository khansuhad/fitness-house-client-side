import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useActivityLogClass from "../../../hooks/useActivityLogClass";
import moment from "moment";

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
    return (
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
    );
};

export default ActivityLog;