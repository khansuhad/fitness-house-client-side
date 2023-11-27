import useTrainers from "../../../hooks/useTrainers";


const AllTrainers = () => {
  const [trainers] = useTrainers();
    return (
        <div className="bg-navmenu min-h-screen p-10">
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-primary italic">All Trainers : {trainers?.length} </h1>
            </div>
            <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-2xl text-black">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Pay Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      trainers?.map(trainer =>  <tr key={trainer?._id} className="text-xl text-black">
      <th>
      <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={trainer?.image} />
            </div>
          </div>
      </th>
      <td>
          <div>
            <div className="font-bold">{trainer?.fullName}</div>
          </div>
      
      </td>
      <td>
     <h1>{trainer?.email}</h1>
      </td>
      <td>
          <h1> unpaid</h1>
      </td>
     
    </tr>)
     }
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AllTrainers;