import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useSubscribers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: subscribers = []  } = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/subscribers')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [subscribers]
};

export default useSubscribers;