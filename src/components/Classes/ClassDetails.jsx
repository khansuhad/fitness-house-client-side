import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const ClassDetails = () => {
    const classDetails = useLoaderData();
    console.log(classDetails);
    return (
<div className="py-10">
<div className="w-[40%] mx-auto border-2 border-primary rounded pl-10 py-10 mt-10 bg-white">
                  <Helmet>
            <title> Fitness house | Class Details </title>
          </Helmet>
                    <h1 className="font-semibold text-2xl ">Class : {classDetails?.classType}</h1>
            <p className="text-xl mt-1">Plan : {classDetails?.plan}</p>
<p className="text-xl mt-1" >Trainer Email : {classDetails?.trainerInfo?.email}</p>
<p className="text-xl mt-1">Class Description : <br/>
     </p>
     <p className="text-xl my-5">{classDetails?.classDescription}</p>
     <Link to="/trainer" className="btn  bg-primary text-white hover:text-black mt-7">Trainer Page</Link>
        </div>
</div>
    );
};

export default ClassDetails;