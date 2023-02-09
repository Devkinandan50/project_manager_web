import React, { useContext, useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useHistory } from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom"
import '../style/login.css';
import ProjectContext from "../context/pro_jects/projectContext"
import Accordion from 'react-bootstrap/Accordion';
import StateContext from "../context/some_State/stateContext"
import { ToastContainer, toast } from 'react-toastify';

const Login = (props) => {
    const context = useContext(ProjectContext);
    const sta_context = useContext(StateContext);

    // context mese set_login function lekar aao
    const { set_checK_loginOr_not, facelogin_email, set_facelogin_email, host } = context;
    const { setloginusername } = sta_context;

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        // console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            set_checK_loginOr_not(true);
            setloginusername(json.firstname);
            toast.success(`${json.message}`, {
                position: "top-center"
            });
            history.push("/");
        }
        else {
            toast.error(`${json.error || json.error.msg}`, {
                position: "top-center"
            });
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

                                <div className="d-flex justify-content-between mb-4">
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
                                    <a href="/password-reset">Forgot password?</a>
                                    {/* <p style={{ color: "black", fontWeight: "bold" }}>Forgot Password  <NavLink to="/password-reset">Click Here</NavLink> </p> */}
                                </div>
                                {/* <p>Don't have an Account? <NavLink to="/signup">Sign Up</NavLink> </p> */}

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
                                <Link style={{ textDecoration: 'none' }} to="/facelogin"><button className="btn btn-primary">Start Camera</button></Link>
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
                <ToastContainer />
            </div>









            {/* 
<MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3">Sign in with</p>

      <MDBBtn floating size='md' tag='a' className='me-2'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn floating size='md' tag='a'  className='me-2'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn floating size='md' tag='a'  className='me-2'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

    </div>

    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">Or</p>
    </div>

    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
    </div>

  </MDBCol>

</MDBRow>

</MDBContainer> */}

        </>
    )
}

export default Login
