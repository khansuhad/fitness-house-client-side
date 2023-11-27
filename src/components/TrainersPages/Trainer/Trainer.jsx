import { Link } from "react-router-dom";
import useTrainers from "../../../hooks/useTrainers";
import { FaFacebook } from "react-icons/fa";

const Trainer = () => {
  const [trainers] = useTrainers();
  console.log(trainers);
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">
          Forums
        </h1>
      </div>
      <div className="flex justify-center items-center my-4">
        <Link
          to="/beatrainer"
          className="border-2 border-primary rounded px-4 py-2 text-primary hover:bg-primary hover:text-white transition-all bg-transparent duration-300"
        >
          Become a Trainer
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10 ">
        {trainers?.map((trainer) => (
          <div key={trainer?._id}>
            <div className="card card-compact  bg-base-100 shadow-xl">
              <figure className="p-3">
                <img src={trainer?.image} alt="Shoes" className="w-40 h-40" />
              </figure>
              <div className="card-body p-4">
                <a
                  href={trainer?.facebook}
                  target="blank"
                  className="text-4xl text-blue-900"
                >
                  <FaFacebook />
                </a>
                <h2 className="card-title">Name : {trainer?.fullName}</h2>
                <div className="flex items-center justify-between">
                  <p className="text-lg">
                    Experience : {trainer?.experience} years
                  </p>
                </div>
                <Link
                  to={`/trainerdetails/${trainer?._id}`}
                  className="border-b-2 border-black font-semibold w-fit text-xl"
                >
                  Know more...
                </Link>
                <div className="">
                  <Link
                    to={`/trainer/availabletimslot/${trainer?.email}`}
                    className="btn bg-[#860A35] hover:text-black text-white"
                  >
                    Available Time Slot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
