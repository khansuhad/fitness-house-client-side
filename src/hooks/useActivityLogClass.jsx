import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useActivityLogClass = ({email}) => {
    const axiosSecure = useAxiosSecure();
    const { data: activityClass = []  } = useQuery({
        queryKey: ['activitylogclasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedclass/${email}`)
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [activityClass]
};

export default useActivityLogClass;