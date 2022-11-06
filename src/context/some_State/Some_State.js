import StateContext from "./stateContext";
import React, { useState } from 'react'

const Some_State = (props) => {
  const [loginuserdata, setloginuserdata] = useState({name: '', email: ''})


  const [addproEmployeData, setaddproEmployeData] = useState([
      { employename: '', employerole: 'owner', employeemail: '' },
    ]);

    const [addprotask, setaddprotask] = useState([
      { taskname: '', taskdescription: '', task_assignto: '', task_status: 'remaining' },
    ]);

  return (
    <StateContext.Provider value={{ addproEmployeData, setaddproEmployeData, loginuserdata, setloginuserdata, addprotask, setaddprotask}}>
      {props.children}
    </StateContext.Provider>
  )

}
export default Some_State