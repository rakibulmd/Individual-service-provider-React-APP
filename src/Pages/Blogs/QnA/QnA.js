import React from "react";
import "animate.css";

const QnA = ({ qna }) => {
    const { question, answer } = qna;
    return (
        <article className="border-2 rounded-lg mb-5 p-3 border-blue-700 animate__animated animate__fadeInUp animate__fast	800ms">
            <h2 className="font-bold text-xl pb-2 border-b-2">{question}</h2>
            <p className="pt-3">{answer}</p>
        </article>
    );
};

export default QnA;
