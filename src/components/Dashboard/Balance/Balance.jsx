import { Helmet } from "react-helmet";


const Balance = () => {
    return (
        <div className="bg-navmenu min-h-screen p-10">
                  <Helmet>
            <title> Fitness house | Balance </title>
          </Helmet>
            <div className="flex justify-center text-5xl font-semibold text-primary italic my-10">Balance</div>
             <div className="flex justify-between">
                <h1 className="text-4xl font-semibold text-primary italic">Total Remaining Balance : 100 </h1>
                <h1 className="text-4xl font-semibold text-primary italic">Total Payment : 100 </h1>
                
            </div>
        </div>
    );
};

export default Balance;