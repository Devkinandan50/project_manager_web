import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Collapse from 'react-bootstrap/Collapse';
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewListIcon from '@mui/icons-material/ViewList';
import ToggleButton from '@mui/material/ToggleButton';

const AddNote = () => {
    const context = useContext(noteContext);

    // context mese add function lekar aao
    const { addNote, set_listview, listview } = context;

    // toggle add button
    const [toggle, setToggle] = useState(false);
    const toggleFunc = React.useCallback(() => {
        setToggle(!toggle)
    });

    // list view and grid view
    const handle_gridview = (e) => {
        e.preventDefault();
        set_listview(false);
    }
    const handle_listview = (e) => {
        e.preventDefault();
        set_listview(true);
    }

    // add note
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        // ...note means jo hai note vo rehene do aur kuch add karna hai then name: value karo input tag me
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="my-3" style={{ display: 'flex', justifyContent: "space-between", width: '100%' }}>
                <Button variant="outlined" onClick={toggleFunc}><IconButton >
                    <AddIcon color="primary" size="large" />
                </IconButton></Button>

                {listview ? (
                    <i onClick={handle_gridview}>
                        <ToggleButton value="list" aria-label="list" color="primary" size="large">
                            <ViewModuleIcon />
                        </ToggleButton></i>
                ) : (
                    <i onClick={handle_listview}>
                        <ToggleButton value="list" aria-label="list" color="primary" size="large">
                            <ViewListIcon />
                        </ToggleButton></i>
                )}
            </div>
            <Collapse in={toggle}>
                <div style={{ color: "Black" }}>
                    <div className="container my-3">
                        <h2>Add a Note</h2>
                        <form className="my-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                                <div id="emailHelp" className="form-text">Name should be atleast 5 characters</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                                <div id="emailHelp" className="form-text">description should be atleast 5 characters</div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                            </div>

                            <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                        </form>
                    </div>
                </div>
            </Collapse>

        </>
    )
}

export default AddNote


