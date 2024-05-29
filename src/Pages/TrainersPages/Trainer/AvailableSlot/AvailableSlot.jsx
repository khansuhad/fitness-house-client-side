import { Link, useParams } from "react-router-dom";
import useTrainerClasses from "../../../../hooks/useTrainerClasses";
import { Helmet } from "react-helmet";
import { useEffect } from "react";


const AvailableSlot = () => {
    const params = useParams();
    const email = params?.id;
    const [trainerClasses] = useTrainerClasses({email});
    useEffect(() => {
      if(!trainerClasses){
        return <div className="h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>
      }
    },[trainerClasses])
    return (
       <div className="py-10">
         <div className="grid grid-cols-4 gap-5 w-[80%] mx-auto mt-20">
                <Helmet>
            <title> Fitness house | Available Slot </title>
          </Helmet>
            {
                trainerClasses?.map(trainerClass => <div key={trainerClass._id}>
                    <div className={`card ${trainerClass?.plan === 'Silver' && 'bg-slate-400 text-black'} ${trainerClass?.plan === 'Diamond' && 'bg-[#EEE2DE] text-black'} ${trainerClass?.plan === 'Gold' && 'bg-[#F5CCA0] text-black'}  shadow-xl`}>
  <div className="card-body flex flex-col gap-3 justify-center text-center py-10">
    <h2 className="">{trainerClass?.classType}</h2>
    <p>{trainerClass?.plan}</p>
  
      <Link to={`/availableslot/${trainerClass?._id}`} className="btn btn-primary">Plan Details</Link>
   
  </div>
</div>
                </div>)
            }
        </div>
       </div>
    );
};

export default AvailableSlot;