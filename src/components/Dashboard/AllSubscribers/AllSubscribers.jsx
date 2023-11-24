const AllSubscribers = () => {
    return (
        <div className="bg-navmenu min-h-screen p-10">
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-primary italic">All Subscribers : 100 </h1>
            </div>
                 <div className="overflow-x-auto flex justify-center mt-10">
  <table className="table text-2xl ">
    {/* head */}
    <thead>
      <tr className="text-2xl text-black">
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
    //   allBids?.map( bid => 
       <tr className="text-xl font-semibold" >
        <td>
          <div className="flex items-center space-x-3">
          
            <div>
              <div className="font-bold">Suhad</div>
             
            </div>
          </div>
        </td>
        <td>
         <h1>suhadahmodkhan@gmail.com</h1>
          
        </td>
        
      </tr> 
    }
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default AllSubscribers;