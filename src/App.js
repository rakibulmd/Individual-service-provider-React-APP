import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import CheckoutSuccess from "./Pages/Checkout/CheckoutSuccess/CheckoutSuccess";

import MainHome from "./Pages/Home/MainHome/MainHome";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div className="grid min-h-screen page-container">
            <Header></Header>
            <Routes>
                <Route path="/" element={<MainHome></MainHome>}></Route>
                <Route path="/home" element={<MainHome></MainHome>}></Route>
                {/* <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route
                    path="/success"
                    element={
                        <RequireAuth>
                            <CheckoutSuccess></CheckoutSuccess>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/checkout:serviceId"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route> */}
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
