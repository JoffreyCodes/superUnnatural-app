import React, {useState} from 'react'
import { BiSend } from 'react-icons/bi'
import { PostUserNote } from '../../../utils/FetchAPI';


function CreateNoteDisplay(props) {
  const [newNoteText, setNewNoteText] = useState('')
  const handleSubmit = async () => {
    const userSpId = sessionStorage.getItem('spotify_id')
    if (newNoteText) {
      try {
        const status = await PostUserNote(userSpId, props.trackObj.workoutId, props.trackObj.snSongId, newNoteText)
        if (status === 200) {
          setNewNoteText('')
          props.setNewNoteCreated(true)
        }
      } catch (error) {
          console.log(error)
      } 
    }    
  }
  return (
    <div className="create-note-flexbox">
      <div className="text-area-container">
        <form className="new-note-form">
          <input type="text"
            className="new-note-textbox"
            placeholder="add note"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
          />
          </form>   
      </div>
      <div className="submit-btn-container" >
        <BiSend className="submit-btn" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default CreateNoteDisplay