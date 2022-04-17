import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../images/images/pageNotFound.png";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto p-5">
            <h2 className="text-orange-600 lg:font-bold sm:font-normal text-center md:text-5xl text-3xl my-10">
                Page Not Found!
            </h2>
            <img className="w-50 block mx-auto" src={notFound} alt="" />
            <button
                onClick={() => {
                    navigate("/home");
                }}
                className="bg-blue-700 block mx-auto text-white p-2 px-3 mt-3 rounded hover:bg-blue-800"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;
