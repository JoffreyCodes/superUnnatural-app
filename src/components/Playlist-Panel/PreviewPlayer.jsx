import React, {useState, useRef} from 'react'

function PreviewPlayer(props) {
  const ref = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const playerId = `PlayerId_${props.id}`

  const handlePlayClick = () => {
    ref.current.play()
    setIsPlaying(!ref.current.paused)
    const audioPlayers = document.getElementsByTagName('audio')
    const playersArray = [...audioPlayers]
    const notPlaying = playersArray.filter(item => {
      if (item !== ref.current) {
        return item
      }
      return null
    })
    notPlaying.map(player => {
      player.pause()
      return null
    })
  }

  const handlePauseClick = () => {
    setIsPlaying(ref.current.paused)
    ref.current.pause()
  }
  const togglePlayPauseBtn = (isPlaying) => {
    return isPlaying ?
      <button id={`pauseBtn ${playerId}`} onClick={handlePauseClick}>Pause</button>
      :<button id={`playBtn ${playerId}`} onClick={handlePlayClick}>Play</button>
  }
  return (
    <>
      {/* <div id={playerId} className="previewPlayerContainer"> */}
        <audio controls id={playerId} ref={ref} onPlay={handlePlayClick}>
          <source src={props.previewUrl} />
        </audio>
      {/* </div> */}
      {/* {togglePlayPauseBtn(isPlaying)} */}
    </>
  )
}

export default PreviewPlayer