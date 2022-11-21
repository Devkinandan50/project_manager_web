import React, { useContext } from 'react'
import ProjectContext from "../context/pro_jects/projectContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import IconButton from '@mui/material/IconButton';
import { BsGithub } from "react-icons/bs";
import "../style/projectitem.css";
import ReactTimeAgo from 'react-time-ago';
import { height } from '@mui/system';

const Projectitem = (props) => {
    const context = useContext(ProjectContext);
    const { deleteProject, listview } = context;
    const { proj, updateproj } = props;
    return (
        <>
            {listview ? (
                <List sx={{
                    // width: '100%',

                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    // maxHeight: '100%',

                }}  >

                    <ListItem disablePadding >

                        <ListItemText primary={proj.Projectname} />
                        <ListItemText primary={proj.description} />
                        <ListItemIcon>

                            <IconButton sx={{ mr: 3 }}>
                                <i onClick={() => { updateproj(proj) }}><UpdateIcon /></i>
                            </IconButton>

                            <IconButton sx={{ mr: 3 }}>
                                <i onClick={() => { deleteProject(proj._id) }}><DeleteIcon /></i>
                            </IconButton>

                        </ListItemIcon>

                    </ListItem>

                </List>
            ) : (
                <>
                    {/* <div className="col-md-3">
                        <div className="card my-3">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="card-title">{proj.Projectname}</h5>
                                    <i className="far fa-trash-alt mx-2" onClick={() => { deleteProject(proj._id) }}></i>
                                    <i className="far fa-edit mx-2" onClick={() => { updateproj(proj) }}></i>
                                </div>
                                <p className="card-text">{proj.description}</p>

                            </div>
                        </div>
                    </div> */}

                    <div className="col-md-3 card_project mx-6">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0">{proj.Projectname}</h6> <span><ReactTimeAgo date={proj.date} locale="en-US"/></span>
                                    </div>
                                </div>
                                <div className="badge"> <span>{proj.tag}</span> </div>
                            </div>
                            <div className="mt-5">
                                <p className="heading" style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", height:"49px"}}>{proj.description} </p>
                                <div className="mt-5">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style= {{width: `${proj.progess}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div> <span className="text1">{proj.progess}% <span className="text2">work of Project Complete</span></span> </div>
                                </div>
                            </div>
                            <div className="mt-5 d-flex justify-content-between">
                                    <a href={proj.githublink} className="far mx-2" target="_blank" rel="noreferrer"><BsGithub/></a>
                                    <i className="bi bi-github"></i>
                                    <i className="far fa-edit mx-2" onClick={() => { updateproj(proj) }}></i>
                                    <i className="far fa-trash-alt mx-2" onClick={() => { deleteProject(proj._id) }}></i>

                            </div>
                        </div>
                    </div>


                </>
            )}

        </>
    )
}

export default Projectitem



