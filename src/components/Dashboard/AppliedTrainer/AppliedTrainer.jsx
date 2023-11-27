import { FaEye } from "react-icons/fa";
import useAppiledTrainers from "../../../hooks/useAppiledTrainers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";

const AppliedTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const [users] = useUsers();
  const [appliedTrainers] = useAppiledTrainers();
  console.log(appliedTrainers);
  const handleConfirmation = (id , email) =>{
    const userInfo = users?.find(user => user.email === email);
    const trainerInfo = appliedTrainers?.find(user => user?._id === id);
    console.log(trainerInfo);
    axiosSecure.patch(`/users/${userInfo?._id}`, {role :'trainer'} )
    .then(res => {
      console.log(res?.data);
    })
    axiosSecure.post('/trainers' , trainerInfo )
    .then(res => {
      console.log(res?.data);
    })
    axiosSecure.delete(`/appliedtrainers/${id}`)
    .then(res => {
      console.log(res?.data);
    })

  }
    return (
        <div className="bg-navmenu min-h-screen p-10">
        <div className="flex justify-center">
            <h1 className="text-4xl font-semibold text-primary italic">All Applied Trainers : {appliedTrainers?.length} </h1>
        </div>
        <div className="overflow-x-auto mt-10">
<table className="table">
{/* head */}
<thead>
  <tr className="text-2xl text-black">
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Details</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
{
  appliedTrainers?.map(appliedTrainer =>   <tr key={appliedTrainer?._id} className="text-xl text-black">
  <th>
  <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={appliedTrainer?.image} />
        </div>
      </div>
  </th>
  <td>
      <div>
        <div className="font-bold">{appliedTrainer?.fullName}</div>
      </div>
  
  </td>
  <td>
 <h1>{appliedTrainer?.email}</h1>
  </td>
  <td>
  
<button className="btn bg-primary text-dashmenu text-xl" onClick={()=>document.getElementById(`${appliedTrainer?._id}`).showModal()}><FaEye/></button>
<dialog id={`${appliedTrainer?._id}`} className="modal">
<div className="modal-box rounded">
<div className="card card-compact p-3">
<figure><img src={appliedTrainer?.image} alt="Shoes" className="w-44 h-44"  /></figure>
<div className="card-body">
  <h2 className="card-title">Full Name :{appliedTrainer?.fullName}</h2>
  <p>Email :{appliedTrainer?.email}</p>
  <p>Age : {appliedTrainer?.age}</p>
  <p>Skills : 
    <ul className="list-disc">
     {
      appliedTrainer?.skills.map((skill , index)=> <li key={index}>{skill}</li>)
     }
      </ul></p>
  <p>Available time in  week : <div className="flex">
    {
       appliedTrainer?.availableTimeWeek.map((day , index)=> <h1 key={index}>{day} ,</h1>)
    }
    </div></p>
  <p>Available in a day : {appliedTrainer?.availableFirstTimeDay}{appliedTrainer?.firstTimeFormat} - {appliedTrainer?.availableSecondTimeDay}{appliedTrainer?.secondTimeFormat}</p>
  <div className="flex gap-5 justify-center items-center">
      <button onClick={() => handleConfirmation(appliedTrainer?._id,appliedTrainer?.email)} className="btn">Confirmation</button>
      <button className="btn">Reject</button>
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
  </td>
 
</tr>)
}
</tbody>


</table>
</div>
    </div>
    );
};

export default AppliedTrainer;