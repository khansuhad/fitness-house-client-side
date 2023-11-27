import Forums from "../Forum/Forums";
import About from "./About";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";
import Trainer from "./Trainer";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <About/>
            <Forums/>
            <Trainer/>
            <NewsLetter/>
        </div>
    );
};

export default Home;