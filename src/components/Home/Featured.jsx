import { useEffect, useState } from "react";

const Featured = () => {
    const [featured , setFeatured] = useState();
     useEffect(() => {
        fetch("/feature.json")
        .then(res => res.json())
        .then(data => {
            setFeatured(data)
        })
    },[])
    return (
      <div className="w-[80%] mx-auto">
          <h1 className="text-primary w-fit mx-auto md:text-5xl text-4xl font-bold text-center flex my-20">---<h2 className=" border-4  p-2 border-primary rounded italic ">Feature</h2>---</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                 
{
    featured?.map(feature =>             <div key={feature?.feature} className="card text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl">
    <div className="card-body font-medium p-10">
      <h2 className="">{feature?.feature}</h2>
  
    </div>
  </div>)
}
            
        </div>
      </div>
    );
};

export default Featured;