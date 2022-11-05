import ProjectContext from "./projectContext";
import React, { useState } from 'react'

const Pro_State = (props) => {
  const proInitial = []
  const host = "http://localhost:5000"
  const authtoken = localStorage.getItem('token');
  const [all_projects, setall_projects] = useState(proInitial)
  const [checK_loginOr_not, set_checK_loginOr_not] = useState(false);
  const [facelogin_email, set_facelogin_email] = useState("");
  const[listview, set_listview] = useState(false);
  const [addproEmployeData, setaddproEmployeData] = useState([
        { employename: '', employerole: '', employeemail: ''},
    ])

  const [show_alert, set_show_alert] = useState(null);
  // show_alert call in navbar and when we need to use alert we use display_alert function
  const display_alert = (message, type) =>{
    set_show_alert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      set_show_alert(null);
    }, 2500);

  }



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
    else {
      display_alert("Please Login/Signup to access all functionlity", "warning");
    }
  }

  // Add a Project
  const addProject = async (Projectname, description, tag, progess ,githublink, pro_enddate) => {
    // TODO: API Call
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/addproject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ Projectname, description, tag, progess, githublink, pro_enddate })
      });

      const pro = await response.json();
      // old project me new node add karo  // Logic to add in client
      setall_projects(all_projects.concat(pro));
    }
    else {
      display_alert("Please Login/Signup to add Project", "warning");
    }
  }

  // Delete a Project
  const deleteProject = async (id) => {
    // API Call
    if (checK_loginOr_not) {
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
    else {
      display_alert("Please Login/Signup to delete Project", "warning");
    }
  }

  // Edit a Project
  const editProject = async (id, Projectname, description, tag, progess, githublink, pro_enddate) => {
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/updateproject/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ Projectname, description, tag, progess, githublink, pro_enddate })
      });
      const json = await response.json();
      console.log(json);

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
          break;
        }
      }
      setall_projects(newproj);
    }
    else {
      display_alert("Please Login/Signup to update Project", "warning");
    }
  }

  return (
    <ProjectContext.Provider value={{ all_projects, addProject, deleteProject, editProject, set_checK_loginOr_not, getProjects, checK_loginOr_not, show_alert, display_alert, set_listview, listview, facelogin_email, set_facelogin_email, addproEmployeData, setaddproEmployeData}}>
      {props.children}
    </ProjectContext.Provider>
  )

}
export default Pro_State;