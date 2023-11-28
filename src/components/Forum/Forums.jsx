import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useForums from "../../hooks/useForums";


const Forums = () => {
    const axiosPublic = useAxiosPublic();
    // const forum = useLoaderData();
    const [forum] = useForums()
   const  itemInPage = 1 ;
   const forumLength = forum?.length ;
    const page = Math.ceil(forumLength / itemInPage) ;
    const pages = [...Array(page).keys()];
    const [currentPage , setCurrentPage] = useState(0);
    const [forums , setForums] = useState([])
    console.log(pages);
    useEffect(() => {
        axiosPublic.get(`http://localhost:5000/newforums?page=${currentPage}&size=${itemInPage}`)
        .then(res => {
            const data = res?.data ;
            setForums(data)
        })
    },[currentPage,axiosPublic])
    return (
        <div className="my-10">
            <div className="flex justify-center items-center ">
                <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">Forums</h1>
            </div>
            <div className="py-20">
                {
                    forums?.map(forum => <div key={forum?._id} className="w-[80%] mx-auto">
                            <div className="flex gap-3 items-center ">
                                <div className="w-16 h-16">
                                    <img src={forum?.photoURL} alt="" />
                                </div>
                                <div className="font-medium">
                                    <h1>{forum?.name}</h1>
                                    <h1 className="font-bold">{forum?.role}</h1>
                                    <h1>{forum?.email}</h1>
                                </div>
                            </div>
                            <div className="text-xl font-normal py-4">
                                <h1 className="font-semibold text-2xl mb-1">Blog :</h1>
                                <p>{forum?.description}</p>
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
    );
};

export default Forums;