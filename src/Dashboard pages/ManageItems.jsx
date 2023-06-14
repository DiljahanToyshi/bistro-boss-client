

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
 import Title from '../Layout/Pages/Home/SectionTitle/Title';
import useMenu from "../hooks/useMenu";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageItems = () => {
const [menu, ,refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/menu/${item._id}`)
         .then((res) =>  {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Item has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
   
        <Title subHeading="Hurry Up" heading="Manage All items"></Title>
      
      <div className="uppercase font-semibold text-center">
        <p className="text-3xl">Total Items: {menu.length}</p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td></td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-xl p-0 px-2 text-white h-1 bg-red-500"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
