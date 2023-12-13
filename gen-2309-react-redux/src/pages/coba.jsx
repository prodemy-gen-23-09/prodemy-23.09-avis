

// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// const ProductsContext = createContext();
// const CartContext = createContext();

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart((currentCart) => [...currentCart, item]);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8000/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data: ', error);
//       })
//   }, []);

  

//   return (
//     <ProductsContext.Provider value={products}>
//       <CartContext.Provider value={{ cart, addToCart }}>
//         <div className="container mx-auto px-4">
//           <Shop />
//         </div>
//       </CartContext.Provider>
//     </ProductsContext.Provider>
//   );
// }

// function Shop() {
//   const products = useContext(ProductsContext);
//   const { cart, addToCart } = useContext(CartContext);

//   return (
//     <div className='flex'>
//     <div className='w-2/3 pr-4'>
//       <h2 className="text-2xl font-bold mb-4">Products</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded">
//             <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-md" />
//             <h3 className="font-bold mb-2">{product.name}</h3>
//             <p className="mb-2">{product.description}</p>
//             <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
    
//     <div className="w-1/3 pl-4 bg-grey-100">
//       <h2 className="text-2xl font-bold my-4 bg-yellow-200">Shopping Cart<svg className="w-6 h-6 text-gray-800 dark:text-white inline-block ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
//             <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
//           </svg></h2>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index} className="border p-4 rounded mb-2">{item.name}</li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// }

// export default App;