import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useBookedUser = ({email}) => {
    console.log(email);
    const axiosSecure = useAxiosSecure();
    const { data: bookedUser = []  } = useQuery({
        queryKey: ['bookedUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedclasses/allemail/${email}`)
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [bookedUser]
};

export default useBookedUser;