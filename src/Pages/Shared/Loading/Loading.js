import React from "react";
import loading from "../../../images/loading/loading.gif";
const Loading = ({ size }) => {
    return (
        <div className="container mx-auto">
            <img className={`block mx-auto ${size}`} src={loading} alt="" />
        </div>
    );
};

export default Loading;
