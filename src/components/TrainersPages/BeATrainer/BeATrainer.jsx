import { Helmet } from "react-helmet";
import BeATrainerPage from "./BeATrainerPage";


const BeATrainer = () => {
    return (
        <div className="py-10">
                  <Helmet>
            <title> Fitness house | Be a Trainer </title>
          </Helmet>
            <BeATrainerPage/>
        </div>
    );
};

export default BeATrainer;