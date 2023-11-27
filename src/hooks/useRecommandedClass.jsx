import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRecommandedClass = () => {
    const axiosSecure = useAxiosSecure();
    const { data: recommendedClass = []  } = useQuery({
        queryKey: ['recommendedClass'],
        queryFn: async () => {
            const res = await axiosSecure.get('/newclass/recommanded/class/dashboard')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [recommendedClass]
};

export default useRecommandedClass;