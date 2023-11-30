import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TimeSlotManager from '../BeATrainer/TimeSlotManager';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useUsers from '../../../hooks/useUsers';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const AvailableSlotDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {user , loader } = useContext(AuthContext);
    const [users] = useUsers();
    const bookedUser = users?.find(users => users?.email === user?.email);
    console.log(bookedUser);
    const details = useLoaderData();
    console.log(details);
    const [selectedSlot, setSelectedSlot] = useState({});
    console.log(selectedSlot);
  const handleTimeSlot = (timeSlot , slotNumber ) => {
    const slot = {timeSlot , slotNumber }
    setSelectedSlot(slot);
  };

  const firstTime = details?.trainerInfo?.availableFirstTimeDay + ' ' + details?.trainerInfo?.firstTimeFormat ;
  const secondTime = details?.trainerInfo?.availableSecondTimeDay + ' ' + details?.trainerInfo?.secondTimeFormat ;
  const timeSlots = TimeSlotManager({availableStartTime : firstTime ,availableEndTime : secondTime})
 
  const handleJoinNow = (e) => {
    e.preventDefault();
    const JoinNowForm = {selectedSlot , bookedUser , details , timeSlots}
    if(!selectedSlot?.slotNumber){
     return
    }
    axiosSecure.post('/bookedclasses' , JoinNowForm)
    .then(res => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "booked class successfully",
        showConfirmButton: false,
        timer: 1500
      });
        console.log(res?.data);
    })
    
  }
  

    return (
     <div className='py-20'>
         <div className="w-[80%] mx-auto py-10 pl-10 rounded border-4 border-primary bg-white">
                <Helmet>
            <title> Fitness house | Available Slot Details </title>
          </Helmet>
       {
        !details ?  <div className="h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div> :  <div>
        <h1 className='text-2xl font-semibold mt-1'>Class : {details?.classType}</h1>
        <p className='text-xl font-normal mt-1'>Plan : {details?.plan}</p>
<p className='text-xl font-normal mt-1'>Trainer Email : {details?.trainerInfo?.email}</p>
<p className='text-xl font-normal mt-1'>Class Description : <br/>
 {details?.classDescription}</p>
<div className='text-xl font-medium mt-1'>
<form action="" onSubmit={handleJoinNow}>
<div>
  <h2 className='text-xl font-medium mt-1'>Available Slots : </h2>
<div className='flex flex-wrap gap-3'>
{timeSlots.map((option , index) => (
    <div key={index} className='flex gap-2'>
      <input
       defaultChecked
        type="radio"
        id={index}
        value={option.start + '-' + option.end}
        checked={selectedSlot?.timeSlot === option.start + '-' + option.end }
        onChange={() => handleTimeSlot(option.start + '-' + option.end , index )}
      />
      <label>{option.start + '-' + option.end}</label>
    </div>
  ))}
</div>
  <p className='text-xl font-medium mt-1'>Selected Slot: {selectedSlot?.timeSlot}</p>
</div>
<div className='text-xl font-medium mt-1'>
  <h2>Training Day : </h2>
<div className='flex flex-wrap gap-3'>
{details?.trainerInfo?.availableTimeWeek && details?.trainerInfo?.availableTimeWeek.map((option , index) => (
    <div key={index} className='flex gap-2'>
        <h1>{option} ,</h1>
    </div>
  ))}
</div> 
</div>

  {
    user?.role === 'member' &&     <button type='submit' className='border-2 mt-5 hover:border-none px-4 py-2 transition-all duration-500 border-black font-semibold w-fit  rounded my-2 hover:bg-primary hover:text-white'>Join Now</button>
  }
  {
    user?.role !== 'member' &&     <div  className=' mt-5    font-semibold w-fit  rounded my-2 '>*Only member can booked claseses</div>
  }


</form>
</div>

    </div> 
       }
    </div>
     </div>
    );
};

export default AvailableSlotDetails;