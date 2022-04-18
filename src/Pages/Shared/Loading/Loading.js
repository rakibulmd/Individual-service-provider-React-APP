import React from "react";
import loading from "../../../images/loading/loading.gif";
const Loading = () => {
    return (
        <div className="container mx-auto w-screen h-screen flex justify-center items-center">
            <div>
                <img src={loading} alt="" />
            </div>
        </div>
    );
};

export default Loading;
