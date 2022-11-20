import React, { useContext, useState } from 'react'
import StateContext from "../../context/some_State/stateContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';

const AddProMember = () => {
    const context = useContext(StateContext);

    // context mese add function lekar aao
    const { addproEmployeData, setaddproEmployeData, loginuserdata, addprotask, setaddprotask } = context;
    
    const handleFormChange = (event, index) => {
        let data = [...addproEmployeData];
        data[index][event.target.name] = event.target.value;
        setaddproEmployeData(data);
    }

    const addFields = () => {
        let object = {
            employename: '',
            employerole: '',
            employeemail: ''
        }
        setaddproEmployeData([...addproEmployeData, object])
    }


    const removeFields = (index, employename) => {
        if(window.confirm("All Task Assign to Deleted Member also Deleted")){
            const newArr = addprotask.filter(object => {
                return object.task_assignto !== employename;
              });
            setaddprotask(newArr);
    
            let data = [...addproEmployeData];
            data.splice(index, 1)
            setaddproEmployeData(data)
        }
    }




    return (
        <>
            <h5>Add a Project Member</h5>
            {/* <p> {loginuserdata.name}</p> */}
            {/* <p> {{loginuserdata.email}}</p> */}

            {addproEmployeData.map((empMember, index) => {
                return (
                    <>
                        <div key={index}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 400, margin: 10 }}
                                id="name"
                                label="Name"
                                name='employename'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employename}
                            />

                            <FormControl variant="outlined" style={{ width: 200, margin: 10 }}>
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
                                style={{ width: 400, margin: 10 }}
                                id="email"
                                label="Email Address"
                                name='employeemail'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employeemail}
                                autoComplete="email"
                            />

                            <Button onClick={() => removeFields(index, empMember.employename)} variant="outlined" style={{ margin: 10 }}>
                                <IconButton >
                                    <RemoveIcon color="primary" size="large" />
                                </IconButton>
                            </Button>
                            {/* <button onClick={() => removeFields(index)}>Remove</button> */}
                        </div>
                    </>
                )
            })}
            <Button onClick={addFields} variant="outlined" style={{ margin: 10 }}>
                <IconButton >
                    <AddIcon color="primary" size="large" />
                </IconButton>
            </Button>
            {/* <button onClick={addFields}>Add More..</button> */}
            
        </>
    )
}

export default AddProMember