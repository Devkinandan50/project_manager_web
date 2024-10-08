import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ProjectContext from "../context/pro_jects/projectContext"
import { ToastContainer, toast } from 'react-toastify';
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
import successs from "../img/signup-image.jpg";





const Signup = () => {
    const context = useContext(ProjectContext);

    // context mese set_login function lekar aao
    const { host } = context;


    // convert input string to base64 string
    let default_img = "data:image/png;base64,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";
    const [base64code, set_base64code] = useState(default_img);
    const onchange_image = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = fileString => {
        set_base64code(fileString);
        console.log(base64code);
    };

    const getBase64 = file => {

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };




    // get by id or name
    const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", cpass: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password, cpass } = credentials;

        if (cpass === password) {
            const response = await fetch(`${host}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname: firstname, lastname: lastname, email: email, password: password, image: base64code })
            });
            const json = await response.json()
            console.log(json);
            if (json.success) {
                setCredentials({firstname: "", lastname: "", email: "", password: "", cpass: "" });
                toast.success(`${json.message}`, {
                    position: "top-center"
                });
            }
            else {
                toast.error(`${json.error}`, {
                    position: "top-center"
                });
            }
        }
        else {
            toast.error("Password are not same", {
                position: "top-center"
            });
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <div class="section-header">
                                    <span>Sign up</span>
                                    <h2>Sign up</h2>

                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <input type="text" id="firstname" name="firstname" value={credentials.firstname} className="form-control" aria-describedby="emailHelp" placeholder="Enter name" onChange={onchange} required minLength={3} maxLength={18} />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <input type="text" id="lastname" name="lastname" value={credentials.lastname} className="form-control" aria-describedby="emailHelp" placeholder="Enter name" onChange={onchange} required minLength={3} maxLength={18} />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <input type="email" id="email" name="email" value={credentials.email} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <input type="password" id="password" name="password" value={credentials.password} className="form-control" placeholder="Password" onChange={onchange} minLength={5} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="key me-3" size='lg' />
                                        <input type="password" id="cpass" name="cpass" value={credentials.cpass} className="form-control" placeholder="Confirm Password" onChange={onchange} minLength={5} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <input type="file" id="image" name="image" className="form-control" onChange={onchange_image} />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                                {/* <MDBBtn className='mb-4' size='lg'>Register</MDBBtn> */}

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src={successs} fluid />
                            </MDBCol>

                        </MDBRow>
                        <ToastContainer />
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>


        </div>
    )
}

export default Signup
