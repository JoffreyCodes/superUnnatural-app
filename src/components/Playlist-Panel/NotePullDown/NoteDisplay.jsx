import React from 'react'
import { DeleteUserNote } from '../../../utils/FetchAPI'
function NoteDisplay({setReloadNotes, content, noteId, created }) {
  const handleDelete = async() => {
    try {
      const status = await DeleteUserNote(noteId)
      if (status === 200) {
        setReloadNotes(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="note-container">
      <div className="note-flexbox">
        <div className='note-created-row'>
        {created}
        </div>
        <div className='note-content-row'>
        {content}
        </div>
        <div className='note-btns-row'>
          <div className="note-btns-flexbox">
            <div className='note-edit-btn-container'>
              <button className='note-edit-btn'>
                <strong>edit</strong>
              </button>
            </div>
            <div className='note-delete-btn-container'>
              <button className='note-delete-btn' onClick={handleDelete}>
                <strong>delete</strong>
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default NoteDisplay