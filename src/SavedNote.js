import React from 'react'
import './SavedNote.css'

function SavedNote(props) {
  return (
    <div className="card">
        <div className="saved_note">
            <p>{props.body}</p>
        </div>
        <div className="control_buttons">
            <div className="edit_div"><button id="edit">edit</button></div>
            <div className="delete_div"><button id="delete">delete</button></div>
        </div>
    </div>
  )
}

export default SavedNote