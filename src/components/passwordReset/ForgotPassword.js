import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom';
import ProjectContext from '../../context/pro_jects/projectContext';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const ForgotPassword = () => {
    const context = useContext(ProjectContext);

    // context mese set_login function lekar aao
    const { host } = context;
    let history = useHistory();
    const { id, token } = useParams();


    const [data2, setData] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const userValid = async () => {
        const res = await fetch(`${host}/api/auth/forgotpasswordlinkverification/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()

        if (data.status == 201) {
            console.log("user valid")
        } else {
            history("*")
        }
    }


    const setval = (e) => {
        setPassword(e.target.value)
    }

    const setvalofconfirmpass = (e) => {
        setconfirmPassword(e.target.value)
    }

    const sendpassword = async (e) => {
        e.preventDefault();

        if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password != confirmPassword) {
            toast.error("password is not same", {
                position: "top-center"
            });
        } else if (password.length < 5) {
            toast.error("password must be 5 char!", {
                position: "top-center"
            });
        } else {
            const res = await fetch(`${host}/api/auth/newpassword/${id}/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password })
            });

            const data = await res.json()

            if (data.status == 201) {
                setPassword("")
                setconfirmPassword("")
                toast.success("Password Change Successfully", {
                    position: "top-center"
                })
                
            } else {
                toast.error("Token Expired generate new LInk", {
                    position: "top-center"
                })
            }
        }
    }

    useEffect(() => {
        userValid()
        setTimeout(() => {
            setData(true)
        }, 3000)
    }, [])

    return (
        <>
            {
                data2 ? (
                    <>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Enter Your NEW Password</h4>
                                </div>
                                <form>
                                    <div class="modal-body">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="lock me-3" size='lg' />
                                            <input type="password" id="password" name="password" value={password} className="form-control" placeholder="Password" onChange={setval} minLength={5} required />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="key me-3" size='lg' />
                                            <input type="password" id="cpass" name="cpass" value={confirmPassword} className="form-control" placeholder="Confirm Password" onChange={setvalofconfirmpass} minLength={5} required />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <a href='/login'><button type="button" class="btn btn-default btn-sm btn-icon" data-dismiss="modal"> Login</button></a>
                                        <button type="input" name="submit" value="resetPass" class="btn btn-success btn-sm btn-icon" onClick={sendpassword}><i class="fa fa-check-square-o"></i> Reset Password</button>
                                    </div>
                                </form>
                            </div>
                            <ToastContainer />
                        </div>
                    </>
                ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }
        </>
    )
}

export default ForgotPassword