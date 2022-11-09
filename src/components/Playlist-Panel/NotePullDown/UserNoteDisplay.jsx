import React, { useEffect, useState } from 'react'
import { GetUserNote } from '../../../utils/FetchAPI'
import NoteDisplay from './NoteDisplay'

function UserNoteDisplay(props) {
  // naming convention is 'notes' because each track has a note which can include multiple notes
  const [userNotes, setUserNotes] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  const spotify_id = sessionStorage.getItem('spotify_id')

  const getUserNote = async (spotify_id, snSongId) => {
    try {
      const userNotes = await GetUserNote(spotify_id, snSongId)
      setUserNotes(userNotes)
      setDataLoaded(true)
      props.setNewNoteCreated(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if ((props.trackObj.hasNote && !dataLoaded) || props.newNoteCreated ) {
      getUserNote(spotify_id, props.trackObj.snSongId)
    }
  }, [dataLoaded, props.trackObj.hasNote, userNotes, props.newNoteCreated])
  

  return (
    <div className="user-notes-display">
      <div className="user-note-flexbox">
        {userNotes.map((note,i) => {
            return (
              <div className="user-note-container" key={i}>
                <NoteDisplay Content={note.Content} />
              </div>            
            )
          })}
      </div>
    </div>
  )
}

export default UserNoteDisplay