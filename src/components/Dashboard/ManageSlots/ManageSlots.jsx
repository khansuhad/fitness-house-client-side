import { useContext, useState } from "react";
import useBookedClasses from "../../../hooks/useBookedClasses";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

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