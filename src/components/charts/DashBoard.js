import React, { useContext, useEffect, useState } from 'react'
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import ProjectContext from "../../context/pro_jects/projectContext";


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
        <div>
            <FormControl variant="outlined" style={{ width: 200, marginTop: 10 }}>
                <Select label="Project" name='project' defaultValue={'All'}>
                    {
                        all_dashboardprojects.map(displayemployeelist)
                    }
                </Select>
            </FormControl>

            {selectedProjectName ? (
                <h1> {selectedProjectName}</h1>
            ) : (
                <></>
            )}
        </div >
    )
};
export default DashBoard;
