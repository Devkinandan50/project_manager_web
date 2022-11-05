import React, { useContext, useState } from 'react'
import StateContext from "../../context/some_State/stateContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const AddProMember = () => {
    const context = useContext(StateContext);

    // context mese add function lekar aao
    const { addproEmployeData, setaddproEmployeData, loginuserdata } = context;
   
    // const [addproEmployeData, setaddproEmployeData] = useState([
    //     { employename: '', employerole: '', employeemail: ''},
    // ])

    const handleFormChange = (event, index) => {
        let data = [...addproEmployeData];
        data[index][event.target.name] = event.target.value;
        setaddproEmployeData(data);
    }

    const hsubmit = (e) => {
        e.preventDefault();
        console.log(addproEmployeData)
    }

    const addFields = () => {
        let object = {
            employename: '',
            employerole: '',
            employeemail: ''
        }
        console.log(loginuserdata);
        setaddproEmployeData([...addproEmployeData, object])
    }


    const removeFields = (index) => {
        let data = [...addproEmployeData];
        data.splice(index, 1)
        setaddproEmployeData(data)
    }

    return (
        <>
            <h5>Add a Project Member</h5>
            {/* <p> {loginuserdata.name}</p> */}
            {/* <p> {{loginuserdata.email}}</p> */}

                {addproEmployeData.map((empMember, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='employename'
                                placeholder='Name'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employename}
                                required
                            />
                            <input
                                name='employerole'
                                placeholder='Age'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employerole}
                                required
                            />
                             <input
                                name='employeemail'
                                placeholder='Age'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employeemail}
                                required
                            />
                            <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}
                <Button onClick={addFields} variant="outlined">
                <IconButton >
                    <AddIcon color="primary" size="large" />
                </IconButton>
            </Button>
            {/* <button onClick={addFields}>Add More..</button> */}
            <br />
            <br />
            <button onClick={hsubmit}>Submit</button>
        </>
    )
}

export default AddProMember