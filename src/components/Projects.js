import React, { useContext, useEffect, useRef, useState } from 'react'
import ProjectContext from "../context/pro_jects/projectContext"
import Projectitem from './Projectitem';
import AddProject from './AddProject';

const Projects = () => {
    const context = useContext(ProjectContext);
    const { all_projects, editProject, getProjects, checK_loginOr_not } = context;

    // without reload change data
    useEffect(() => {
        getProjects();
      }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [pro, setpro] = useState({id: "", eProjectname: "", edescription: "", etag: "", eprogess:"", egithublink: ""})

    const updatePro = (currentpro) => {
        ref.current.click();
        setpro({id: currentpro._id, eProjectname: currentpro.Projectname, edescription: currentpro.description, etag:currentpro.tag, eprogess:currentpro.progess, egithublink:currentpro.githublink})
    }

    const handleClick = (e)=>{ 
        editProject(pro.id, pro.eProjectname, pro.edescription, pro.etag, pro.eprogess, pro.egithublink)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setpro({...pro, [e.target.name]: e.target.value})
    }

    return (
        <>
            { checK_loginOr_not ? (
                <>
                <AddProject />
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="Projectname" className="form-label">Project Name</label>
                                        <input type="text" className="form-control" id="eProjectname" name="eProjectname" value={pro.eProjectname} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" name="edescription" value={pro.edescription} onChange={onChange} minLength={5} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" value={pro.etag} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="progess" className="form-label">progess</label>
                                        <input type="text" className="form-control" id="eprogess" name="eprogess" value={pro.eprogess} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="githublink" className="form-label">githublink</label>
                                        <input type="text" className="form-control" id="egithublink" name="egithublink" value={pro.egithublink} onChange={onChange} />
                                    </div>
    
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={pro.eProjectname.length<5 || pro.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <h2>You all Projects</h2>
                    <div className="container mx-2">
                        {all_projects.length === 0 && 'No Projects to display'}
                    </div>
                    {/* {all_projects.map((pro) => (
                        <>
                            <div className="col-md-3">
                                <div className="card my-3">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title">{pro.title}</h5>
                                            <i className="far fa-trash-alt mx-2" ></i>
                                            <i className="far fa-edit mx-2" ></i>
                                        </div>
                                        <p className="card-text">{pro.description}</p>
    
                                    </div>
                                </div>
                            </div>
                        </>
                    ))} */}
    
                    {all_projects.map((project_data) => {
                        return <Projectitem key={project_data._id} updateproj={updatePro} proj={project_data} />
                    })}
    
                </div>
                </>
            ) : (
                <div className="my-3">login kar abe</div>
            )}
            
        </>
    )
}

export default Projects
