


import React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeWithSWR from "./pages/HomeWithSWR";
import Detail from "./pages/Detail";
import Layout from "./layout/Layout";
import OneState from "./pages/OneState";
import HookForm from "./pages/HookForm";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import store from './pages/store';
import Shop from './components/Shop';
import UserDisplay from './pages/UserDsiplay';
// import Wishlist from './pages/Wishlist';
import Footer from './layout/Footer';
import HomeWithSWRUser from './pages/HomeWithSWRUser';
// import Checkout from './pages/CheckoutPage';
import TestCheck from './pages/testcheckout';
import Preview from './pages/Preview';
import Receipt from './pages/Receipt';
import UserReceipt from './pages/UserReceipt';
import Products from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';


function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<OneState/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<HomeWithSWR />} />
            <Route path="/home" element={<HomeWithSWRUser />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/checkout" element={<HookForm />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/wishlist" element={<Wishlist />} /> */}
            <Route path="/UserDisplay" element={<UserDisplay />} />
            <Route path="/testcheckout" element={<TestCheck />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/receiptuser" element={<UserReceipt />} />
            <Route path="/product" element={<Products/>} />
            <Route path="/productDetail" element={<ProductDetail/>} />
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/productList/:id" element={<ProductDetail />} />

            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </Layout>
        <Footer className="mt-auto pt-10" />
      </div>
    </Provider>
  );
}

export default App;
