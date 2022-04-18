import React from "react";
import Loading from "../Shared/Loading/Loading";
import rakibul from "../../images/images/rakibulmd.jpg";
import "animate.css";

const About = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row p-4 md:items-center justify-center">
            <div className="p-4 sm:text-center md:text-left  md:w-1/2 animate__animated animate__fadeInLeft animate__fast	800ms">
                <h2 className="text-3xl text-emerald-600 mb-5">
                    If you want to have something you never had, You'll need to
                    do something you've never done{" "}
                    <sub className="text-sm">-Thomas Jeffferson</sub>
                </h2>
                <p>
                    Coding was a dream for me from a very young age, but things
                    wasn't in my way. I always thought becoming a coder, web
                    development seems interesting to me. Now I'm here with
                    Programming Hero team, although it's hard to maintain all
                    the effort required to become a web development as a full
                    time service holder, but I love doing it! I'm trying to
                    utilize my times to the best. I'm confident about my
                    ability, it's all about time &amp; if Allah wants, I'll
                    fulfill my dream soon.
                </p>
            </div>
            <div className="animate__animated animate__fadeInRight animate__fast	800ms">
                <img
                    className="lg:w-[400px] md:w-[300px] sm:w-full rounded-full border border-blue-600 p-2"
                    src={rakibul}
                    alt=""
                />
            </div>
        </div>
    );
};

export default About;
