import React, {useState, useEffect} from 'react'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'
import SpotifyPlayer from './SpotifyPlayer'

function SpotifyPanel(props) {
  const [bgColor, setBgColor] = useState("blue")

  useEffect(() => {
    if (props.trackClickId) {
      const getBgColor = async () => {
        try {
            const bgColorData = await FetchSpAlbumColor(props.trackClickId)  
            setBgColor(bgColorData.data.color)
        } catch (error) {
          console.log(error)
        }
      }
      getBgColor()
    }    
  }, [props.trackClickId, bgColor])
  
  const styleObj =
    {
      backgroundColor: bgColor
    }
  
  return (      
    props.trackClickId ?
      <div className="spotify container"style={styleObj}>
        <SpotifyPlayer trackClick={props.trackClickId} />
      </div>
    :'Loading'
  )
}


export default SpotifyPanel