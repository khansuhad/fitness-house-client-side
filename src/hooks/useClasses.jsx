import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { data: classes = []  } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/newclass')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [classes]
};

export default useClasses;