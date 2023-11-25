import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useForums = () => {

    const axiosSecure = useAxiosSecure();
    const { data: forums = []  } = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
            const res = await axiosSecure.get('/forums')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [forums]
};

export default useForums;