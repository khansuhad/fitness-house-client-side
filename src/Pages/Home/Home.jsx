import { Helmet } from "react-helmet";
import Forums from "../../Pages/Forum/Forums";
import About from "./About/About";
import HomeBanner from "./HomeBanner/HomeBanner";
import NewsLetter from "./NewsLetter/NewsLetter";
import Trainer from "./Trainer/Trainer";
import AllClasses from "../Classes/AllClasses/AllClasses";
// import Stories from "./Stories/Stories";
import Featured from "./Featured/Featured";
import Review from "./Review/Review";
import Stories from "./Stories/Stories";


const Home = () => {
    return (
        <div>
                   <Helmet>
            <title> Fitness house | Home </title>
          </Helmet>
            <HomeBanner/>
            <Featured/>
            <About/>
            {/* <Stories/> */}
            {/* <Review/> */}
           {/* <div>
           <h1 className="text-primary w-fit mx-auto md:text-5xl text-4xl font-bold text-center flex">---<h2 className=" border-4  p-2 border-primary rounded italic ">Classes</h2>---</h1>
           <AllClasses/>
           </div> */}

            {/* <Forums/> */}
            <Trainer/>
            <NewsLetter/>
        </div>
    );
};

export default Home;