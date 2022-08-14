import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import IconButton from '@mui/material/IconButton';


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, listview } = context;
    const { note, updateNote } = props;
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

                        <ListItemText primary={note.title} />
                        <ListItemText primary={note.description} />
                        <ListItemIcon>

                            <IconButton sx={{ mr: 3 }}>
                                <i onClick={() => { updateNote(note) }}><UpdateIcon /></i>
                            </IconButton>

                            <IconButton sx={{ mr: 3 }}>
                                <i onClick={() => { deleteNote(note._id) }}><DeleteIcon /></i>
                            </IconButton>

                        </ListItemIcon>

                    </ListItem>

                </List>
            ) : (
                <div className="col-md-3">
                    <div className="card my-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <h5 className="card-title">{note.title}</h5>
                                <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                                <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                            </div>
                            <p className="card-text">{note.description}</p>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Noteitem



