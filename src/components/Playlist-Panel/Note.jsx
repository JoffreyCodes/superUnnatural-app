import React from 'react'
import {FaRegStickyNote, FaStickyNote} from  'react-icons/fa'

function Note(props) {
  
  const handleNotelick = () => {
    props.noteClick()
  }

  return (
    <>
      <div className="note-btn-container" onClick={handleNotelick}>
        { props.hasNote ?
          <FaStickyNote className="note filled" size='3em' />
        :
          <FaRegStickyNote className="note unfilled" size='3em' />
        }
      </div>
    </>
  )
}
export default Note