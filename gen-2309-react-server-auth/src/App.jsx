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
// import Context from "./pages/Context";
import store from './pages/store';
import Shop from './components/Shop';
import UserDisplay from './pages/UserDsiplay';


function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<OneState/>} />
          {/* <Route path="/homes" element={<Navigate to="/home" />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<HomeWithSWR />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/checkout" element={<HookForm />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/UserDisplay" element={<UserDisplay />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
