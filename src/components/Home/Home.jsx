import { Helmet } from "react-helmet";
import Forums from "../Forum/Forums";
import About from "./About";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";
import Trainer from "./Trainer";
import AllClasses from "../Classes/AllClasses";
import Stories from "./Stories";


const Home = () => {
    return (
        <div>
                   <Helmet>
            <title> Fitness house | Home </title>
          </Helmet>
            <HomeBanner/>
            <About/>
            <Stories/>
           <div>
           <h1 className="text-primary w-fit mx-auto md:text-5xl text-4xl font-bold text-center flex">---<h2 className=" border-4  p-2 border-primary rounded italic ">Classes</h2>---</h1>
           <AllClasses/>
           </div>

            <Forums/>
            <Trainer/>
            <NewsLetter/>
        </div>
    );
};

export default Home;