import React, { useContext, useEffect } from 'react'
import ProjectContext from "../context/pro_jects/projectContext";
import Dashboard from './charts/DashBoard'


export const Home = () => {
    const context = useContext(ProjectContext);
    const { checK_loginOr_not } = context;

    return (
        <div>
            {checK_loginOr_not ? (
                <>
                    <div className="row my-3">
                        <h2> Dashboard</h2>
                        < Dashboard />
                    </div>
                </>
            ) : (
                <>
                    <h2> login kar na</h2>
                </>
            )}
        </div>
    )
}
