import React, { useContext, useState } from 'react'
import StateContext from "../../context/some_State/stateContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';

const AddProTask = () => {
    const context = useContext(StateContext);

    // context mese add function lekar aao
    const { addprotask, setaddprotask, loginuserdata, addproEmployeData } = context;

    const handleFormChange = (event, index) => {
        let data = [...addprotask];
        data[index][event.target.name] = event.target.value;
        setaddprotask(data);
    }

    const addFields = () => {
        let object = { taskname: '', taskdescription: '', task_assignto: '', task_status: 'remaining' }
        setaddprotask([...addprotask, object])
        console.log(addprotask);
    }


    const removeFields = (index) => {
        let data = [...addprotask];
        data.splice(index, 1)
        setaddprotask(data)
    }

    function displayemployeelist(item) {
        return <MenuItem value={item.employename}>{item.employename} </MenuItem>
      }


    return (
        <>
            <h5>Add a Project task</h5>
            {/* <p> {loginuserdata.name}</p> */}
            {/* <p> {{loginuserdata.email}}</p> */}

            {addprotask.map((task, index) => {
                return (
                    <>
                        <div key={index}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 800, margin: 10 }}
                                id="name"
                                label="Task"
                                name='taskname'
                                onChange={event => handleFormChange(event, index)}
                                value={task.taskname}
                            />

                            <FormControl variant="outlined" style={{ width: 400, margin: 10 }}>
                                <Select label="Assign To" name='task_assignto' onChange={event => handleFormChange(event, index)}
                                    value={task.task_assignto}>
                                    {
                                        addproEmployeData.map(displayemployeelist)
                                    }
                                    {/* <MenuItem value={"reporter"}>Reporter</MenuItem> */}
                                </Select>
                                <FormHelperText>Select a Task Assign To</FormHelperText>
                            </FormControl>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 800, margin: 10 }}
                                id="taskdescription"
                                label="Task Description"
                                name='taskdescription'
                                onChange={event => handleFormChange(event, index)}
                                value={task.taskdescription}
                            />

                            <FormControl variant="outlined" style={{ width: 400, margin: 10 }}>
                                <Select label="Task Status" name='task_status' onChange={event => handleFormChange(event, index)}
                                    value={task.task_status}>
                                    <MenuItem value={"remaining"}>Remaining</MenuItem>
                                    <MenuItem value={"inprogress"}>In-Progress</MenuItem>
                                    <MenuItem value={"completed"}>completed</MenuItem>
                                </Select>
                                <FormHelperText>Task Status</FormHelperText>
                            </FormControl>



                            <Button onClick={() => removeFields(index)} variant="outlined" style={{ margin: 10 }}>
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

export default AddProTask