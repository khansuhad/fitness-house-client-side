import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TimeSlotManager from '../BeATrainer/Timslots';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useUsers from '../../../hooks/useUsers';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AvailableSlotDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
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
    console.log(JoinNowForm);
    axiosSecure.post('/bookedclasses' , JoinNowForm)
    .then(res => {
        console.log(res?.data);
    })
    
  }
  

    return (
        <div className="w-[40%] mx-auto">
        <div>
            <h1>Class : {details?.classType}</h1>
            <p>Plan : {details?.plan}</p>
<p>Trainer Email : {details?.trainerInfo?.email}</p>
<p>Class Description : <br/>
     {details?.classDescription}</p>
<div>
    <form action="" onSubmit={handleJoinNow}>
    <div>
      <h2>Available Slots : </h2>
 <div className='flex flex-wrap gap-3'>
 {timeSlots.map((option , index) => (
        <div key={index} className='flex gap-2'>
          <input
          required
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
      <p>Selected Slot: {selectedSlot?.timeSlot}</p>
    </div>
<div>
      <h2>Training Day : </h2>
 <div className='flex flex-wrap gap-3'>
 {details?.trainerInfo?.availableTimeWeek && details?.trainerInfo?.availableTimeWeek.map((option , index) => (
        <div key={index} className='flex gap-2'>
            <h1>{option} ,</h1>
        </div>
      ))}
 </div> 
    </div>
    <button type='submit' className='btn btn-primary'>Join Now</button>
    </form>
</div>

        </div>
    </div>
    );
};

export default AvailableSlotDetails;