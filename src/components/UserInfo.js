import React, { useContext, useEffect, useState } from 'react';
import ProjectContext from "../context/pro_jects/projectContext";
import {useHistory} from 'react-router-dom';
import "../style/userinfo.css";

export default function UserInfo() {
    const context = useContext(ProjectContext);
    const { checK_loginOr_not } = context;
    const history = useHistory();

    const intialdata = {};

    const [userdata, setuserdata] = useState(intialdata);

    const authtoken = localStorage.getItem('token');

    useEffect(() => {
        getuserdata();
    }, [])

    const getuserdata = async () => {
        // API Call 
        if (checK_loginOr_not) {
            const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": authtoken
                }
            });
            const json = await response.json()
            // console.log(json);
            setuserdata(json);
        }
    }
    return (
        <div>
            <div className='mt-5'>
                <div className="card card_0f_userinfo">
                    <div className="card_title card_ka_title">
                        <h1> User Profile </h1>
                        <img
                            className='mt-3'
                            // src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
                            src={`${userdata.image}`}
                            alt="example"
                            // style={{ width: "100%", borderRadius: '40px' }}
                            style={{ width: "100%" }}
                            height= '350'
                        />

                        <p className="title_0f_userinfo mt-3"> {userdata.name} </p>
                        <p> {userdata.email}</p>

                        <button className="mt-3" onClick={history.goBack} >back</button>
                    </div>
                    {/* <p> dsfrgrg </p> */}
                </div>
            </div>
        </div>
    )
}
