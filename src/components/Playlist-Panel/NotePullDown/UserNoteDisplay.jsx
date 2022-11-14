import React, { useEffect, useState } from 'react'
import { GetUserNote } from '../../../utils/FetchAPI'
import NoteDisplay from './NoteDisplay'

function UserNoteDisplay(props) {
  const [userNotesHx, setUserNotesHx] = useState([])

  const spotify_id = sessionStorage.getItem('spotify_id')

  const getUserNote = async (spotify_id, snSongId) => {
    try {
      const fetch_userNotesHx = await GetUserNote(spotify_id, snSongId)
      fetch_userNotesHx.length === 0  ? props.setHasNote(false) : props.setHasNote(true)
      setUserNotesHx(fetch_userNotesHx)
      props.setReloadNotes(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if ( props.reloadNotes ) {
      getUserNote(spotify_id, props.trackObj.snSongId)
    }
  }, [props.trackObj.hasNote, userNotesHx, props.reloadNotes])
  

  return (
    <div className="user-notes-display">
        {userNotesHx.map((note,i) => {
            return (
              <div className="user-note-container" key={i}>
                <NoteDisplay
                  setReloadNotes={props.setReloadNotes}
                  content={note.Content}
                  created={note.Created}
                  noteId={note.NoteId}
                />
              </div>            
            )
          })}
      </div>
  )
}

export default UserNoteDisplay