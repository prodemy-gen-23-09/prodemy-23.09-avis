


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
import Wishlist from './pages/Wishlist';
import Footer from './layout/Footer';
import HomeWithSWRUser from './pages/HomeWithSWRUser';

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<OneState/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<HomeWithSWR />} />
            <Route path="/user" element={<HomeWithSWRUser />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/checkout" element={<HookForm />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/UserDisplay" element={<UserDisplay />} />
          </Routes>
        </Layout>
        <Footer className="mt-auto pt-10" />
      </div>
    </Provider>
  );
}

export default App;
