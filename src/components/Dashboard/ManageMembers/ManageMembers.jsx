import { useContext, useEffect, useState } from "react";
import useBookedUser from "../../../hooks/useBookedUser";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const ManageMembers = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email ;
    const [bookedUser] = useBookedUser({email});
    const [uniqueArray, setUniqueArray] = useState([]);

    useEffect(() => {
        if (bookedUser && bookedUser.length > 0) {
          const uniqueEmailsMap = new Map();
          bookedUser.forEach(item => {
            uniqueEmailsMap.set(item.bookedUser.email, item);
          });
          const uniqueArrayResult = Array.from(uniqueEmailsMap.values());
    
          setUniqueArray(uniqueArrayResult);
        }
      }, [bookedUser]);
    
    console.log(uniqueArray);
    return (
        <div className="bg-navmenu min-h-screen p-10">
        <div className="flex justify-center">
            <h1 className="text-4xl font-semibold text-primary italic">All users : {bookedUser?.length} </h1>
        </div>
        <div className="overflow-x-auto mt-10">
<table className="table">
{/* head */}
<thead>
  <tr className="text-2xl text-black">
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Send Email</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
 {
  uniqueArray?.map(user =>  <tr key={user?._id} className="text-xl text-black">
  <th>
  <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={user?.bookedUser?.image} />
        </div>
      </div>
  </th>
  <td>
      <div>
        <div className="font-bold">{user?.bookedUser?.name}</div>
      </div>
  
  </td>
  <td>
 <h1>{user?.bookedUser?.email}</h1>
  </td>
  <td>
      <h1>unpaid</h1>
  </td>
 
</tr>)
 }
</tbody>


</table>
</div>
    </div>
    );
};

export default ManageMembers;