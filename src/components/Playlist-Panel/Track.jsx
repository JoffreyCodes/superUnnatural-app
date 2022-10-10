import React from 'react'
import Heartbox from './Heartbox'
import PreviewPlayer from './PreviewPlayer'

function Track(props) {
  const trackObj = props.trackObj

  const handleTrackClick = () => {
    props.setTrackClick(props.id)
  }

  return (
    <>
      <div className="col track left" onClick={handleTrackClick}>
        <img className="album image" src={trackObj.track.album.images[1].url} alt={trackObj.track.name} />
      </div>
      <div className="col track mid" onClick={handleTrackClick}>
        <div className="row track info title">
          <p className="track-info-title">{trackObj.track.name}</p>
        </div>
        <div className="row track info artist">
          <p className="track-info-artist">{trackObj.track.artists[0].name}</p>
        </div>
        <div className="row track info player">
          <PreviewPlayer id={props.id} previewUrl={trackObj.track.preview_url} />      
        </div>
      </div>
      <div className="col track checkbox">
        <Heartbox id={props.trackObj.track.id}
          trackObj={props.trackObj}
        />
      </div>
      
    </>
  )
}


export default Track