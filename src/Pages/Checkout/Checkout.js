import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "../../Hooks/useServices";

const Checkout = () => {
    const { serviceId } = useParams();
    const serviceIdSliced = serviceId.split(":")[1];
    const [services, setServices] = useServices();
    const clickedService = services.find(
        (service) => service.id === serviceIdSliced
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
        navigate("/success");
    };

    if (clickedService) {
        return (
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-3 mt-5">
                    Review Checkout
                </h2>
                <div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:items-center">
                        <div className="p-3">
                            <img
                                className="w-full"
                                src={clickedService?.picture}
                                alt=""
                            />
                        </div>
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
                                <sub className="text-1xl text-black">Apx.</sub>
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
                                <label className="block" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    ref={nameRef}
                                    required
                                    className="border rounded-sm border-blue-700 w-full"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <label className="block" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    className="border rounded-sm border-blue-700 w-full"
                                    type="text"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <label className="block" htmlFor="phone">
                                    Phone No
                                </label>
                                <input
                                    ref={phoneRef}
                                    required
                                    className="border rounded-sm border-blue-700 w-full"
                                    type="phone"
                                    placeholder="Enter phone no"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <label className="block" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    ref={addressRef}
                                    required
                                    className="border rounded-sm border-blue-700 w-full"
                                    type="text"
                                    placeholder="Enter your address"
                                />
                            </div>
                            <input
                                className="bg-blue-700 text-white p-2 px-3 mt-3 rounded hover:bg-blue-800 inline-block"
                                type="submit"
                                value="Confirm Checkout"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Checkout;
