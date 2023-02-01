import StateContext from "./stateContext";
import React, { useState } from 'react'

const Some_State = (props) => {
  const [loginusername, setloginusername] = useState("");


  const [addproEmployeData, setaddproEmployeData] = useState([{employename: '', employerole: 'owner', employeemail: ''}]);

    const [addprotask, setaddprotask] = useState([]);

    const [editproEmployee, seteditproEmployee] = useState([]);
    const [editproTask, seteditproTask] = useState([]);

    const [selectedProjectName, setselectedProjectName] = useState("All")



  return (
    <StateContext.Provider value={{ addproEmployeData, setaddproEmployeData, loginusername, setloginusername, addprotask, setaddprotask, editproEmployee, seteditproEmployee, editproTask, seteditproTask, selectedProjectName, setselectedProjectName}}>
      {props.children}
    </StateContext.Provider>
  )

}
export default Some_State