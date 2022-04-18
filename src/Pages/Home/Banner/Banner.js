import React from "react";
import { useNavigate } from "react-router-dom";
import taxVector from "../../../images/images/taxVector.png";
import "./Banner.css";
import "animate.css";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="showcase flex flex-col items-center md:flex-row justify-center ">
            <div className="order-2 md:order-1 text-center md:text-left animate__animated animate__fadeInLeft animate__fast	800ms pl-4">
                <h2 className="text-4xl font-thin">Don't loose a Penny!</h2>
                <h2 className="text-5xl text-blue-700 leading mb-10">
                    Meet the Specialist
                </h2>
                <h3 className="mt-5 text-2xl">
                    Will Mr. <span className="text-4xl">Smith</span>
                </h3>
                <p>
                    I'm a professional Tax &amp; Vat consultant with decades of
                    experience in this field. For individuals to any large
                    company, My services can solve the problems which making it
                    harder to resolve. I've got various packages for your needs.
                    <span className="font-bold"> Check them out!</span>
                </p>
                <button
                    onClick={() => {
                        navigate("/about");
                    }}
                    className="bg-blue-700 text-white p-2 px-3 mt-3 rounded hover:bg-blue-800"
                >
                    Know More
                </button>
            </div>
            <img
                className="w-full md:w-1/2 md:mx-auto order-1 md:order-2 animate__animated animate__fadeInRight animate__fast	800ms"
                src={taxVector}
                alt=""
            />
        </div>
    );
};

export default Banner;
