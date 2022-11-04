import React, { useContext, useState } from 'react'
import ProjectContext from "../../context/pro_jects/projectContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import AddProMember from './AddProMember';

const Add_newpro = () => {
    const context = useContext(ProjectContext);

    // context mese add function lekar aao
    const { addProject } = context;

    // add Project
    const [pro, setpro] = useState({ Projectname: "", description: "", tag: "", progess: "", pro_enddate: "", githublink: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addProject(pro.Projectname, pro.description, pro.tag, pro.progess, pro.githublink, pro.pro_enddate);
        setpro({ Projectname: "", description: "", tag: "", progess: "", githublink: "", pro_enddate: "" })
    }

    const onChange = (e) => {
        // ...Project means jo hai pro vo rehene do aur kuch add karna hai then name: value karo input tag me
        setpro({ ...pro, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div style={{ color: "Black" }}>
                <div className="container my-3">
                    <h2>Add a Project</h2>
                    <form className="my-3">
                        <div className="mb-3">
                            <label htmlFor="Projectname" className="form-label">ProjectName</label>
                            <input type="text" className="form-control" id="Projectname" name="Projectname" aria-describedby="emailHelp" value={pro.Projectname} onChange={onChange} minLength={5} maxLength={15} required />
                            <div id="emailHelp" className="form-text">Name should be between 5-15 characters</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name="description" value={pro.description} onChange={onChange} minLength={5} required />
                            <div id="emailHelp" className="form-text">description should be atleast 5 characters</div>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="tag" name="tag" value={pro.tag} onChange={onChange} minLength={5} required />
                            <div id="emailHelp" className="form-text">Tag should be only one word </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="progess" className="form-label">Progess</label>
                            <input type="number" className="form-control" id="progess" name="progess" value={pro.progess} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pro_enddate" className="form-label">Project End Date</label>
                            <input type="date" className="form-control" id="pro_enddate" name="pro_enddate" value={pro.pro_enddate} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="githublink" className="form-label">githublink</label>
                            <input type="text" className="form-control" id="githublink" name="githublink" value={pro.githublink} onChange={onChange} minLength={5} required />
                        </div>

                        <AddProMember />
                        
                        <h5>Add a Project task</h5>

                        <button disabled={pro.Projectname.length < 5 || pro.description.length < 5 || pro.progess.length <= 1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Project</button>
                        <div id="emailHelp" className="form-text"> to enable button add project name, description, progess</div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Add_newpro

