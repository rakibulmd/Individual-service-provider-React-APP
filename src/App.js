import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";

import MainHome from "./Pages/Home/MainHome/MainHome";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
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
                    path="/service/:serviceId"
                    element={<ServiceDetails></ServiceDetails>}
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
