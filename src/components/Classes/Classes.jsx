import { Helmet } from "react-helmet";
import AllClasses from "./AllClasses";


const Classes = () => {
    return (
        <div>
                  <Helmet>
            <title> Fitness house | Classes </title>
          </Helmet>
            <AllClasses/>
        </div>
    );
};

export default Classes;