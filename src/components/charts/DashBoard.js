import React, { useContext, useEffect, useState } from 'react'
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import ProjectContext from "../../context/pro_jects/projectContext";
import './Dashboard.css'


const DashBoard = () => {
    const [selectedProjectName, setselectedProjectName] = useState("All")

    const Procontext = useContext(ProjectContext);
    const { getProjects_forDashboard, all_dashboardprojects } = Procontext;


    useEffect(() => {
        getProjects_forDashboard();
    }, [])

    function displayemployeelist(item) {
        return <MenuItem value={item.Projectname} onClick={(e) => setselectedProjectName(e.target.outerText)}>{item.Projectname} </MenuItem>
    }

    return (
        <>
            <div className='heading'>
                <h2 style={{ padding: '1rem' }}> Dashboard</h2>
                <div>
                    <FormControl variant="outlined" style={{ width: 200, marginTop: 10 }}>
                        <Select label="Project" name='project' value={selectedProjectName}>
                            {
                                all_dashboardprojects.map(displayemployeelist)
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="container" style={{ border: '1px solid red' }} >
                <div className="row">
                    <div class="col-8" style={{ border: '1px solid red', margin: '1rem' }}>col-8</div>
                    <div class="col-4" style={{ border: '1px solid red', margin: '1rem' }}>col-4</div>
                </div>
            </div>


        </>
    )
};
export default DashBoard;