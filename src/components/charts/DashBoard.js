import React, { useContext, useEffect, useState } from 'react'
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles, useTheme } from "@material-ui/core/styles";
import StateContext from "../../context/some_State/stateContext";
import ProjectContext from "../../context/pro_jects/projectContext";
import './Dashboard.css'
import Dash from './Dash';



const DashBoard = () => {
    const authtoken = localStorage.getItem('token');
    const context = useContext(StateContext);
    const pcontext = useContext(ProjectContext);

    // context mese add function lekar aao
    const { selectedProjectName, setselectedProjectName} = context;
    const { host } = pcontext;

    const [all_dashboardprojects, setall_dashboardprojects] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();


    // Get all Projects for dashboard select with all  
    const getProjects_forDashboard = async () => {
        // API Call 
        const response = await fetch(`${host}/api/projects/dashboard`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": authtoken
            }
        });
        const json = await response.json()
        // console.log(json)
        setall_dashboardprojects(json);
        setLoading(false);
    }

    useEffect(() => {
        getProjects_forDashboard();
    }, [])

    function displayemployeelist(item) {
        return <MenuItem value={item.Projectname} onClick={(e) => setselectedProjectName(e.target.outerText)}>{item.Projectname} </MenuItem>
    }

    return (
        <>
            <div className='headingdash'>
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




            {loading ? (
                <div
                    style={{
                        position: "absolute",
                        left: "45%",
                        top: "50%",
                        marginLeft: "-50px",
                        marginTop: "-50px",
                        padding: theme.spacing(1, 9),
                    }}
                >
                    <CircularProgress size={100} />
                    <h5 style={{ fontSize: 20 }}> Loading..... </h5>
                </div>
            ) : (
                <>
                    {all_dashboardprojects.length === 1 ? (
                        <>
                          <p> Add Project to visualize dashboard </p>
                        </>
                    ) : (
                        <>
                            {all_dashboardprojects.map((item) => {
                                if (item.Projectname == selectedProjectName) {
                                    return <Dash data={item} />
                                }
                            })}
                        </>
                    )}
                </>
            )}

        </>
    );
}
export default DashBoard;
