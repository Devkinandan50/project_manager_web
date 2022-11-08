import React, { useContext, useState } from 'react'
import StateContext from "../../context/some_State/stateContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';

const EditProMember = () => {
    const context = useContext(StateContext);

    // context mese add function lekar aao
    const { editproEmployee, seteditproEmployee, loginuserdata } = context;
    
    const handleFormChange = (event, index) => {
        let data = [...editproEmployee];
        data[index][event.target.name] = event.target.value;
        seteditproEmployee(data);
    }

    const addFields = () => {
        let object = {
            employename: '',
            employerole: '',
            employeemail: ''
        }
        seteditproEmployee([...editproEmployee, object])
    }


    const removeFields = (index) => {
        alert("Note: All Task Assign to Deleted Member also Deleted");
        let data = [...editproEmployee];
        data.splice(index, 1)
        seteditproEmployee(data)
    }




    return (
        <>
            <h5>Project Member</h5>
            {/* <p> {loginuserdata.name}</p> */}
            {/* <p> {{loginuserdata.email}}</p> */}

            {editproEmployee.map((empMember, index) => {
                return (
                    <>
                        <div key={index}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 300, margin: 5 }}
                                id="name"
                                label="Name"
                                name='employename'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employename}
                            />

                            <FormControl variant="outlined" style={{ width: 200, margin: 5 }}>
                                <Select label="Months" name='employerole' onChange={event => handleFormChange(event, index)}
                                    value={empMember.employerole}>
                                    <MenuItem value={"owner"}>Owner</MenuItem>
                                    <MenuItem value={"maintainer"}>Maintainer</MenuItem>
                                    <MenuItem value={"developer"}>Developer</MenuItem>
                                    <MenuItem value={"tester"}>Tester</MenuItem>
                                    <MenuItem value={"reporter"}>Reporter</MenuItem>
                                </Select>
                                <FormHelperText>Select a Role</FormHelperText>
                            </FormControl>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 300, margin: 5 }}
                                id="email"
                                label="Email Address"
                                name='employeemail'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employeemail}
                                autoComplete="email"
                            />

                            <Button onClick={() => removeFields(index)} variant="outlined" style={{ margin: 5 }}>
                                <IconButton >
                                    <RemoveIcon color="primary" size="large" />
                                </IconButton>
                            </Button>
                            {/* <button onClick={() => removeFields(index)}>Remove</button> */}
                        </div>
                    </>
                )
            })}
            <Button onClick={addFields} variant="outlined" style={{ margin: 5 }}>
                <IconButton >
                    <AddIcon color="primary" size="large" />
                </IconButton>
            </Button>
            {/* <button onClick={addFields}>Add More..</button> */}
            
        </>
    )
}

export default EditProMember