// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const onChangeForm = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmitForm = (e) => {
//     e.preventDefault();

//     axios
//       .get("http://localhost:8000/users")
//       .then((response) => {
//         const bookings = response.data;
//         const matchingBooking = bookings.find(
//           (booking) =>
//             booking.name === formData.name && 
//             booking.email === formData.email &&
//             booking.password === formData.password
//         );

//         if (matchingBooking) {
//           alert("Login successful!");
//           navigate("/landing");
//         } else {
//           alert("Invalid credentials.");
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <section className="px-20">
//       <h1 className="text-3xl font-semibold">Login</h1>
//       <div className="grid grid-cols-2 gap-20 mt-8">
//         <div className="w-[500px]">
//           <h2>Enter your username and email here</h2>
//           <hr />
//           <form
//             className="flex flex-col gap-4 mt-4"
//             onSubmit={onSubmitForm}
//           >
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 placeholder="Name"
//                 className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={onChangeForm}
//               />
//             </div>

//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 placeholder="Email"
//                 className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={onChangeForm}
//               />
//             </div>

//             <div>
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
//                 name="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={onChangeForm}
//               />
//             </div>

//             <button
//               className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;







import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { loginSuccess } from './AuthSlice'; 

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const onChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        const user = response.data.find(user => user.email === formData.email);
        if (user && user.password === formData.password) {
          alert("Login successful!");
          dispatch(loginSuccess(user)); 
          if (user.userType === 'admin') {
            navigate("/landing");
          } else if (user.userType === 'user') {
            navigate("/user");
          }
        } else {
          alert("Invalid credentials.");
        }
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Login</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Enter your username and email here</h2>
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

            <button
              className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
