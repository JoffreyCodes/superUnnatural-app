import React, { useEffect, useState } from 'react'
import CreateNoteDisplay from './CreateNoteDisplay'
import UserNoteDisplay from './UserNoteDisplay'
import './style.css'

function NotePullDownLayout(props) {
  const [reloadNotes, setReloadNotes] = useState(false)
  
  useEffect(() => {
    if (props.showNotePulldown) {
      setReloadNotes(true)
    }
  }, [props.showNotePulldown])
  
  return (
    <div className="note-pulldown-flexbox">
      <div className="user-notes-container">
        <UserNoteDisplay trackObj={props.trackObj}
          reloadNotes={reloadNotes}
          setReloadNotes={setReloadNotes}
          setHasNote={props.setHasNote}
        />
      </div>
      <div className="create-note-container">
        <CreateNoteDisplay trackObj={props.trackObj}
          setReloadNotes={setReloadNotes}
        />
      </div>
    </div>
  )
}

export default NotePullDownLayout