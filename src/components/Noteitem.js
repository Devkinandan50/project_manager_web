import React, { useContext } from 'react'
import ProjectContext from "../context/notes/projectContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import IconButton from '@mui/material/IconButton';


const Noteitem = (props) => {
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
                <div className="col-md-3">
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
                </div>
            )}

        </>
    )
}

export default Noteitem



