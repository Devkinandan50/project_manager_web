import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../style/login.css';
import ProjectContext from "../context/pro_jects/projectContext"
import Accordion from 'react-bootstrap/Accordion';

const Login = (props) => {
    const context = useContext(ProjectContext);

    // context mese set_login function lekar aao
    const { set_checK_loginOr_not, display_alert, facelogin_email, set_facelogin_email} = context;

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            set_checK_loginOr_not(true);
            display_alert("Login Successfully", "success");
            history.push("/");
        }
        else {
            display_alert("Invalid credentials", "danger");
        }
    }

    const onChange = (e) => {
        // get by id or name
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="login-options">
                <h2>Login Using The Following Options</h2>
                <Accordion defaultActiveKey="7">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Login with email</Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: 'beige' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Login with Face Recognition</Accordion.Header>
                        
                        <Accordion.Body style={{ backgroundColor: 'beige' }}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" value={facelogin_email} onChange={(e) => set_facelogin_email(e.target.value)} id="email" name="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <Link style={{textDecoration: 'none'}} to="/facelogin"><button className="btn btn-primary">Start Camera</button></Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Login with Google</Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: 'beige' }}>
                            Not Available this feature now
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default Login
