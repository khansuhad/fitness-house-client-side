import { Link } from "react-router-dom";
import useRecommandedClass from "../../../hooks/useRecommandedClass";
import { Helmet } from "react-helmet";

const RecommandedClass = () => {
    const [recommendedClass]  = useRecommandedClass();
    console.log(recommendedClass);
    return (
        <div className="grid grid-cols-4 gap-5 w-[80%] mx-auto mt-20">
                  <Helmet>
            <title> Fitness house | Recommanded Class </title>
          </Helmet>
        {
            recommendedClass?.map(Class => <div key={Class._id}>
                     <div className={`card ${Class?.plan === 'Silver' && 'bg-slate-400 text-black'} ${Class?.plan === 'Diamond' && 'bg-[#EEE2DE] text-black'} ${Class?.plan === 'Gold' && 'bg-[#F5CCA0] text-black'}  shadow-xl`}>
<div className="card-body   justify-center text-center py-10">
<h2 className="font-semibold text-xl">Class : {Class?.classType}</h2>
<p className="font-medium text-lg">Plan : {Class?.plan}</p>
<div className="mt-4">
  <Link to={`/class/details/${Class?._id}`} className="bg-[#860A35]  px-4 py-2 rounded hover:bg-body transition-all duration-700 text-xl font-medium text-white">Plan Details</Link>
</div>
</div>
</div>
            </div>)
        }
    </div>
    );
};

export default RecommandedClass;