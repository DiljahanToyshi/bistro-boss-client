import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddtoCart = (item) => {
    console.log(item);
      if(!user) {
            Swal.fire({
              icon: "error",
              title: "Oops...Please login Now!",
             
            });
            navigate("/login", { state: { from: location } });
          }

    if (user && user.email) {
      const orderItem = {menuItemId: _id, name,image,price,email:user.email};
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch cart to update the number of item in cart
            refetch();    
            const Toast = Swal.mixin({
              toast: true,
              position: "top-center",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Your order has been placed successfully",
            });
          }

         
        });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="p-5 rounded-md" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="absolute right-0 mr-4 mt-4 bg-slate-800 text-white p-1 rounded-md top-4 px-2">
          {" "}
          {price}$
        </p>
        <p> {recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4 hover:bg-orange-400"
          >
            Add to Cart
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
