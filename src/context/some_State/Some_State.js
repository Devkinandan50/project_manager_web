import StateContext from "./stateContext";
import React, { useState } from 'react'

const Some_State = (props) => {
  const [loginuserdata, setloginuserdata] = useState({name: '', email: ''})


  const [addproEmployeData, setaddproEmployeData] = useState([
      { employename: '', employerole: 'owner', employeemail: '' },
    ]);



  return (
    <StateContext.Provider value={{ addproEmployeData, setaddproEmployeData, loginuserdata, setloginuserdata}}>
      {props.children}
    </StateContext.Provider>
  )

}
export default Some_State