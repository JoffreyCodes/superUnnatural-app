import React, { useState, useEffect }from 'react'
import {FaRegStickyNote, FaStickyNote} from  'react-icons/fa'

function Note(props) {
  const [hasNote, setHasNote] = useState(false)
  const [showNoteModal, setShowNoteModal] = useState(false)

  const handleCheckboxClick = () => {
    setShowNoteModal(true)
  }

  return (
    <div className="note-container" onClick={handleCheckboxClick}>
      { hasNote ?
          <FaStickyNote className="note filled" size='3em' />
      :
          <FaRegStickyNote className="note unfilled" size='3em' />
      }
    </div>
  )
}

export default Note