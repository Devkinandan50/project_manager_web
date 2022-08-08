import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import noteContext from "../context/notes/noteContext"

const Signup = () => {
    const context = useContext(noteContext);

    // context mese set_login function lekar aao
    const {set_checK_loginOr_not, display_alert} = context;

    // get by id or name
    const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpass:""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({name: name, email: email, password: password})
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            set_checK_loginOr_not(true);
            history.push("/");
            display_alert("Signup Successfully", "success");
        }
        else{
            display_alert("Invalid credentials", "danger");
        }
    }

    const onchange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className="container mt-5">
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name </label>
                <input type="text" id="name" name="name" value={credentials.name} className="form-control" aria-describedby="emailHelp" placeholder="Enter name" onChange={onchange} required minLength={3}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email" id="email" name="email" value={credentials.email} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange} required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" value={credentials.password} className="form-control" placeholder="Password" onChange={onchange} minLength={5} required />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" id="cpass" name="cpass" value={credentials.cpass} className="form-control" placeholder="Confirm Password" onChange={onchange} minLength={5} required/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Signup
