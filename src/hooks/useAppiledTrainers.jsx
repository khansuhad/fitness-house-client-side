import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAppiledTrainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: appliendTrainers = []  } = useQuery({
        queryKey: ['appliendTrainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appliedtrainers')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [appliendTrainers]
};

export default useAppiledTrainers;