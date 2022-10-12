import React, {useState, useEffect} from 'react'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'
import SpotifyPlayer from './SpotifyPlayer'

function SpotifyPanel(props) {
  const [bgColor, setBgColor] = useState("white")

  const track = document.getElementsByClassName("row track container pl-0 tr-0")
  const trackId = props.trackClickId ? props.trackClickId :
    track[0] ?  track[0].id : null 
  
  useEffect(() => {
    if (trackId) {
      const getBgColor = async () => {
        try {
            const bgColorData = await FetchSpAlbumColor(trackId)  
            setBgColor(bgColorData.data.color)
        } catch (error) {
          console.log(error)
        }
      }
      getBgColor()
    }    
  }, [trackId, bgColor])
  
  const styleObj =
    {
      backgroundColor: bgColor
  }
  
  return (      
    trackId ? 
      <div className="spotify container"style={styleObj}>
        <SpotifyPlayer trackClick={trackId} />
      </div>
    :'Loading'
  )
}


export default SpotifyPanel