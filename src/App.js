import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import CheckoutSuccess from "./Pages/Checkout/CheckoutSuccess/CheckoutSuccess";

import MainHome from "./Pages/Home/MainHome/MainHome";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<MainHome></MainHome>}></Route>
                <Route path="/home" element={<MainHome></MainHome>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route
                    path="/success"
                    element={<CheckoutSuccess></CheckoutSuccess>}
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/checkout:serviceId"
                    element={<Checkout></Checkout>}
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
