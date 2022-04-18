import React from "react";

const Footer = () => {
    return (
        <div className=" bg-black">
            <div className="container mx-auto">
                <p className="text-white text-center p-5">
                    Your vTax, copyright @{new Date().getFullYear()} | All
                    Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
