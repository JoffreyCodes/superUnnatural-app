import React, {useEffect} from 'react'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'
import SpotifyPlayer from './SpotifyPlayer'
import SpotifyPlaylistPlayer from './SpotifyPlaylistPlayer'
import './style.css'

function SpotifyPanel(props) {

  const trackId = props.trackClickId ? props.trackClickId :
    props.firstTrack ?  props.firstTrack : null 

  const playlistId = props.selectedWorkout ? props.selectedWorkout.spotifyPlaylistId :
    props.firstPlaylist ? props.firstPlaylist : null 
  // alpha val used to lighten to retrieved color
  const alphaVal = 99



  useEffect(() => {
    if (trackId) {
      const getBgColor = async () => {
        try {
            const bgColorData = await FetchSpAlbumColor(trackId)  
            props.setSpotifyPanelBg(bgColorData.data.color+alphaVal.toString())
        } catch (error) {
          console.log(error)
        }
      }
      getBgColor()
    }    
  }, [props, trackId])
  return (      
    props.trackListDataLoaded ? 
      <div className="spotify container" >
        <SpotifyPlayer trackClick={trackId} />
        <SpotifyPlaylistPlayer selectedWorkout={playlistId} />
      </div>
    :'Loading'
  )
}


export default SpotifyPanel