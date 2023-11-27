import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
const useTrainerClasses = ({email}) => {
    const axiosSecure = useAxiosSecure();
    const { data: trainerClasses = []  } = useQuery({
        queryKey: ['trainerClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/newclass/${email}`)
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [trainerClasses]
};

export default useTrainerClasses;