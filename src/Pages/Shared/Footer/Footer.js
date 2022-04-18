import React from "react";

const Footer = () => {
    return (
        <div className="container mx-auto bg-black">
            <p className="text-white text-center p-5">
                Your vTax, copyright @{new Date().getFullYear()} | All Rights
                Reserved
            </p>
        </div>
    );
};

export default Footer;
