import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Layout/Pages/Home/SectionTitle/Title";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=>sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
      <div className="w-full">
        <Title subHeading="Please process" heading="PAYMENT"></Title>
        <h2>paymet</h2>
        <Elements stripe={stripePromise}>
          {" "}
          <CheckOut price={price}></CheckOut>
        </Elements>
      </div>
    );
};

export default Payment;