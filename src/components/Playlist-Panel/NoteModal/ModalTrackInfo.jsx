import React from 'react'
import Heartbox from '../Heartbox'
import PreviewPlayer from '../PreviewPlayer'

function ModalTrackInfo(props) {
  const trackObj = props.trackObj

  const handleTrackClick = () => {
    props.setTrackClick(props.id)
  }
  return (
    <div className="modal-track-container">
      <div className="album-image-modal-container" onClick={handleTrackClick}>
        <img className="album-image-modal" src={trackObj.track.album.images[1].url} alt={trackObj.track.name} />
      </div>
      <div className="track-display-container" onClick={handleTrackClick}>
        <div className="track-display-modal">
          <div className="track-display-info">
            <p className="track-info-title-modal">{trackObj.track.name}</p>
            <p className="track-info-artist-modal">{trackObj.track.artists[0].name}</p>
          </div>
          <div className="track-display-btns">
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
  )
}

export default ModalTrackInfo