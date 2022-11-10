import React, {useState, useEffect} from 'react'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'
import SpotifyPlayer from './SpotifyPlayer'
import SpotifyPlaylistPlayer from './SpotifyPlaylistPlayer'
import './style.css'
import Toggle from './Toggle'

function SpotifyPanel(props) {
  const [trackId, setTrackId] = useState()
  const [trackLock, setTrackLock] = useState(false)
  const [savedTrackId, setSavedTrackId] = useState()

  const [playlistId, setPlaylistId] = useState()
  const [playlistLock, setPlaylistLock] = useState(false)
  const [savedPlaylistId, setSavedPlaylistId] = useState()

  const currTrackId = props.trackClickId ? props.trackClickId : props.firstTrack 
  const currPlaylistId = props.selectedWorkout ? props.selectedWorkout.spotifyPlaylistId : props.firstPlaylist 
  // alpha val used to lighten the retrieved color
  const alphaVal = 99

  useEffect(() => {
    if (trackId) {
      const getBgColor = async () => {
        try {
          const bgColorData = await FetchSpAlbumColor(trackId)
          const bgColor = bgColorData.data.color + alphaVal.toString()
          props.setSpotifyPanelBg(bgColor)
        } catch (error) {
          console.log(error)
        }
      }
      getBgColor()
    }    
  }, [props, trackId])

  useEffect(() => {
    trackLock ? setTrackId(savedTrackId) : setTrackId(currTrackId)  
  },[currTrackId, savedTrackId, trackLock])

  useEffect(() => {
    playlistLock ? setPlaylistId(savedPlaylistId) : setPlaylistId(currPlaylistId)
  },[currPlaylistId, playlistLock, savedPlaylistId])

  return (      
    props.trackListDataLoaded ? 
      <div className="spotify-panel-layout-container" >
        <SpotifyPlayer trackClick={trackId} />
        <div className="control-btns-container"> 
          <div className="track-lock-btn-container">
            <Toggle label={'Track Lock'}
              toggleState={setTrackLock}
              data={trackId}
              setState={setSavedTrackId}
            />
          </div>
          <div className="playlist-lock-btn-container">
            <Toggle label={'Playlist Lock'}
              toggleState={setPlaylistLock}
              data={playlistId}
              setState={setSavedPlaylistId}
            />
          </div>
        </div>
        <SpotifyPlaylistPlayer selectedWorkout={playlistId}  />
      </div>
    :'Loading'
  )
}


export default SpotifyPanel