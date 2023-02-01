import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ProjectContext from "../context/pro_jects/projectContext";
import StateContext from "../context/some_State/stateContext";
import Alert from './Alert';

const Navbar = () => {
    let location = useLocation();
    let history = useHistory();
    const context = useContext(ProjectContext);
    const statecontext = useContext(StateContext);

    const { checK_loginOr_not, set_checK_loginOr_not, show_alert } = context;
    const { loginusername } = statecontext;

    function handle_logout() {
        let ans = window.confirm("You want to logout");
        if (ans) {
            localStorage.removeItem('token');
            set_checK_loginOr_not(false);
            history.push("/");
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
                    <Link className="navbar-brand" to="/">mYProjectbook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/allprojects" ? "active" : ""}`} aria-current="page" to="/allprojects">All Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            {checK_loginOr_not ? (
                                <>
                                    <p style={{color:'white', margin:'auto 1rem'}}> Hello, {loginusername}</p>
                                    <Link className="btn btn-primary mx-1" to="/userinfo" role="button">user</Link>
                                    <i className="btn btn-primary mx-1" role="button" onClick={handle_logout}>Logout</i>
                                </>
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
