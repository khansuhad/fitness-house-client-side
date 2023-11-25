import About from "./About";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <About/>
            <NewsLetter/>
        </div>
    );
};

export default Home;