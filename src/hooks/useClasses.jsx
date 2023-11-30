import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useClasses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classes = []  } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/newclass')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [classes]
};

export default useClasses;