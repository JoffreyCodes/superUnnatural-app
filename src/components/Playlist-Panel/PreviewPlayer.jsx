import React, {useRef} from 'react'

function PreviewPlayer(props) {
  const ref = useRef()
  const playerId = `PlayerId_${props.id}`

  const handlePlayClick = () => {
    ref.current.play()
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

  return (
    <>
      <audio controls id={playerId} ref={ref} onPlay={handlePlayClick}>
        <source src={props.previewUrl} />
      </audio>
    </>
  )
}

export default PreviewPlayer