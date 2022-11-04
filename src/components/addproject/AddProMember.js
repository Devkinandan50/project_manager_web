import React, { useContext, useState } from 'react'
import ProjectContext from "../../context/pro_jects/projectContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const AddProMember = () => {
    const context = useContext(ProjectContext);

    // context mese add function lekar aao
    const { addProject } = context;

   
    const [formFields, setFormFields] = useState([
        { name: '', age: '' },
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        let object = {
            name: '',
            age: ''
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <>
            <h5>Add a Project Member</h5>

            <Button variant="outlined">
                <IconButton >
                    <AddIcon color="primary" size="large" />
                </IconButton>
            </Button>


            <form onSubmit={submit}>
                {formFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Name'
                                onChange={event => handleFormChange(event, index)}
                                value={form.name}
                            />
                            <input
                                name='age'
                                placeholder='Age'
                                onChange={event => handleFormChange(event, index)}
                                value={form.age}
                            />
                            <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <button onClick={addFields}>Add More..</button>
            <br />
            <br />
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default AddProMember