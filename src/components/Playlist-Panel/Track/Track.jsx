import React, {useState} from 'react'
import Heartbox from '../Heartbox'
import Note from '../Note'
import NotePullDownLayout from '../NotePullDown/NotePullDownLayout';
import PreviewPlayer from '../PreviewPlayer'
import './style.css'

function Track(props) {
  const [showNotePulldown, setShowNotePulldown] = useState(false);
  const [hasNote, setHasNote] = useState(props.trackObj.hasNote)

  const trackObj = props.trackObj

  const handleTrackClick = () => {
    props.setTrackClick(props.id)
  }

  const handleNoteClick = () =>{
    setShowNotePulldown(!showNotePulldown)
  }

  return (
    <div className="track-container"> 
    <div className="track-flexbox">
      <div className="album-image-container" onClick={handleTrackClick}>
        <img className="album-image" src={trackObj.track.album.images[1].url} alt={trackObj.track.name} />
      </div>
      <div className="track-display-container" onClick={handleTrackClick}>
        <div className="track-display">
          <div className="track-display-info">
            <p className="track-info-title">{trackObj.track.name}</p>
            <p className="track-info-artist">{trackObj.track.artists[0].name}</p>
          </div>
          <div className="track-display-btns">
            <Note trackObj={trackObj}
              hasNote={hasNote}
              noteClick={handleNoteClick} />
            <Heartbox id={props.trackObj.track.id}
              trackObj={props.trackObj} 
            />
          </div>
        </div>
        <div className="track-preview-player">
          <PreviewPlayer id={props.id} previewUrl={trackObj.track.preview_url} />      
        </div>
        </div>
      </div>
      {showNotePulldown ?
        <div className="notes-container">
          <NotePullDownLayout
            showNotePulldown = {showNotePulldown}
            setHasNote={setHasNote}
            trackObj={trackObj}
          />
        </div>
        : null}
    </div>
  )
}


export default Track