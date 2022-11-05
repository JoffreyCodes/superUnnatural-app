import React, { useState, useEffect }from 'react'
import {FaRegStickyNote, FaStickyNote} from  'react-icons/fa'
import NoteModal from './NoteModal'

function Note(props) {
  const [hasNote, setHasNote] = useState(props.hasNote)
  const [showNoteModal, setShowNoteModal] = useState(false)

  const handleCheckboxClick = () => {
    setShowNoteModal(!showNoteModal)
  }


  return (
    <>
      <div className="note-container" onClick={handleCheckboxClick}>
        { hasNote ?
            <FaStickyNote className="note filled" size='3em' />
        :
            <FaRegStickyNote className="note unfilled" size='3em' />
        }
      </div>
      <NoteModal
        showNoteModal={showNoteModal}
        setShowNoteModal={setShowNoteModal}
        snSongId={props.snSongId}
      />
    </>
  )
}

export default Note