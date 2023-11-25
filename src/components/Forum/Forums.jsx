import useForums from "../../hooks/useForums";


const Forums = () => {
    const [forums] = useForums();
    console.log(forums);
    return (
        <div>
            <div className="flex justify-center items-center">
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
        </div>
    );
};

export default Forums;