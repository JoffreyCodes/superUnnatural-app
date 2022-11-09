import React, {useState} from 'react'
import { DeleteUserNote, UpdateUserNote } from '../../../utils/FetchAPI'
function NoteDisplay({setReloadNotes, content, noteId, created }) {
  const [updateContent, setUpdateContent] = useState(content)
  const [editMode, setEditMode] = useState(false)
  const modCreated = created.slice(0, -13)
  
  const handleDelete = async () => {
    try {
      const status = await DeleteUserNote(noteId)
      if (status === 200) {
        setReloadNotes(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = () => {
    setEditMode(true)
    setUpdateContent(content)
  }
  const saveEdit = async () => {
    try{
    const status = await UpdateUserNote(noteId, updateContent)
      if (status === 200) {
        setReloadNotes(true)
        setEditMode(false)
    }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="note-container" >
      <div className="note-flexbox">
        <div className='note-created-row'>
        {modCreated}
        </div>
        <div className='note-content-row'>
          {editMode ? 
            <textarea
              className='edit-note-text'
              type="text"
              disabled={!editMode}
              defaultValue={updateContent ? updateContent : ''}
              onChange={(e) => setUpdateContent(e.target.value)}
            />
            :
            content
          }
        </div>
        <div className='note-btns-row'>
          <div className="note-btns-flexbox">
            {editMode ?
              <div className='note-edit-btn-container' >
              <button className='note-edit-btn' onClick={saveEdit}>
                <strong>save</strong>
              </button>
            </div>
            :
            <div className='note-edit-btn-container' >
              <button className='note-edit-btn' onClick={handleEdit}>
                <strong>edit</strong>
              </button>
            </div>}
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