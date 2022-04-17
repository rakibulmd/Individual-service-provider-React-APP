import React from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, name, picture, description, bill } = service;
    const navigateToServiceDetail = (id) => {
        navigate(`/checkout:${id}`);
    };
    return (
        <div className="mb-10 border-2 border-blue-700 rounded-xl p-3 shadow-xl animate__animated animate__fadeInUp animate__fast	800ms">
            <img className="w-full rounded-xl" src={picture} alt="" />
            <h2 className="text-2xl mt-5 mb-2">{name}</h2>
            <h3 className="text-blue-700 font-bold  text-3xl mb-2">
                <sup className="text-1xl text-black">$</sup>
                {bill}
                <sub className="text-1xl text-black">Apx.</sub>
            </h3>
            <p>{description}</p>
            <button
                onClick={() => {
                    navigateToServiceDetail(id);
                }}
                className="bg-blue-700 text-white p-2 px-3 mt-3 rounded hover:bg-blue-800"
            >
                Proceed to checkout
            </button>
        </div>
    );
};

export default Service;
