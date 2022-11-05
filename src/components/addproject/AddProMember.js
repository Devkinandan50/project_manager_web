import React, { useContext, useState } from 'react'
import ProjectContext from "../../context/pro_jects/projectContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const AddProMember = () => {
    const context = useContext(ProjectContext);

    // context mese add function lekar aao
    const { addproEmployeData, setaddproEmployeData } = context;
   
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


            <Button variant="outlined">
                <IconButton >
                    <AddIcon color="primary" size="large" />
                </IconButton>
            </Button>

                {addproEmployeData.map((empMember, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='employename'
                                placeholder='Name'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employename}
                            />
                            <input
                                name='employerole'
                                placeholder='Age'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employerole}
                            />
                             <input
                                name='employeemail'
                                placeholder='Age'
                                onChange={event => handleFormChange(event, index)}
                                value={empMember.employeemail}
                            />
                            <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}
            <button onClick={addFields}>Add More..</button>
            <br />
            <br />
            <button onClick={hsubmit}>Submit</button>
        </>
    )
}

export default AddProMember