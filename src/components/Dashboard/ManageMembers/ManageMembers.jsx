import { useContext, useEffect, useState } from "react";
import useBookedUser from "../../../hooks/useBookedUser";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useUsers from "../../../hooks/useUsers";
import { Helmet } from "react-helmet";


const ManageMembers = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email ;
    const [users] = useUsers();
    const [bookedUser] = useBookedUser({email});
    const [uniqueArray, setUniqueArray] = useState([]);
  console.log(bookedUser );
  console.log(users );
  
    useEffect(() => {
        const emailsInArray2 = bookedUser.map((obj) => obj?.bookedUser?.email);
console.log(emailsInArray2);

        const newArray = users.filter((obj) => emailsInArray2.includes(obj.email));
        
        console.log(newArray);
        setUniqueArray(newArray);
       
      }, [bookedUser, users]);
    
    
    return (
        <div className="bg-navmenu min-h-screen p-10">
                <Helmet>
            <title> Fitness house | Manage Member </title>
          </Helmet>
        <div className="flex justify-center">
            <h1 className="text-4xl font-semibold text-primary italic">All users : {uniqueArray?.length} </h1>
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
          <img src={user?.image} />
        </div>
      </div>
  </th>
  <td>
      <div>
        <div className="font-bold">{user?.name}</div>
      </div>
  
  </td>
  <td>
 <h1>{user?.email}</h1>
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