import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import Alert from './Alert';

const Navbar = () => {
    let location = useLocation();
    const context = useContext(noteContext);
    const { checK_loginOr_not, set_checK_loginOr_not, show_alert } = context;

    function handle_logout() {
        let ans = window.confirm("You want to logout");
        if (ans) {
            localStorage.removeItem('token');
            set_checK_loginOr_not(false);
            window.location.reload();
        }
    }

    // without reload change data
    useEffect(() => {
        set_checK_loginOr_not();
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            {checK_loginOr_not ? (
                                <i className="btn btn-primary mx-1" role="button" onClick={handle_logout}>Logout</i>
                            ) : (
                                <>
                                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
            {/* use context and get show_alert state  */}
            <Alert alert={show_alert} />
        </>
    )
}

export default Navbar
