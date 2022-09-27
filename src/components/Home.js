import React, { useContext, useEffect } from 'react'
import ProjectContext from "../context/pro_jects/projectContext";


export const Home = () => {
    const context = useContext(ProjectContext);
    const { checK_loginOr_not } = context;

    return (
        <div> 
            {checK_loginOr_not ? (
                <>
                <h1> Dashboard</h1>
                </>
            ) : (
                <>
                <h1> login kar na</h1>
                </>
            )}
        </div>
    )
}
