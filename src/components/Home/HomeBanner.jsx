import { Link } from "react-router-dom";


const HomeBanner = () => {
    return (
        <div className="mb-20 ">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to="/classes" className=" px-10 py-2  rounded bg-primary transition-all duration-700 border-none hover:bg-bgShade hover:text-body text-white font-medium text-xl">Classes</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeBanner;