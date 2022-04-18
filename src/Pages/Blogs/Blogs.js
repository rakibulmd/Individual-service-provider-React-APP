import React, { useEffect, useState } from "react";
import QnA from "./QnA/QnA";

const Blogs = () => {
    const [qnas, setQnas] = useState([]);
    useEffect(() => {
        fetch("qna.json")
            .then((res) => res.json())
            .then((data) => setQnas(data));
    }, []);
    return (
        <div className="container mx-auto p-3 md:p-5">
            <h2 className="font-bold text-3xl py-3 mb-5">QnA:</h2>
            {qnas.map((qna) => (
                <QnA qna={qna} key={qna.id}></QnA>
            ))}
        </div>
    );
};

export default Blogs;
