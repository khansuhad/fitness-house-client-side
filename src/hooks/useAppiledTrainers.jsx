import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAppiledTrainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: appliedTrainers = []  } = useQuery({
        queryKey: ['appliedTrainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appliedtrainers')
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [appliedTrainers]
};

export default useAppiledTrainers;