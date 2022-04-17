import React from "react";
import { useParams } from "react-router-dom";
import useServices from "../../Hooks/useServices";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useServices();
    return (
        <div>
            <h2>This is service details</h2>
            <h2>This is service id {serviceId}</h2>
            <h3>This is services option {services.length}</h3>
        </div>
    );
};

export default ServiceDetails;
