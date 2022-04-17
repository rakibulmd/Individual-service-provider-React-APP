import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogIn = (event) => {};

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
