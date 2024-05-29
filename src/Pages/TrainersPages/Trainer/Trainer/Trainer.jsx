import { Link } from "react-router-dom";
import useTrainers from "../../../../hooks/useTrainers";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Container from "../../../../Components/UI/Container/Container";

const Trainer = () => {
  const [trainers] = useTrainers();
  console.log(trainers);
  useEffect(() => {
    if(!trainers){
      return <div className="h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
  },[trainers])
  return (
   <div className="py-10 lg:py-20">
    <Container>
    <div className="">
            <Helmet>
            <title> Fitness house | Trainer </title>
          </Helmet>
      <div className="flex justify-center items-center my-10">
      <div className="flex justify-center items-center">
        <h2 className="font-bold bg-text-red px-3 py-2 text-center w-fit text-white  ">Tainers</h2>
        </div>
      </div>
      <div className="flex justify-center items-center my-8">
        <Link
          to="/beatrainer"
          className="border-2 border-[red] rounded px-4 py-2 text-[red] hover:bg-[red] hover:text-white transition-all bg-transparent duration-300"
        >
          Become a Trainer
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10 ">
        {trainers?.map((trainer) => (
       <div key={trainer?._id}>
       <div className="  bg-white shadow hover:shadow-2xl">
         <figure className="p-3 bg-red-400 flex justify-center items-center">
           <img src={trainer?.image} alt="Shoes" className="w-40 h-40 rounded-full" />
         </figure>
         <div className=" p-4">
           <h2 className="text-center "> {trainer?.fullName}</h2>
           <p className="text-lg text-center ">
               Experience : {trainer?.experience} years
             </p>
         
           <div className="flex gap-5 justify-center items-center">
           <Link
             to={`/trainerdetails/${trainer?._id}`}
             className="bg-[red] hover:bg-[#c52e2e] transition-all duration-200 border-2 border-[red]  font-semibold w-fit px-3 py-2 text-white"
           >
             Know More
           </Link>
             <Link
               to={`/trainer/availabletimslot/${trainer?.email}`}
               className=" bg-white border-2 border-[red] hover:text-white hover:bg-[red]  transition-all duration-200  text-black px-3 py-2"
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
    </Container>
   </div>
  );
};

export default Trainer;
