import React, { useContext, useState } from 'react'
import StateContext from "../../context/some_State/stateContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';

const EditproTask = () => {
    const context = useContext(StateContext);

    // context mese add function lekar aao
    const { editproTask, seteditproTask, editproEmployee } = context;

    const handleFormChange = (event, index) => {
        let data = [...editproTask];
        data[index][event.target.name] = event.target.value;
        seteditproTask(data);
    }

    const addFields = () => {
        let object = { taskname: '', taskdescription: '', task_assignto: '', task_status: 'remaining' }
        seteditproTask([...editproTask, object])
        console.log(editproTask);
    }


    const removeFields = (index) => {
        let data = [...editproTask];
        data.splice(index, 1)
        seteditproTask(data)
    }

    function displayemployeelist(item) {
        return <MenuItem value={item.employename}>{item.employename} </MenuItem>
      }


    return (
        <>
            <h5>Add a Project task</h5>
            {/* <p> {loginuserdata.name}</p> */}
            {/* <p> {{loginuserdata.email}}</p> */}

            {editproTask.map((task, index) => {
                return (
                    <>
                        <div key={index}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 300, margin: 5 }}
                                id="name"
                                label="Task"
                                name='taskname'
                                onChange={event => handleFormChange(event, index)}
                                value={task.taskname}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: 300, margin: 5 }}
                                id="taskdescription"
                                label="Task Description"
                                name='taskdescription'
                                onChange={event => handleFormChange(event, index)}
                                value={task.taskdescription}
                            />
                            
                            <FormControl variant="outlined" style={{ width: 200, margin: 5 }}>
                                <Select label="Assign To" name='task_assignto' onChange={event => handleFormChange(event, index)}
                                    value={task.task_assignto}>
                                    {
                                        editproEmployee.map(displayemployeelist)
                                    }
                                    {/* <MenuItem value={"reporter"}>Reporter</MenuItem> */}
                                </Select>
                                <FormHelperText>Select a Task Assign To</FormHelperText>
                            </FormControl>

                            <FormControl variant="outlined" style={{ width: 150, margin: 5 }}>
                                <Select label="Task Status" name='task_status' onChange={event => handleFormChange(event, index)}
                                    value={task.task_status}>
                                    <MenuItem value={"remaining"}>Remaining</MenuItem>
                                    <MenuItem value={"inprogress"}>In-Progress</MenuItem>
                                    <MenuItem value={"underreview"}>Under Review</MenuItem>
                                    <MenuItem value={"completed"}>completed</MenuItem>
                                </Select>
                                <FormHelperText>Task Status</FormHelperText>
                            </FormControl>



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

export default EditproTask