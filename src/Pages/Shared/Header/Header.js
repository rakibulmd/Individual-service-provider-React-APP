import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{
                        color: match ? "rgb(29 78 216)" : "",
                    }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    // const routes = [
    //     { id: 1, name: "Home", link: "/home" },
    //     { id: 2, name: "Blogs", link: "/blogs" },
    //     { id: 3, name: "About", link: "/about" },
    //     { id: 4, name: "Log In", link: "/login" },
    // ];
    return (
        <header className=" flex justify-center sticky top-0 bg-white/75 z-50 shadow-sm ">
            <div className="container flex justify-between items-center">
                <div className="flex md:block bg-white/75">
                    <div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className="w-12 h-12 md:hidden ml-1 mr-2"
                    >
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                    <div className="flex justify-center gap-1">
                        <div>
                            <img className="w-10 h-10" src={logo} alt="" />
                        </div>
                        <div>
                            <h2 className="text-center text-3xl mx-auto z-50">
                                Your vTax
                            </h2>
                        </div>
                    </div>
                </div>
                <div>
                    <nav
                        className={`md:flex items-center absolute md:static duration-300 w-full ease-in ${
                            open
                                ? "top-10 left-[50px]"
                                : "top-[-250px] bg-white/75 left-[50px]"
                        }`}
                    >
                        {/* {routes.map((route) => (
                            <CustomLink
                                className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100"
                                key={route.id}
                                to={route.link}
                            >
                                {route.name}
                            </CustomLink>
                        ))} */}

                        <CustomLink
                            className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100"
                            to="/home"
                        >
                            {" "}
                            Home{" "}
                        </CustomLink>
                        <CustomLink
                            className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100"
                            to="/blogs"
                        >
                            {" "}
                            Blogs{" "}
                        </CustomLink>
                        <CustomLink
                            className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100"
                            to="/about"
                        >
                            {" "}
                            About{" "}
                        </CustomLink>
                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700 text-red-500 z-50 bg-white/100"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <CustomLink
                                className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100"
                                to="/login"
                            >
                                {" "}
                                Login{" "}
                            </CustomLink>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
