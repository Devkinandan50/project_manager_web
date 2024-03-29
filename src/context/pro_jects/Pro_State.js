import ProjectContext from "./projectContext";
import React, { useState } from 'react'

const Pro_State = (props) => {
  const proInitial = []


  const host = "http://localhost:5000"
  // const host = "https://projectmanagebackend.onrender.com"

  
  const authtoken = localStorage.getItem('token');
  const [all_projects, setall_projects] = useState(proInitial)
  const [checK_loginOr_not, set_checK_loginOr_not] = useState(false);
  const [facelogin_email, set_facelogin_email] = useState("");
  const[listview, set_listview] = useState(false);
  const [addproEmployeData, setaddproEmployeData] = useState([
        { employename: '', employerole: '', employeemail: ''},
    ])

  



  // Get all Projects
  const getProjects = async () => {
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/fetchallprojects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        }
      });
      const json = await response.json()
      // console.log(json)
      setall_projects(json);
    }
  }

  // Add a Project
  const addProject = async (Projectname, description, tag, progess ,githublink, pro_enddate, project_members, project_tasks) => {
    // TODO: API Call
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/addproject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ Projectname, description, tag, progess, githublink, pro_enddate, project_members, project_tasks })
      });

      const pro = await response.json();
      // old project me new node add karo  // Logic to add in client
      setall_projects(all_projects.concat(pro));
    }
  }

  // Delete a Project
  const deleteProject = async (id) => {
    // API Call
    if (checK_loginOr_not) {
      if(window.confirm("You want to delete this Project")){
        const response = await fetch(`${host}/api/projects/deleteproject/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": authtoken
          }
        });
        const json = response.json();
        console.log(json);
  
        // agar id == id_of_delete then not filter that node    // Logic to delete in client
        const newprojects = all_projects.filter((po) => { return po._id !== id })
        setall_projects(newprojects);
      }
    }
  }

  // Edit a Project
  const editProject = async (id, Projectname, description, tag, progess, githublink, pro_enddate, project_members, project_tasks) => {
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/updateproject/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ Projectname, description, tag, progess, githublink, pro_enddate, project_members, project_tasks})
      });
      const json = await response.json();
      // console.log(json);

      let newproj = JSON.parse(JSON.stringify(all_projects))

      // Logic to edit in client
      for (let index = 0; index < newproj.length; index++) {
        const element = newproj[index];
        if (element._id === id) {
          newproj[index].Projectname = Projectname;
          newproj[index].description = description;
          newproj[index].tag = tag;
          newproj[index].progess = progess;
          newproj[index].githublink = githublink;
          newproj[index].pro_enddate = pro_enddate;
          newproj[index].project_members = project_members;
          newproj[index].project_tasks = project_tasks;
          break;
        }
      }
      setall_projects(newproj);
    }
  }

  return (
    <ProjectContext.Provider value={{ host, all_projects, addProject, deleteProject, editProject, set_checK_loginOr_not, getProjects, checK_loginOr_not, set_listview, listview, facelogin_email, set_facelogin_email, addproEmployeData, setaddproEmployeData}}>
      {props.children}
    </ProjectContext.Provider>
  )

}
export default Pro_State;