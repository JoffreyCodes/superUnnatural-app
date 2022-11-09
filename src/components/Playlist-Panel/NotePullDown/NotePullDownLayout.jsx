import React, { useEffect, useState } from 'react'
import CreateNoteDisplay from './CreateNoteDisplay'
import UserNoteDisplay from './UserNoteDisplay'
import './style.css'

function NotePullDownLayout(props) {
  const [newNoteCreated, setNewNoteCreated] = useState(false)
  return (
    <div className="note-pulldown-flexbox">
      <div className="user-notes-container">
        <UserNoteDisplay trackObj={props.trackObj}
          newNoteCreated={newNoteCreated}
          setNewNoteCreated={setNewNoteCreated}
        />
      </div>
      <div className="create-note-container">
        <CreateNoteDisplay trackObj={props.trackObj}
          newNoteCreated={newNoteCreated}
          setNewNoteCreated={setNewNoteCreated}
        />
      </div>
    </div>
  )
}

export default NotePullDownLayout