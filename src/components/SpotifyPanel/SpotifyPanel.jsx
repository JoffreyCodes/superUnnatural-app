import React, {useState, useEffect,useRef} from 'react'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'
import SpotifyPlayer from './SpotifyPlayer'

function SpotifyPanel(props) {
  const [bgColor, setBgColor] = useState("blue")

  useEffect(() => {
    const getBgColor = async () => {
      try {
          const bgColorData = await FetchSpAlbumColor(props.trackClickId)  
          setBgColor(bgColorData.data.color)
      } catch (error) {
        console.log(error)
      }
    }
    getBgColor()
  },[props.trackClickId])


  const styleObj =
    {
      backgroundColor: bgColor
    }
  
  return (      
    props.trackClickId?
      <div style={styleObj}>
        <SpotifyPlayer trackClick={props.trackClickId} />
      </div>
    :'Loading'
  )
}


export default SpotifyPanel