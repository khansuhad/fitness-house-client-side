import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import useTrainers from "../../../../hooks/useTrainers";

import TimeSlot from "../../BeATrainer/TimeSlot/TimeSlot";
import { Helmet } from "react-helmet";
import Container from "../../../../Components/UI/Container/Container";


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
     
       <div className="pt-36 pb-10">
        <Helmet>
            <title> Fitness house | Trainer Details </title>
          </Helmet>
        <Container>
        <div className=" grid grid-cols-2 gap-10 bg-white p-5">
                
                <div className="flex justify-end ">
                    <img src={details?.image} alt="" className="w-96 h-96" />
                   
                </div>
                <div className=" flex flex-col bg-red-50 ">
                <h1 className="font-semibold text-2xl text-left">Name : {details?.fullName}</h1>
                    <p className="font-medium text-xl text-left">Email :{details?.email}</p>
      <p className="font-normal text-2xl text-left">Age : {details?.age} years</p>
      <p className="font-normal text-left "><span className="text-3xl">Skills : </span>
        <span className="font-normal text-left">
         {
          details?.skills &&  details?.skills.map((skill , index)=> <li key={index}>{skill}</li>)
         }
          </span></p>
      <p className="text-black font-normal text-xl">Available time in  week : <div className="flex">
        {
        details?.availableTimeWeek &&   details?.availableTimeWeek.map((day , index)=> <h1 key={index}>{day} ,</h1>)
        }
        </div></p>
      <p className="text-black font-normal text-xl">Available in a day : {details?.availableFirstTimeDay}{details?.firstTimeFormat} - {details?.availableSecondTimeDay}{details?.secondTimeFormat}</p>
      <p className="text-black font-normal text-xl"><TimeSlot firstTime={firstTime} secondTime={secondTime}/></p>
                </div>
            </div>
        </Container>
       </div>
    );
};

export default TrainerDetails;