import StateContext from "./stateContext";
import React, { useState } from 'react'

const Some_State = (props) => {
  const [loginuserdata, setloginuserdata] = useState({name: '', email: ''})


  const [addproEmployeData, setaddproEmployeData] = useState([]);

    const [addprotask, setaddprotask] = useState([]);

    const [editproEmployee, seteditproEmployee] = useState([]);
    const [editproTask, seteditproTask] = useState([]);

  return (
    <StateContext.Provider value={{ addproEmployeData, setaddproEmployeData, loginuserdata, setloginuserdata, addprotask, setaddprotask, editproEmployee, seteditproEmployee, editproTask, seteditproTask}}>
      {props.children}
    </StateContext.Provider>
  )

}
export default Some_State