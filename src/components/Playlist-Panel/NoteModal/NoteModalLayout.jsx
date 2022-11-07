import React, { useEffect, useState } from 'react'
import "./NoteModalLayout.css"
import { GetUserNote } from '../../../utils/FetchAPI';
import ModalTrackInfo from './ModalTrackInfo';

function NoteModalLayout(props) {
  // naming convention is 'notes' because each track has a note which can include multiple notes
  const [userNotes, setUserNotes] = useState([])
  const [userNoteLoaded, setUserNoteLoaded] = useState(false)


  const spotify_id = sessionStorage.getItem('spotify_id')
  const showHideClassName = props.showNoteModal ? "modal display-block" : "modal display-none";
  const handleClose = () => {
    props.setShowNoteModal(false)
  }

  const getUserNote = async (spotify_id, snSongId) => {
    try {
      const userNotes = await GetUserNote(spotify_id, snSongId)
      setUserNotes(userNotes)
      setUserNoteLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!userNoteLoaded && props.trackObj.hasNote) {
      getUserNote(spotify_id, props.trackObj.snSongId)
    }
  }, [userNoteLoaded])

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="modal-top">
          <ModalTrackInfo trackObj={ props.trackObj } />
        </div>
        <div className="modal-mid">
          
        </div>
        <div className="modal-btm">
          <div className="text-field-container">

          </div>
          <div className="modal-controllers">
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
        {/* <p>id: {props.snSongId} {spotify_id} </p>
        {userNotes.map((note,i) => {
          return (
            <div className="notes-container" key={i}>
              <p>{note.Content}</p>
            </div>            
          )
        })}
        <button type="button" onClick={handleClose}>
          Close
        </button> */}
      </div>
    </div>
  )
}

export default NoteModalLayout