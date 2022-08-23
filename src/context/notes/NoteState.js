import NoteContext from "./noteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
  const proInitial = []
  const host = "http://localhost:5000"
  const authtoken = localStorage.getItem('token');
  const [all_projects, setall_projects] = useState(proInitial)
  const [checK_loginOr_not, set_checK_loginOr_not] = useState(false);

  // show_alert call in navbar and when we need to use alert we use display_alert function
  const [show_alert, set_show_alert] = useState(null);
  const display_alert = (message, type) =>{
    set_show_alert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      set_show_alert(null);
    }, 2500);

  }

  const[listview, set_listview] = useState(false);


  // Get all Projects
  const getNotes = async () => {
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
      console.log(json)
      setall_projects(json);
    }
    else {
      display_alert("Please Login/Signup to access all functionlity", "warning");
    }
  }

  // Add a Project
  const addNote = async (Projectname, description, tag, progess ,githublink) => {
    // TODO: API Call
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/addproject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ Projectname, description, tag, progess, githublink })
      });

      const pro = await response.json();
      // old project me new node add karo  // Logic to add in client
      setall_projects(all_projects.concat(pro));
    }
    else {
      display_alert("Please Login/Signup to add note", "warning");
    }
  }

  // Delete a Project
  const deleteNote = async (id) => {
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
      const newprojects = all_projects.filter((note) => { return note._id !== id })
      setall_projects(newprojects);
    }
    else {
      display_alert("Please Login/Signup to delete note", "warning");
    }
  }

  // Edit a Project
  const editNote = async (id, Projectname, description, tag, progess, githublink) => {
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/projects/updateproject/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ Projectname, description, tag, progess, githublink })
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
          break;
        }
      }
      setall_projects(newproj);
    }
    else {
      display_alert("Please Login/Signup to update note", "warning");
    }
  }

  return (
    <NoteContext.Provider value={{ all_projects, addNote, deleteNote, editNote, set_checK_loginOr_not, getNotes, checK_loginOr_not, show_alert, display_alert, set_listview, listview}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;