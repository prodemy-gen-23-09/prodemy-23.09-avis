import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function CheckoutPage() {
  const schema = yup.object().shape({
    name: yup.string().required("Field Name is required"),
    email: yup.string().email().required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);

    const payload = {
      customerName: data.name,
      customerEmail: data.email,
      customerCity: data.city,
      delivery: data.delivery,
      wrap: data.wrap,
    };

    axios
      .post(" http://localhost:8000/booking", payload)
      .then(() => {
        alert("Successfully made a new booking!");
        reset();
      })
      .catch((error) => console.log(error));
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
              <label htmlFor="city">City</label>
              <select
                placeholder="City"
                className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
                {...register("city")}
                id="city"
              >
                <option value="">Please select</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
              </select>
            </div>

            <div className="flex gap-8">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="sameday"
                  {...register("delivery")}
                  value="sameday"
                />
                <label htmlFor="sameday">Same Day</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="regular"
                  {...register("delivery")}
                  value="regular"
                />
                <label htmlFor="regular">Regular</label>
              </div>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" {...register("wrap")} id="wrap" />
              <label htmlFor="wrap">Extra Wrap</label>
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
