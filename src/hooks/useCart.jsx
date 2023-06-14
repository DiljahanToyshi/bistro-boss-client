import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
     const { refetch, data: cart = [] } = useQuery({
       queryKey: ['cart', user?.email],
       enabled:!loading,
     
       queryFn: async () =>{
        const response = await axiosSecure(`/carts?email=${user?.email}`)
        return response.data;
       },
     });
    return [cart,refetch]
};

export default useCart;