import React, {useEffect} from 'react'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'
import SpotifyPlayer from './SpotifyPlayer'
import SpotifyPlaylistPlayer from './SpotifyPlaylistPlayer'

function SpotifyPanel(props) {

  const track = document.getElementsByClassName("row track container pl-0 tr-0")
  const trackId = props.trackClickId ? props.trackClickId :
    track[0] ?  track[0].id : null 
  
  const playlist = document.getElementsByClassName("row playlist banner pl-0")
  const playlistId = props.selectedWorkout ? props.selectedWorkout.spotifyPlaylistId :
    playlist[0] ? playlist[0].id : null 
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