import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaQuoteRight } from "react-icons/fa";
import Rating from "react-rating";



const Stories = () => {
    const axiosPublic = useAxiosPublic();
    const [stories , setStories] = useState([])
   const  itemInPage = 3 ;
   const storiesLength = stories?.length ;
    const page = Math.ceil(storiesLength / itemInPage) ;
    const pages = [...Array(page).keys()];
    const [currentPage , setCurrentPage] = useState(0);
    console.log(pages);
    useEffect(() => {
        axiosPublic.get(`/newstories?page=${currentPage}&size=${itemInPage}`)
        .then(res => {
            const data = res?.data ;
            setStories(data)
        })
    },[currentPage,axiosPublic])

    return (
        <div className="py-10">
            <div className="my-10 ">
            <div className="flex justify-center items-center ">
                <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">Stories</h1>
            </div>
            <div className="py-20">
                {
                    stories?.map(story =><div className=" lg:w-[300px] p-3" key={story?._id} >
                            
                    <div className="bg-white p-3  hover:shadow-2xl  rounded-lg space-y-4 relative " 
                   >
          <div className="absolute -top-3"><figure className={` shadow-md p-1 flex justify-center items-center rounded-lg w-8 h-8`}><FaQuoteRight/></figure></div>
          <Rating
              emptySymbol={
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 26 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-[2px]"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.395 0.803223L16.3222 9.81243H25.7951L18.1314 15.3804L21.0587 24.3896L13.395 18.8216L5.73129 24.3896L8.65856 15.3804L0.994872 9.81243H10.4677L13.395 0.803223Z"
                  />
                  </svg>
              }
              fullSymbol={
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mx-[2px]"
                  >
                  <path
                      fillRule="evenodd"
                      d="M13.395 0.803223L16.3222 9.81243H25.7951L18.1314 15.3804L21.0587 24.3896L13.395 18.8216L5.73129 24.3896L8.65856 15.3804L0.994872 9.81243H10.4677L13.395 0.803223Z"
                      clipRule="evenodd"
                  />
                  </svg>
              }
              initialRating={3.5}
              readonly
          />
<p className="text-[#4F4F4F]">  &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. &rdquo;</p>

                 
                    <div className="review">
                    <progress className="progress  h-[1px]" value="30" max="100"></progress>
                    </div>
                    
                      <div className="mt-10 flex gap-5 items-center ">
                          <div><figure><img src={story?.photoURL} alt="" /></figure></div>
                          <div>
                              <h5 className="font-semibold">Sintia Khan</h5>
                              <p className="uppercase font-medium text-[#808080]">Freelancer</p>
                          </div>
                      </div>

          </div>
                       
                    </div>)
                }
            </div>
            <div className="pagination flex justify-center items-center gap-1"> 
            {
                pages?.map((page , index) => <button
                className={`${currentPage === page ? 'selected' : undefined } py-2 px-4 text-lg rounded bg-black text-white`}
                onClick={() => setCurrentPage(page)}
                 key={page}>{index + 1}</button>)
            }  </div>
        </div>
        </div>
    );
};

export default Stories;