import NoteContext from "./noteContext";
import React, { useEffect, useState } from 'react'

const NoteState = (props) => {
  const notesInitial = []
  const host = "http://localhost:5000"
  const [notes, setNotes] = useState(notesInitial)
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

  const authtoken = localStorage.getItem('token');

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        }
      });
      const json = await response.json()
      console.log(json)
      setNotes(json);
    }
    else {
      display_alert("Please Login/Signup to access all functionlity", "warning");
    }
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ title, description, tag })
      });

      const note = await response.json();
      // old notes me new node add karo  // Logic to add in client
      setNotes(notes.concat(note));
    }
    else {
      display_alert("Please Login/Signup to add note", "warning");
    }
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        }
      });
      const json = response.json();

      // agar id == id_of_delete then not filter that node    // Logic to delete in client
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes);
    }
    else {
      display_alert("Please Login/Signup to delete note", "warning");
    }
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    if (checK_loginOr_not) {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json();

      let newNotes = JSON.parse(JSON.stringify(notes))

      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    }
    else {
      display_alert("Please Login/Signup to update note", "warning");
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, set_checK_loginOr_not, getNotes, checK_loginOr_not, show_alert, display_alert}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;