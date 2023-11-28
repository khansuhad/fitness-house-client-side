import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const ClassDetails = () => {
    const classDetails = useLoaderData();
    console.log(classDetails);
    return (
        <div className="w-[40%] mx-auto">
                  <Helmet>
            <title> Fitness house | Class Details </title>
          </Helmet>
                    <h1 className="font-semibold">Class : {classDetails?.classType}</h1>
            <p>Plan : {classDetails?.plan}</p>
<p>Trainer Email : {classDetails?.trainerInfo?.email}</p>
<p>Class Description : <br/>
     {classDetails?.classDescription}</p>
     <Link to="/trainer" className="btn  bg-primary text-white hover:text-black">Trainer Page</Link>
        </div>
    );
};

export default ClassDetails;