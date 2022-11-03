import React from 'react'

function NoteModal(props) {
  const showHideClassName = props.showNoteModal ? "modal display-block" : "modal display-none";
  const handleClose = () => {
    props.setShowNoteModal(false)
  }
  return (
    <div className={showHideClassName}>
        <div className="modal-main">
          <button type="button" onClick={handleClose}>
            Close
          </button>
      </div>
    </div>
  )
}

export default NoteModal