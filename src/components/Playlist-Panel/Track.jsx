import React, {useState, useEffect} from 'react'
import { UserAddTrackToSave, UserDelTrackToSave } from '../../utils/FetchSpotifyAPI'
import PreviewPlayer from './PreviewPlayer'

function Track(props) {
  const [isSaved, setIsSaved] = useState(props.trackObj.user_saved)
  const [stateChange, setStateChange] = useState(0)


  const trackObj = props.trackObj
  const handleCheckboxClick = (e) => {
    setIsSaved(e.target.checked)
    setStateChange(stateChange + 1)
  }
  useEffect(() => {
    function addOrRemoveTrackFromSpotify() {      
      try {
          if (isSaved && stateChange) {
            UserAddTrackToSave(props.id)  
        } else if (!isSaved && stateChange) {
            UserDelTrackToSave(props.id)          
        }  
      } catch (error) {
        console.log(error)
        window.location.replace('/')
      }
    }
    addOrRemoveTrackFromSpotify(isSaved)
  }, [isSaved, props.id, stateChange])

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
          <>{trackObj.track.name}</>
        </div>
        <div className="row track info artist">
          <>{trackObj.track.artists[0].name}</>
        </div>
        <div className="row track info player">
          <PreviewPlayer id={props.id} previewUrl={trackObj.track.preview_url} />      
        </div>
      </div>
      <div className="col track checkbox">
        <input clssName="track checkbox"
          type="checkbox"
          checked={isSaved}
          onChange={handleCheckboxClick}
        />
      </div>
    </>
  )
}


export default Track