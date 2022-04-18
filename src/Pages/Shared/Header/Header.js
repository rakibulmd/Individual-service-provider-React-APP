import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
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
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
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
        <header className="flex justify-center sticky top-0 bg-blue-50/95 z-50 shadow-md px-4">
            <div className="container flex justify-between items-center">
                <div className="flex md:block">
                    <div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className="w-12 h-12 md:hidden ml-1 mr-2"
                    >
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                    <div
                        onClick={() => navigate("/home")}
                        className="flex justify-center gap-1"
                    >
                        <div>
                            <img className="w-10 h-10" src={logo} alt="" />
                        </div>
                        <div>
                            <h2 className="text-center text-3xl text-blue-700 mx-auto z-50">
                                Your vTax{" "}
                                <span className="text-sm text-black hidden sm:inline">
                                    {user ? "User:" : ""} {user?.displayName}
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div>
                    <nav
                        className={`md:flex items-center absolute md:static duration-300 w-full ease-in ${
                            open
                                ? "top-10 left-[0px]"
                                : "top-[-250px] bg-white/0 left-[0px]"
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
                            className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100 md:bg-white/0"
                            to="/home"
                        >
                            {" "}
                            Home{" "}
                        </CustomLink>
                        <CustomLink
                            className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100 md:bg-white/0"
                            to="/blogs"
                        >
                            {" "}
                            Blogs{" "}
                        </CustomLink>
                        <CustomLink
                            className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100 md:bg-white/0"
                            to="/about"
                        >
                            {" "}
                            About{" "}
                        </CustomLink>
                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="block p-3 w-full md:p-4 md:ml-3 text-left  text-l font-semibold uppercase hover:text-blue-700 text-orange-500 z-50 bg-white/100 md:bg-white/0"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <CustomLink
                                className="block p-3 md:p-4 md:ml-3  text-l font-semibold uppercase hover:text-blue-700  z-50 bg-white/100 lg:bg-white/0"
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
