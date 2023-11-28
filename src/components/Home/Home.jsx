import { Helmet } from "react-helmet";
import Forums from "../Forum/Forums";
import About from "./About";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";
import Trainer from "./Trainer";
import AllClasses from "../Classes/AllClasses";


const Home = () => {
    return (
        <div>
                   <Helmet>
            <title> Fitness house | Home </title>
          </Helmet>
            <HomeBanner/>
            <About/>
            <AllClasses/>
            <Forums/>
            <Trainer/>
            <NewsLetter/>
        </div>
    );
};

export default Home;