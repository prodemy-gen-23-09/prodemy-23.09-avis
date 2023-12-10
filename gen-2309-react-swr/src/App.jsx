import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeWithSWR from "./pages/HomeWithSWR";
import Detail from "./pages/Detail";
import Layout from "./layout/Layout";
import ManyStates from "./pages/ManyStates";
import OneState from "./pages/OneState";
import HookForm from "./pages/HookForm";

function App() {
  return (
    <Layout>
      <Routes>
        {/* navigate for redirecting */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeWithSWR />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/checkout" element={<HookForm />} />
      </Routes>
    </Layout>
  );
}

export default App;
