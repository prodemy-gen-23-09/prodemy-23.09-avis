import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function OneState() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "Jakarta",
    delivery: "regular",
    wrap: false,
    password: "",
  });

  const navigate = useNavigate();


  const onChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const onSubmitForm = (e) => {
    e.preventDefault();
  
    const payload = {
      ...formData,
      id: Date.now(),
    };

    axios
      .post("http://localhost:8000/booking", payload)
      .then(() => {
        alert("Successfully Signed-Up!");
        setFormData({
          name: "",
          email: "",
          city: "Jakarta",
          delivery: "regular",
          wrap: false,
          password: "",
        });
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Please Sign-In</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={onSubmitForm}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                name="name"
                id="name"
                value={formData.name}
                onChange={onChangeForm}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                name="email"
                id="email"
                value={formData.email}
                onChange={onChangeForm}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                name="password"
                id="password"
                value={formData.password}
                onChange={onChangeForm}
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <select
                placeholder="City"
                className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
                name="city"
                id="city"
                onChange={onChangeForm}
                value={formData.city}
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
                  name="delivery"
                  value="sameday"
                  onChange={onChangeForm}
                  checked={formData.delivery === "sameday"}
                />
                <label htmlFor="sameday">Same Day</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="regular"
                  name="delivery"
                  value="regular"
                  onChange={onChangeForm}
                  checked={formData.delivery === "regular"}
                />
                <label htmlFor="regular">Regular</label>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="wrap"
                id="wrap"
                checked={formData.wrap}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    wrap: e.target.checked,
                  })
                }
              />
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

export default OneState;
