import { useContext } from "react";
import useBookedClasses from "../../../hooks/useBookedClasses";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ManageSlots = () => {
    const {user } = useContext(AuthContext)
    const email = user?.email ;
    const [bookedClasses] = useBookedClasses({email})
    console.log(bookedClasses);
    return (
        <div>
            
        </div>
    );
};

export default ManageSlots;