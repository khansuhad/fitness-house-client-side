import { useContext, useEffect, useState } from "react";
import useBookedClasses from "../../../hooks/useBookedClasses";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
// import { SMTPClient } from 'emailjs';
const ManageSlots = () => {
 
    const {user } = useContext(AuthContext)
    const email = user?.email ;
    const [bookedClasses] = useBookedClasses({email})
    console.log(bookedClasses);
    const [selectedSlotDetails, setSelectedSlotDetails] = useState(null);
    console.log(selectedSlotDetails);
    const openModal = (slotNumber) => {
      const slotDetails = bookedClasses.find((booking) => booking.selectedSlot.slotNumber === slotNumber);
      setSelectedSlotDetails(slotDetails);
    };
  //  const sendEmail = (e, email ) => {
  //   e.preventDefault();
  //   const message = e.target.message.value;
  //   const client = new SMTPClient({
  //     user: 'khansuhad',
  //     password: 'RAAshutm12',
  //     host: 'smtp.suhadahmodkhan@gmail.com',
  //     ssl: true,
  //   });
    
  //   // send the message and get a callback with an error or details of the message that was sent
  //   client.send(
  //     {
  //       text: message ,
  //       from: user?.email,
  //       to: {email},
    
  //     },
  //     (err, message) => {
  //       console.log(err || message);
  //     }
  //   );
   
  //  }

    return (
        <div className="grid grid-cols-7 gap-5 w-[80%] mx-auto mt-10">
                <Helmet>
            <title> Fitness house | Manage Slots </title>
          </Helmet>
            {
                bookedClasses[0]?.timeSlots?.map((timeSlot , index) => <div key={timeSlot}>
                    <div className={` text-center ${isSlotBooked(index) ? 'bg-gradient-to-r from-green-600 to-green-900' : 'bg-gradient-to-r from-red-600 to-red-900'} text-White rounded py-5 h-40 w-40`}>
                        <h1 className="font-bold text-xl text-white">Slot : {index + 1}</h1>
                        <h1 className="font-bold  text-white">{timeSlot?.start} - {timeSlot?.end}</h1>
                        {isSlotBooked(index) && <div>
                            <p className="font-bold  text-white">Booked!</p> 
                            <div onClick={() => openModal(index)}
                             > <button className="btn bg-primary text-dashmenu border-none hover:text-black" onClick={()=>document.getElementById(`${selectedSlotDetails?._id}`).showModal()}> Click Who Booked</button></div>
                             <dialog id={`${selectedSlotDetails?._id}`} className="modal">
<div className="modal-box rounded">
<div className="card card-compact p-3">
{/* <figure><img src={appliedTrainer?.image} alt="Shoes" className="w-44 h-44"  /></figure> */}
<div className="card-body font-medium ">
  <h2 className=""> Slot : {selectedSlotDetails?.selectedSlot?.slotNumber - 1}</h2>
  <h2 className="">Time Slot : {selectedSlotDetails?.selectedSlot?.timeSlot}</h2>
  <p>Name : {selectedSlotDetails?.bookedUser.name}</p>
  <p>Email : {selectedSlotDetails?.bookedUser.email}</p>
  {/* <p>Age : {appliedTrainer?.age}</p> */}
                          {/* <div>
                            <form onSubmit={sendEmail}>
                            <input required type="text"name="message" placeholder="Type your email address..." className="input input-bordered border-primary  w-full" />
                            </form>
                            <button type="submit" className=" px-10 py-2 w-full rounded bg-primary transition-all duration-700 border-none hover:bg-dribble hover:text-white hover:border-primary hover:border-4 text-white font-medium text-xl">Reject</button>
                          </div> */}
  <div className="flex gap-5 justify-center items-center">
  <div className="modal-action">
    <form method="dialog">
      <button className="btn">Close</button>
    </form>
  </div>
  </div>
</div>
</div>
 
</div>
</dialog>
                            </div>}
                    </div>
                </div>)
            }
         
        </div>
    );
    function isSlotBooked(index) {
        return bookedClasses.some((booking) => booking.selectedSlot.slotNumber === index );
      }
};

export default ManageSlots;