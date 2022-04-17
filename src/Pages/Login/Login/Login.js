import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    if (user) {
        if (user) {
            navigate(from, { replace: true });
        }
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleLogIn}>
                <div className="input-group mb-3">
                    <label className="block" htmlFor="email">
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        className="border rounded-sm border-blue-700 w-full"
                        type="email"
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="block" htmlFor="phone">
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        required
                        className="border rounded-sm border-blue-700 w-full"
                        type="password"
                        placeholder="Enter phone no"
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
                    Not registered?{" "}
                    <Link className="text-blue-700" to="/register">
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
