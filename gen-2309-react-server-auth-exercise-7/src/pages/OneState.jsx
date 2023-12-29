import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function OneState() {
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
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
      .post("http://localhost:8000/users", payload)
      .then(() => {
        alert("Successfully Signed-Up!");
        setFormData({
          userType: "",
          name: "",
          email: "",
          password: "",
        });
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Register</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Please Sign-Up here</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={onSubmitForm}
          >
            <div>
              {/* <label htmlFor="userType"></label> */}
              <select
               name="userType"
               id="userType"
               value={formData.userType}
               onChange={onChangeForm}
               >
                 <option value="">Select User Type</option>
                 <option value="user">User</option>
                 <option value="admin">Admin</option>
              </select>
            </div>

            
            
            
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
              className="rounded-lg bg-sky-400 hover:bg-sky-600 p-2 text-white self-center w-full"
              type="submit"
            >
              Sign-Up
            </button>

            <h5 className="">Already Signed in?
              <Link to="/login">
                <span className="font-bold text-blue-300">Login</span>
                <span className="font-bold text-blue-300 hover:text-blue-400"> here</span>
              </Link>
            </h5>
          </form>
        </div>
      </div>
    </section>
  );
}

export default OneState;
