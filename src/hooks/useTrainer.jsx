import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTrainer = ({email}) => {
    const axiosSecure = useAxiosSecure();
    const { data: trainer = {}  } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainers/${email}`)
            console.log(res?.data);
            return res?.data ;
        }
    })
    return [trainer]
};

export default useTrainer;