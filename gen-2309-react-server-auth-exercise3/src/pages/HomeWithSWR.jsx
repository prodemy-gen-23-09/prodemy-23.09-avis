
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import Card from "../components/Card";
import useSWR from "swr";
import { setProducts } from './AuthSlice';
import Modal from 'react-modal';
import Receipt from './Receipt';

Modal.setAppElement('#root');




function HomeWithSWR() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onAdminLogin = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        const bookings = response.data;
        const matchingBooking = bookings.find(
          (booking) =>
            booking.name === adminData.name &&
            booking.email === adminData.email &&
            booking.password === adminData.password &&
            booking.userType === "admin"
        );

        if (matchingBooking) {
          alert("Admin login successful!");
          navigate("/admin");
        } else {
          alert("Invalid admin credentials.");
        }
      })
      .catch((error) => console.log(error));
  };


  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

 
  const getProducts = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    " http://localhost:8000/products",
    getProducts,
    {
      onSuccess: (data) => {
        dispatch(setProducts(data.sort((a, b) => a.name.localeCompare(b.name))));
      },
    }
  );

  if (error) return alert(JSON.stringify(error));

  return (
    <section className="flex flex-col justify-center">

      <div className="flex justify-center gap-4 pt-5">
          <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center" onClick={() => setIsModalOpen(true)}>
            Admin
          </button>
      {/* </div> */}

      {/* <div className="flex justify-center gap-4 pt-5"> */}
         <button className="rounded-lg bg-sky-400 p-2 text-white self-center"onClick={() => navigate("/receipt")} 
            > Receipt
          </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map(({ id, name, image }) => (
              <Card
                title={name}
                image={image}
                key={id}
                onClick={() => onClickCard(id)}
              />
            ))}
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
  <h2>Admin Login</h2>
  <form onSubmit={onAdminLogin}>
    <label>
      Name:
      <input
        type="text"
        value={adminData.name}
        onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
      />
    </label>
    <label>
      Email:
      <input
        type="email"
        value={adminData.email}
        onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
      />
    </label>
    <label>
      Password:
      <input
        type="password"
        value={adminData.password}
        onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
      />
    </label>
    <button type="submit">Login</button>
  </form>
</Modal>


    </section>
  );
}

export default HomeWithSWR;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router";
// import { BeatLoader } from "react-spinners";
// import Card from "../components/Card";
// import useSWR from "swr";
// import { setProducts } from './reducer';

// function HomeWithSWR() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [adminData, setAdminData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onAdminLogin = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8000/auth/login", adminData)
//       .then((response) => {
//         if (response.data.userType === "admin") {
//           alert("Admin login successful!");
//           navigate("/admin");
//         } else {
//           alert("Invalid admin credentials.");
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   const onClickCard = (id) => {
//     navigate(`/detail/${id}`);
//   };

//   const getProducts = (url) => axios.get(url).then((response) => response.data);

//   const { data, isLoading, error, mutate } = useSWR(
//     " http://localhost:8000/products",
//     getProducts,
//     {
//       onSuccess: (data) => {
//         dispatch(setProducts(data.sort((a, b) => a.name.localeCompare(b.name))));
//       },
//     }
//   );

//   if (error) return alert(JSON.stringify(error));

//   return (
//     <section className="flex flex-col justify-center">
//       <div className="flex justify-center gap-4 pt-5">
//         <button
//           className="rounded-lg bg-sky-400 p-2 text-white self-center"
//           onClick={() => navigate("/admin")}
//         >
//           Admin
//         </button>
//       </div>

//       <div className="flex justify-center gap-4 pt-5">
//         <button className="rounded-lg bg-sky-400 p-2 text-white self-center" onClick={() => navigate("/shop")}>
//           Wishlist
//         </button>
//       </div>

//       <div className="flex justify-center gap-4 mt-8">
//         {isLoading ? (
//           <BeatLoader color="#38BDF8" />
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {data?.map(({ id, name, image }) => (
//               <Card
//                 title={name}
//                 image={image}
//                 key={id}
//                 onClick={() => onClickCard(id)}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default HomeWithSWR;






