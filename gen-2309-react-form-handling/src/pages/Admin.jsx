// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Admin() {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     image: "",
//     description: "",
//     productType: "",
//     price: "",
//     rating: "",
//     timeLeft: "",
//     totalSales: "",
//     releaseDate: "",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const onChangeForm = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmitForm = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8000/products", formData)
//       .then(() => {
//         console.log("New product added!");
//         setFormData({
//           id: "",
//           name: "",
//           image: "",
//           description: "",
//           productType: "",
//           price: "",
//           rating: "",
//           timeLeft: "",
//           totalSales: "",
//           releaseDate: "",
//         });
//         axios
//           .get("http://localhost:8000/products")
//           .then((response) => {
//             setProducts(response.data);
//           })
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => console.log(error));
//   };

//   const onDeleteProduct = (id) => {
//     axios
//       .delete(`http://localhost:8000/products/${id}`)
//       .then(() => {
//         console.log("Product deleted!");
//         setProducts(products.filter((product) => product.id !== id));
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <section className="px-20">
//     <h1 className="text-3xl font-semibold">Admin</h1>
//     <form
//       className="flex flex-col gap-4 mt-4 w-1/2"
//       onSubmit={onSubmitForm}
//     >
//       <div>
//         <label htmlFor="id">ID</label>
//         <input
//           type="text"
//           id="id"
//           name="id"
//           value={formData.id}
//           onChange={onChangeForm}
//           className="w-full"
//         />
//       </div>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={onChangeForm}
//         />
//       </div>
//       <div>
//         <label htmlFor="image">Image</label>
//         <input
//           type="text"
//           id="image"
//           name="image"
//           value={formData.image}
//           onChange={onChangeForm}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={onChangeForm}
//         />
//       </div>
//       <div>
//         <label htmlFor="releaseDate">Release Date</label>
//         <input
//           type="number"
//           id="releaseDate"
//           name="releaseDate"
//           value={formData.releaseDate}
//           onChange={onChangeForm}
//         />
//       </div>
//       <button
//         className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
//         type="submit"
//       >
//         Submit
//       </button>
//       </form>
//       <div className="mt-8 bg-blue-200 w-full ">
//         {products.map((product) => (
//           <div key={product.id} className="flex items-center gap-4 p-2 pt-6">
//             <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
//             <h2 className="flex-grow">{product.name}</h2>
//             <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
//             <button onClick={() => onUpdateProduct(product.id)}>Update</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Admin;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  id: yup.string().required("ID is required"),
  name: yup.string().required("Name is required"),
  image: yup.string().required("Image URL is required"),
  productType : yup.string().required("Product Type is not resolved"),
});

function Admin() {
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const onSubmitForm = (data) => {
    console.log(data);

    const payload = {
      id: data.id,
      name: data.name,
      image: data.image,
      productType: data.productType,
    };

    axios
      .post("http://localhost:8000/products", payload)
      .then(() => {
        alert("Successfully added a new product!");
        reset();
      })
      .catch((error) => console.log(error));
  };

  const onDelete = (id) => {
    axios
    .delete(`http://localhost:8000/products/${id}`)
      .then(() => {
        alert("Successfully deleted a product!");
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error(error));
  };



  // const onDelete = (id) => {
  //   axios.delete(`http://localhost:8000/products/${id}`)
  //     .then(() => {
  //       setProducts(products.filter(product => product.id !== id));
  //     })
  //     .catch(error => console.error(error));
  // };

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">ADMIN PAGE</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2 className="mb-4">Field</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="id">ID</label>
              <input
                placeholder="ID"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("id")}
                id="id"
              />
              <p className="error">{errors.id?.message}</p>
            </div>

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
              <label htmlFor="image">Image</label>
              <input
                placeholder="Image URL"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("image")}
                id="image"
              />
              <p className="error">{errors.image?.message}</p>
            </div>

            <div>
              <label htmlFor="productType">Type</label>
              <input
                placeholder="Product Type"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("productType")}
                id="productType"
              />
              <p className="error">{errors.productType?.message}</p>
            </div>
            <button
              className="rounded-lg bg-blue-500 p-2 text-white self-center w-full"
              type="submit"
            >
              Add Data
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        {products.map(product => (
          <div key={product.id} className="flex items-center gap-4 p-2 pt-6">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
            <h2 className="flex-grow">{product.name}</h2>
            <span>{product.price}</span>
            <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white rounded p-2">Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Admin;

