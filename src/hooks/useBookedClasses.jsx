import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useBookedClasses = ({email}) => {
    console.log(email);
    const axiosSecure = useAxiosSecure();
    const { data: bookedClasses = []  } = useQuery({
        queryKey: ['bookedClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedclasses/${email}`)
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [bookedClasses]
};

export default useBookedClasses;