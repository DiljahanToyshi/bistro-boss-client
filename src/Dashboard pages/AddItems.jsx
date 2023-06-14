import Title from "../Layout/Pages/Home/SectionTitle/Title";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit, reset
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


  const onSubmit = (data) => {
    const formData = new FormData();
formData.append('image', data.image[0])

fetch(img_hosting_url,{
    method:'POST',
    body:formData
})
.then(res => res.json())
.then(imgResponse =>{
    if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name,category,price,recipe} = data;
        const newItem = { name, category, price: parseFloat(price), recipe ,imgae:imgURL};
        console.log(newItem);
        axiosSecure.post('/menu',newItem)
        .then(data => {
            if (data.data.insertedId) {
              reset();
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
                title: "Item Added successfully",
              });
            }
        })
    }
})
};
  return (
    <div className="w-full md:px-14">
      <Title subHeading="What's new" heading="Add an item"></Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            {...register("name", { required: true, maxLength: 80 })}
            type="text"
            placeholder="recipe name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex">
          <div className="form-control w-full mr-6">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Drinks</option>
              <option>Salad</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full  max-w-xs">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-small mt-4" type="submit" value="Add Item" />
      </form>
      
    </div>
  );
};

export default AddItems;
