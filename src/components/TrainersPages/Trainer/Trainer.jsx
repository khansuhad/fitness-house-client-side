import { Link } from "react-router-dom";
import useTrainers from "../../../hooks/useTrainers";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Trainer = () => {
  const [trainers] = useTrainers();
  console.log(trainers);
  return (
    <div className="w-[80%] mx-auto pt-10">
            <Helmet>
            <title> Fitness house | Trainer </title>
          </Helmet>
      <div className="flex justify-center items-center my-10">
        <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">
          Trainers
        </h1>
      </div>
      <div className="flex justify-center items-center my-8">
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
            <div className="card   bg-[#F3F3F3] shadow-xl">
              <figure className="p-3">
                <img src={trainer?.image} alt="Shoes" className="w-40 h-40" />
              </figure>
              <div className="card-body p-4 ">
              <div>
              <a
                  href={trainer?.facebook}
                  target="blank"
                  className="text-4xl text-blue-900"
                >
                  <FaFacebook />
                </a>
              </div>
         
            <h2 className="card-title">Name : {trainer?.fullName}</h2>
                  <p className="text-lg">
                    Experience : {trainer?.experience} years
                  </p>
                
             
                <div className="flex gap-5">
                <Link
                  to={`/trainerdetails/${trainer?._id}`}
                  className="border-b-4 hover:border-none px-4 py-2 transition-all duration-500 border-black font-semibold w-fit  rounded my-2 hover:bg-primary hover:text-white"
                >
                  Know more...
                </Link>
                  <Link
                    to={`/trainer/availabletimslot/${trainer?.email}`}
                    className="border-b-4 hover:border-none px-4 py-2 transition-all duration-500 border-black font-semibold w-fit  rounded my-2 hover:bg-primary hover:text-white"
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
