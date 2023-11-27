import { Link, useParams } from "react-router-dom";
import useTrainers from "../../../hooks/useTrainers";
import useTrainerClasses from "../../../hooks/useTrainerClasses";


const AvailableSlot = () => {
    const params = useParams();
    const email = params?.id;
    const [trainerClasses] = useTrainerClasses({email});

    return (
        <div className="grid grid-cols-4 gap-5 w-[80%] mx-auto mt-20">
            {
                trainerClasses?.map(trainerClass => <div key={trainerClass._id}>
                    <div className="card bg-base-100 shadow-xl">
  <div className="card-body flex flex-col gap-3 justify-center text-center py-10">
    <h2 className="">{trainerClass?.classType}</h2>
    <p>{trainerClass?.plan}</p>
    <div className="">
      <Link to={`/availableslot/${trainerClass?._id}`} className="btn btn-primary">Plan Details</Link>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default AvailableSlot;