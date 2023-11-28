import { Helmet } from "react-helmet";
import WeekDef from "./WeekDef";
import BeATrainerPage from "./someething";


const BeATrainer = () => {
    return (
        <div>
                  <Helmet>
            <title> Fitness house | Be a Trainer </title>
          </Helmet>
            <BeATrainerPage/>
        </div>
    );
};

export default BeATrainer;