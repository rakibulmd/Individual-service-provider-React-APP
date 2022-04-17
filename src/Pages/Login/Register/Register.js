import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    if (user) {
        if (user) {
            navigate(from, { replace: true });
        }
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleRegister}>
                <div className="input-group mb-3">
                    <label className="block" htmlFor="name">
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        className="border rounded-sm border-blue-700 w-full"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="block" htmlFor="email">
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        className="border rounded-sm border-blue-700 w-full"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="block" htmlFor="password">
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        required
                        className="border rounded-sm border-blue-700 w-full"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="block" htmlFor="confirmpassword">
                        Confirm Password
                    </label>
                    <input
                        ref={confirmPasswordRef}
                        required
                        className="border rounded-sm border-blue-700 w-full"
                        type="password"
                        placeholder="Re-enter password"
                    />
                </div>

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
        </div>
    );
};

export default Register;
