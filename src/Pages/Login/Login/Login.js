import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, signInError] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] =
        useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (user) {
            if (user) {
                navigate(from, { replace: true });
            }
        }
    }, [from, user, navigate]);
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Enter a valid email");
            return;
        }
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const handleResetPassword = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Enter a valid email");
            return;
        }

        await sendPasswordResetEmail(email);
        setError("");
    };

    return (
        <div className="container mx-auto p-4 w-full max-w-xs">
            <form onSubmit={handleLogIn}>
                <div className="input-group mb-3">
                    <label
                        className="block mb-1 text-md font-medium text-gray-900"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        required
                        ref={emailRef}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                        type="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="input-group mb-3">
                    <label
                        className="block mb-1 text-md font-medium text-gray-900"
                        htmlFor="phone"
                    >
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        required
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                        type="password"
                        placeholder="Enter phone no"
                    />
                </div>
                <p className="text-red-700">
                    {error ||
                        signInError?.message.split("auth/")[1].split(")"[0]) ||
                        passwordResetError?.message
                            .split("auth/")[1]
                            .split(")"[0])}
                </p>
                {loading ? (
                    <Loading size={"w-16"}></Loading>
                ) : (
                    <input
                        className="bg-blue-700 text-white p-2 px-5 mt-3 rounded hover:bg-blue-800 inline-block"
                        type="submit"
                        value="Log In"
                    />
                )}

                <div className="my-5">
                    Forgot password?{" "}
                    {sending ? (
                        <Loading size={"w-10"}></Loading>
                    ) : (
                        <Link
                            onClick={handleResetPassword}
                            className="text-blue-700 underline"
                            to="/home"
                        >
                            Reset Now
                        </Link>
                    )}
                </div>
            </form>
            <div>
                <p>
                    Not registered?{" "}
                    <Link className="text-blue-700" to="/register">
                        Register Here
                    </Link>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
