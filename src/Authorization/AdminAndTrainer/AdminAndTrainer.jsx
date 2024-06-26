import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const AdminAndTrainerRoute = ({children}) => {
    const { user , loader} = useContext(AuthContext);
const [isUser , isUserLoading] = useUser();

    if(loader || isUserLoading){
      return  <div className="h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user && ( isUser === 'admin' || isUser === 'trainer' )){
        return children;
    }
    return (
   
       <Navigate to='/login'></Navigate>
    );
};

export default AdminAndTrainerRoute;