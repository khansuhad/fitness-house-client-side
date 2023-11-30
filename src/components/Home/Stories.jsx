import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";



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
        axiosPublic.get(`http://localhost:5000/newstories?page=${currentPage}&size=${itemInPage}`)
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
                    stories?.map(story => <div key={story?._id} className="w-[80%] mx-auto">
                            <div className="flex gap-3 items-center ">
                                <div className="w-16 h-16">
                                    <img src={story?.photoURL} alt="" className="rounded-full" />
                                </div>
                                <div className="font-medium">
                                    <h1>{story?.name}</h1>
                                    <h1>{story?.email}</h1>
                                </div>
                            </div>
                            <div className="text-xl font-normal py-4 text-left">
                                <p>{story?.description}</p>
                            </div>
                            <div className="divider"></div>
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