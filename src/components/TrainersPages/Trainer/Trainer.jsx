import { Link } from "react-router-dom";


const Trainer = () => {
    return (
        <div>
              <div className="flex justify-center items-center">
                <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">Forums</h1>
            </div>
            <div className="flex justify-center items-center my-4">
                <Link to='/beatrainer' className="border-2 border-primary rounded px-4 py-2 text-primary hover:bg-primary hover:text-white transition-all bg-transparent duration-300">Become a Trainer</Link>
            </div>
        </div>
    );
};

export default Trainer;