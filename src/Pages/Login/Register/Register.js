import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const [error, setError] = useState("");
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, createUserError] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const [updateProfile, updating, profileUpdateError] =
        useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            if (user) {
                navigate(from, { replace: true });
            }
        }
        console.log(user);
    }, [from, user, navigate]);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (!/^[a-zA-Z. ]{2,30}$/.test(name)) {
            setError("Enter a valid name without numbers or characters");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Enter a valid email");
            return;
        }
        if (!/^(?=.*\d)[0-9a-zA-Z]{8,}$/.test(password)) {
            setError("Enter a valid password");
            return;
        }
        if (password !== confirmPassword) {
            setError("Password doesn't matched!");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    return (
        <div className="container mx-auto p-4 w-full max-w-xs">
            <form onSubmit={handleRegister}>
                <div className="input-group mb-3">
                    <label
                        className="block mb-1 text-md font-medium text-gray-900"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="input-group mb-3">
                    <label
                        className="block mb-1 text-md font-medium text-gray-900"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group mb-3">
                    <label
                        className="block mb-1 text-md font-medium text-gray-900"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        required
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                <div className="input-group mb-3">
                    <label
                        className="block mb-1 text-md font-medium text-gray-900"
                        htmlFor="confirmpassword"
                    >
                        Confirm Password
                    </label>
                    <input
                        ref={confirmPasswordRef}
                        required
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                        type="password"
                        placeholder="Re-enter password"
                    />
                </div>
                <p className="text-red-700">{error}</p>
                <input
                    className="bg-blue-700 text-white p-2 px-3 mt-3 rounded hover:bg-blue-800 inline-block"
                    type="submit"
                    value="Log In"
                />
            </form>
            <div>
                <p>
                    Already registered?{" "}
                    <Link className="text-blue-700" to="/login">
                        Log In Here
                    </Link>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
