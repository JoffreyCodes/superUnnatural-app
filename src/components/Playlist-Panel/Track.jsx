import React, {useState, useEffect} from 'react'
import { UserAddTrackToSave, UserDelTrackToSave } from '../../utils/FetchSpotifyAPI'

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
            UserAddTrackToSave(trackObj.track.id)  
        } else if (!isSaved && stateChange) {
            UserDelTrackToSave(trackObj.track.id)          
        }  
      } catch (error) {
        console.log(error)
        window.location.replace('/')
      }
    }
    addOrRemoveTrackFromSpotify(isSaved)
  },[isSaved, trackObj.track.id, stateChange])
  return (
    <>
      <div className="row track">
        <div className="col track left">
          <img src={trackObj.track.album.images[2].url} alt={trackObj.track.name}></img>
        </div>
        <div className="col track mid">
          <div className="row track info top">{trackObj.track.name}</div>
          <div className="row track info bottom">{trackObj.track.artists[0].name}</div>
        </div>
        <div className="col track right">{isSaved.toString()}
          <input type="checkbox" checked={isSaved} onChange={ handleCheckboxClick }></input>
        </div>
      </div>
    </>
  )
}


export default Track