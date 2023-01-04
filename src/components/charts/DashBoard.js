import React, { useContext, useEffect, useState } from 'react'
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles, useTheme } from "@material-ui/core/styles";
import ProjectContext from "../../context/pro_jects/projectContext";
import './Dashboard.css'
import Widgets from './widget/Widgets';


const DashBoard = () => {
    const host = "http://localhost:5000"
    const authtoken = localStorage.getItem('token');
    // const Procontext = useContext(ProjectContext);
    const [selectedProjectName, setselectedProjectName] = useState("All")

    const [all_dashboardprojects, setall_dashboardprojects] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();


    // Get all Projects for dashboard select with all  
    const getProjects_forDashboard = async () => {
        // API Call 
        const response = await fetch(`${host}/api/projects/fetchallprojects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": authtoken
            }
        });
        const json = await response.json()
        // console.log(json)
        json.unshift({ Projectname: "All" });
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
                    <div className="container" style={{ boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.1)', borderRadius: '1rem', padding: '2rem 1rem 1rem 1rem' }} >
                        {/* <div className="container" style={{ padding: '2rem 1rem 1rem 1rem' }} > */}

                        <div style={{ marginBottom: '1rem' }}>
                            <Widgets />
                        </div>

                        <div class="row mt-4">
                            <div class="col-lg-7 mb-lg-0 mb-4">
                                <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                                    <div style={{ background: 'linear-gradient(82.59deg, #ff647c 0%, #0084f4 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                                    <div style={{ marginLeft: '2rem' }}>
                                        <h4> Project Items status Summary </h4>
                                    </div>
                                    {/* <PieGraph board={props.selectedboard}  /> */}
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                                    <div style={{ background: 'linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                                    <div style={{ marginLeft: '2rem' }}>
                                        <h4> Project Items status Summary </h4>
                                    </div>

                                    {/* <Tableofdata board={props.selectedboard} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}
export default DashBoard;
