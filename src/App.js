import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import CardPago from './pages/CardPago'
import Register from './pages/Register'
import VerVideo from "./pages/VerVideo";
export default function App() {

    return (
        <BrowserRouter>
           
            <Navbar />
            <Routes>
            <Route path="/video" element={<VerVideo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/pago" element={<CardPago />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}