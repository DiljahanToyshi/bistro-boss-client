/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const userAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
       queryKey: ['isAdmin', user?.email],
       queryFn: async () =>{
        const response = await axiosSecure.get(`/users/admin/${user?.email}`)
        return response.data.admin;
       },
    })
    return [isAdmin, isAdminLoading];
};

export default userAdmin;