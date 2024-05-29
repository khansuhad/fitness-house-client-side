import { Helmet } from "react-helmet";
import AllClasses from "./AllClasses/AllClasses";


const Classes = () => {
    return (
        <div className="py-10">
                  <Helmet>
            <title> Fitness house | Classes </title>
          </Helmet>
          <div className="flex justify-center items-center ">
                <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">Classes</h1>
            </div>
            <AllClasses/>
        </div>
    );
};

export default Classes;