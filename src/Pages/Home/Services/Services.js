import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
    const [services] = useServices();
    return (
        <div className="my-5 mt-10">
            <h2 className="text-4xl text-center  font-bold text-blue-700">
                My Services
            </h2>
            <div className="px-3 md:px-5 mt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-x-10 mx-auto">
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
