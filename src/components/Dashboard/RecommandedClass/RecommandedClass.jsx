import { Link } from "react-router-dom";
import useRecommandedClass from "../../../hooks/useRecommandedClass";

const RecommandedClass = () => {
    const [recommendedClass]  = useRecommandedClass();
    console.log(recommendedClass);
    return (
        <div className="grid grid-cols-4 gap-5 w-[80%] mx-auto mt-20">
        {
            recommendedClass?.map(Class => <div key={Class._id}>
                <div className="card bg-base-100 shadow-xl">
<div className="card-body flex flex-col gap-3 justify-center text-center py-10">
<h2 className="">{Class?.classType}</h2>
<p>{Class?.plan}</p>
<div className="">
  <Link to={`/class/details/${Class?._id}`} className="btn btn-primary">Plan Details</Link>
</div>
</div>
</div>
            </div>)
        }
    </div>
    );
};

export default RecommandedClass;