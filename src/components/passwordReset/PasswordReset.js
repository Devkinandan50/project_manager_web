import React, { useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectContext from '../../context/pro_jects/projectContext';

const PasswordReset = () => {
    const context = useContext(ProjectContext);

    // context mese set_login function lekar aao
    const { host } = context;

    const [email, setEmail] = useState("");

    // const [message, setMessage] = useState(true);

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else {
            const res = await fetch(`${host}/api/auth/sendpasswordlinktoemail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email })
            });

            const data = await res.json();

            if (data.success) {
                setEmail("");
                toast.success("pasword reset link send Succsfully in Your Email", {
                    position: "top-center"
                })
                // setMessage(true)
            } else {
                toast.error(`${data.error}`, {
                    position: "top-center"
                })
            }
        }
    }

    return (
        <>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Reset Your Account Password</h4>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="accountEmail">Account Email</label>
                                <input type="email" className="form-control" required="required" name="email" id="email" value={email} onChange={setVal} />
                                <span class="help-block">The email address associated with your Account.</span>
                                {/* {message ? <p style={{ color: "green", fontWeight: "bold" }}>pasword reset link send Succsfully in Your Email</p> : ""} */}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default btn-sm btn-icon" data-dismiss="modal"><i class="fa fa-times"></i> Cancel</button>
                            <button type="input" name="submit" value="resetPass" class="btn btn-success btn-sm btn-icon" onClick={sendLink}><i class="fa fa-check-square-o"></i> Send</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default PasswordReset