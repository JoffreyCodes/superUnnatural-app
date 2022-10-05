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
      <div className="row track" >
        <div className="col track left" onClick={handleTrackClick}>
          <img src={trackObj.track.album.images[2].url} alt={trackObj.track.name} />
        </div>
        <div className="col track mid" onClick={handleTrackClick}>
          <div className="row track info top">{trackObj.track.name}</div>
          <div className="row track info bottom">{trackObj.track.artists[0].name}</div>
        </div>
        <div className="col track right">{isSaved.toString()}
          <input type="checkbox" checked={isSaved} onChange={ handleCheckboxClick }></input>
        </div>
      </div>
      <PreviewPlayer id={props.id}
        previewUrl={trackObj.track.preview_url}
      />
    </>
  )
}


export default Track