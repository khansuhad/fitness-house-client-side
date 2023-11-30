import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainers = () => {
 const axiosPublic =   useAxiosPublic();
    const { data: trainers = []  } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainers')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [trainers]
};

export default useTrainers;