import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Navigate } from "react-router-dom";
import Container from "../../../Components/UI/Container/Container";

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
       <div className="py-10 lg:py-20 bg-fixed"  style={{backgroundImage: 'url(https://topfit.qodeinteractive.com/wp-content/uploads/2017/01/h4-parallax-3.jpg)'}}>
        <Container>
        <div className="" id="about">
               <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="font-bold bg-text-red px-3 py-2 text-center w-fit text-white  ">Newsletter</h2>
        <h6 className="text-3xl text-white">HEALTHY WAY TO LIVE</h6>
        </div>
            <div className="py-10 font-Montserrat">
                <form onSubmit={handleSubscribe}>
             <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[60%]  mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10  w-full mb-5">
             <input required type="text" name="name" placeholder="Your name" className="input bg-[white]/30 w-full text-white placeholder:text-[white] focus:outline-none" />
                <input required type="email"name="email" placeholder="Your email address" className="input bg-[white]/30 w-full text-white placeholder:text-[white] focus:outline-none" />
             </div>
            <div className="space-y-5 w-full">
            <input required type="tel" name="tel" placeholder="Your phone number" className="input bg-[white]/30 w-full text-white placeholder:text-[white] focus:outline-none" />
             <textarea name="Message" placeholder="Send your message..." className="textarea bg-[white]/30 w-full text-white placeholder:text-[white] focus:outline-none col-span-10 row-span-6"></textarea>
            </div>
             <button className=" mt-3 px-10 py-2 w-full rounded bg-orange-500 transition-all duration-700 border-none hover:bg-[red] hover:text-white hover:border-primary hover:border-4 text-white font-medium text-xl">Subscribe</button>
             </div>
                </form>
            </div>
        </div>
        </Container>
       </div>
    );
};

export default NewsLetter;