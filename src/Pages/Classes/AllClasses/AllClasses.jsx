import { Link } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";



const AllClasses = () => {
    const [classes] = useClasses();
    console.log(classes);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto mt-20">
        {
            classes?.map(Class => <div key={Class._id}>
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

export default AllClasses;