import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useServices from "../../Hooks/useServices";

const Checkout = () => {
    const [error, setError] = useState("");
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }
    const { serviceId } = useParams();
    const [services] = useServices();
    const clickedService = services.find(
        (service) => service.id === serviceId.split(":")[1]
    );
    const navigate = useNavigate();
    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const addressRef = useRef("");

    const handleConfirmCheckout = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        console.log(name, email, phone, address);
        if (!/^\+?\d{7}/.test(phone)) {
            setError("Enter valid phone number (no space)");
            return;
        }

        if (!/^[a-zA-Z0-9\s,.'-]{5,}$/.test(address)) {
            setError("Enter valid address");
            return;
        }
        setError("");
        navigate("/success");
    };

    if (clickedService) {
        return (
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-3 mt-5">
                    Review Checkout
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center p-4">
                    <div>
                        <div>
                            <div>
                                <h2 className="text-4xl mt-5 mb-5 text-blue-700">
                                    You've selected:
                                </h2>
                                <h2 className="text-2xl mt-5 mb-2">
                                    {clickedService?.name}
                                </h2>
                                <h3 className="text-blue-700 font-bold  text-3xl mb-2">
                                    <sup className="text-1xl text-black">$</sup>
                                    {clickedService?.bill}
                                    <sub className="text-1xl text-black">
                                        Apx.
                                    </sub>
                                </h3>
                                <p className="mt-5">
                                    {clickedService?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-5">
                        <div>
                            <h2 className="text-3xl mt-5 mb-2">
                                Please fill out this form to Checkout:
                            </h2>
                            <form onSubmit={handleConfirmCheckout}>
                                <div className="input-group mb-3">
                                    <label
                                        className="block mb-1 text-md font-medium text-gray-900"
                                        htmlFor="name"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        ref={nameRef}
                                        required
                                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                        type="text"
                                        placeholder="Enter your name"
                                        value={user.displayName}
                                        readOnly
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label
                                        className="block mb-1 text-md font-medium text-gray-900"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        ref={emailRef}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                        type="email"
                                        value={user.email}
                                        readOnly
                                        placeholder="enter your email"
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label
                                        className="block mb-1 text-md font-medium text-gray-900"
                                        htmlFor="phone"
                                    >
                                        Phone No
                                    </label>
                                    <input
                                        ref={phoneRef}
                                        required
                                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                        type="tel"
                                        placeholder="Enter phone no"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label
                                        className="block mb-1 text-md font-medium text-gray-900"
                                        htmlFor="address"
                                    >
                                        Address
                                    </label>
                                    <input
                                        ref={addressRef}
                                        required
                                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                        type="text"
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <p className="text-red-600">{error}</p>
                                <input
                                    className="bg-blue-700 text-white p-2 px-3 mt-3 rounded hover:bg-blue-800 inline-block"
                                    type="submit"
                                    value="Confirm Checkout"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Checkout;
