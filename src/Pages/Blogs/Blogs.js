import React from "react";
import useServices from "../../Hooks/useServices";

const Blogs = () => {
    const [services, setServices] = useServices();
    return (
        <div className="container mx-auto my-5">
            <h2 className="text-4xl text-center  font-bold text-blue-700">
                My Services {services.length}
            </h2>
        </div>
    );
};

export default Blogs;
