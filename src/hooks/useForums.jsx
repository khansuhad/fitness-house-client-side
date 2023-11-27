import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useForums = () => {

    const axiosPublic = useAxiosPublic();
    const { data: forums = []  } = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
            const res = await axiosPublic.get('/newforums')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [forums]
};

export default useForums;