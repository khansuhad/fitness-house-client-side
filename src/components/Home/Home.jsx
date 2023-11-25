import Forums from "../Forum/Forums";
import About from "./About";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <About/>
            <Forums/>
            <NewsLetter/>
        </div>
    );
};

export default Home;