import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Navigate } from "react-router-dom";

// import useAxiosPublic from "../../hooks/useAxiosPublic";

const NewsLetter = () => {
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();

    const handleSubscribe = (e) => {
        e.preventDefault();
    const form = e.target ;
    const name = form.name.value;
    const email = form.email.value ;
    const subscribeForm = {name , email}

    axiosSecure.post('/subscribers' , subscribeForm)
        .then(res => {
            e.target.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "subscribe successfully",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(res?.data);
              Navigate('/')
        })

    }

    return (
        <div className="lg:mx-12 mx-4 mt-40 py-10" id="about">
            <h1 className="text-primary w-fit mx-auto md:text-5xl text-4xl font-bold text-center flex">---<h2 className=" border-4  p-2 border-primary rounded italic ">News letter </h2>---</h1>
            <div className="py-10">
                <form onSubmit={handleSubscribe}>
             <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[60%]  mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10  w-full mb-5">
             <input required type="text" name="name" placeholder="Type your name..." className="input input-bordered border-primary w-full " />
                <input required type="email"name="email" placeholder="Type your email address..." className="input input-bordered border-primary  w-full" />
             </div>
             <button className=" px-10 py-2 w-full rounded bg-primary transition-all duration-700 border-none hover:bg-dribble hover:text-white hover:border-primary hover:border-4 text-white font-medium text-xl">Subscribe</button>
             </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;