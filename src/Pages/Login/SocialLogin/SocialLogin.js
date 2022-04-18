import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [error, setError] = useState("");
    const [signInWithGoogle, user, loading, googleSignInError] =
        useSignInWithGoogle(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user) {
                navigate(from, { replace: true });
            }
        }
    }, [from, user, navigate]);

    if (loading) {
        return <Loading></Loading>;
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    };
    return (
        <div className="container mx-auto mt-5">
            <div className="flex items-center w-1/2 mx-auto">
                <div className="w-1/2 border-b border-gray-600"></div>
                <p className="mx-5 pb-1">or</p>
                <div className="w-1/2 border-b border-gray-600"></div>
            </div>
            <div className="text-center">
                <p className="text-red-700">
                    {googleSignInError?.message.split("auth/")[1].split(")"[0])}
                </p>
                <button
                    onClick={handleSignInWithGoogle}
                    className="bg-blue-700 text-white p-2 px-3 mt-3 rounded hover:bg-blue-800 "
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
