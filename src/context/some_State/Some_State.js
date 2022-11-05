import StateContext from "./stateContext";
import React, { useState } from 'react'

const Some_State = (props) => {
  const [addproEmployeData, setaddproEmployeData] = useState([
        { employename: '', employerole: '', employeemail: ''},
    ])


  return (
    <StateContext.Provider value={{ addproEmployeData, setaddproEmployeData}}>
      {props.children}
    </StateContext.Provider>
  )

}
export default Some_State