import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const schema = yup.object().shape({
    name: yup.string().required("Field Name is required"),
    email: yup.string().email().required("Email is required"),
    payment: yup.string().required("Select payment methods"),
    number: yup.string().required ("Insert Credit Card Number"),
    cvv : yup.string().required("Insert CVV number")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  

  const onSubmitForm = (data) => {
    axios.get('http://localhost:8000/wishlist')
      .then(response => {
        const productData = response.data.flatMap(wishlist => wishlist.products); 
        const totalPrice = productData.reduce((total, product) => total + product.price, 0);
  
        const payload = {
          customerName: data.name,
          customerEmail: data.email,
          paymentOption: data.payment,
          creditNumber: data.number,
          cvv: data.cvv,
          products: productData,
          total: totalPrice 
        };
  
        axios
          .post("http://localhost:8000/booking", payload)
          .then(() => {
            alert("Successfully made a new booking!");
            navigate('/home');
            reset();
          })
          .catch((error) => console.log(error));
      })
      .catch(error => console.error(error));
  };
  
  

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Shipping Details</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("name")}
                id="name"
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("email")}
                id="email"
              />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div>
              <label htmlFor="payment">Payment Option</label>
              <select
                placeholder="payment"
                className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-200 text-gray-600 sm:text-sm"
                {...register("payment")}
                id="payment"
              >
                <option value="">Select Payment Option</option>
                <option value="MasterCard">MasterCard</option>
                <option value="BNICard">BNICard</option>
                <option value="Visa">Visa</option>
              </select>
              <p className="error">{errors.payment?.message}</p>
            </div>

            <div>
              <label htmlFor="number">Credit Card Number</label>
              <input
              placeholder="Credit card number insert here"
              className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
              {...register("number")}
              id="number" />

            </div>

            <div>
              <label htmlFor="cvv number">CVV</label>
              <input
              placeholder="cvv number"
              className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
              {...register("cvv")}
              id="cvv" />
              <p className="error">{errors.cvv?.message}</p>
            </div>
          

            <button
              className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
              type="submit"
            >
              Purchase
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;