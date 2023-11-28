import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTrainers from "../../../hooks/useTrainers";
import TrainerAvailability from "../BeATrainer/WeekDef";
import TimeSlot from "../BeATrainer/WeekDef";
import { Helmet } from "react-helmet";


const TrainerDetails = () => {
    // const data = useLoaderData();
    const [details , setDetails] = useState({})
    const [availableSlot , setvAilableSlot] = useState()
    const [trainers] = useTrainers();
    const params = useParams();
   useEffect(() =>{
    const findTrainer = trainers?.find( trainer => trainer?._id === params.id)
        setDetails(findTrainer)
        console.log(findTrainer);
   },[trainers , params ])
   console.log(details);
  
   useEffect(() => {
   
    if(details?.firstTimeFormat === 'am' && details?.secondTimeFormat === 'pm'){
      
        let slot = 12 - Math.abs(details?.availableFirstTimeDay - details?.availableSecondTimeDay);
        const slots = {slot}
        setvAilableSlot(slots)
    }
    else if(details?.firstTimeFormat === 'pm' && details?.secondTimeFormat === 'am'){
      let slot = 12 - Math.abs(details?.availableFirstTimeDay - details?.availableSecondTimeDay);
      const slots = {slot}
      setvAilableSlot(slots)
    }
    else{
      let slot = Math.abs(details?.availableFirstTimeDay - details?.availableSecondTimeDay) ;
      const slots = {slot}
      setvAilableSlot(slots)
    }
    
   },[ details?.availableFirstTimeDay,details?.firstTimeFormat ,details?.availableSecondTimeDay ,details?.secondTimeFormat])
  console.log(availableSlot);
  const firstTime = details?.availableFirstTimeDay + ' ' + details?.firstTimeFormat ;
  console.log(firstTime);
  const secondTime = details?.availableSecondTimeDay + ' ' + details?.secondTimeFormat ;
  console.log(secondTime);
    return (
     
        <div className="w-[40%] mx-auto">
                <Helmet>
            <title> Fitness house | Trainer Details </title>
          </Helmet>
            <div className="px-10">
                <img src={details?.image} alt="" className="w-96  " />
            </div>
            <div>
                <h1>Name : {details?.fullName}</h1>
                <p>Email :{details?.email}</p>
  <p>Age : {details?.age}</p>
  <p>Skills : 
    <ul className="list-disc">
     {
      details?.skills &&  details?.skills.map((skill , index)=> <li key={index}>{skill}</li>)
     }
      </ul></p>
  <p>Available time in  week : <div className="flex">
    {
    details?.availableTimeWeek &&   details?.availableTimeWeek.map((day , index)=> <h1 key={index}>{day} ,</h1>)
    }
    </div></p>
  <p>Available in a day : {details?.availableFirstTimeDay}{details?.firstTimeFormat} - {details?.availableSecondTimeDay}{details?.secondTimeFormat}</p>
  <p><TimeSlot firstTime={firstTime} secondTime={secondTime}/></p>
            </div>
        </div>
    );
};

export default TrainerDetails;