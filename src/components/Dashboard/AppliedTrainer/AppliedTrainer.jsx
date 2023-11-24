import { FaEye } from "react-icons/fa";

const AppliedTrainer = () => {
    return (
        <div className="bg-navmenu min-h-screen p-10">
        <div className="flex justify-center">
            <h1 className="text-4xl font-semibold text-primary italic">All Applied Trainers : 100 </h1>
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
  <tr className="text-xl text-black">
    <th>
    <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
    </th>
    <td>
        <div>
          <div className="font-bold">suhad</div>
        </div>
    
    </td>
    <td>
   <h1>suhadahmodkhan@gmail.com</h1>
    </td>
    <td>
    
<button className="btn bg-primary text-dashmenu text-xl" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaEye/></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name</h2>
    <p>Email</p>
    <p>Age</p>
    <p>skills</p>
    <p>Available in a week</p>
    <p>Available in a day</p>
    <div className="flex gap-5 justify-center items-center">
        <button className="btn">Confirm</button>
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
   
  </tr>
</tbody>


</table>
</div>
    </div>
    );
};

export default AppliedTrainer;