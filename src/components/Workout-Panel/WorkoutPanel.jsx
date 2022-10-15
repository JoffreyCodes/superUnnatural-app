import React from 'react'
import WorkoutDetails from './WorkoutDetails'

function WorkoutPanel(props) {
  const data = props.selectedWorkout ? props.selectedWorkout :
    props.snDataLoaded ? props.snData[0] : null
  const albumId = props.snDataLoaded ? `img-${data.spotifyPlaylistId}` : null
  const albumImg = document.getElementById(albumId)
  const albumImgSrc = albumImg ? albumImg.src : null
  
  const info = props.snDataLoaded ? {
    'type': data.workoutType,
    'duration': data.duration,
    'intensity': data.intensity,
    'played:': data.lastPlayed,
    'released': data.launchDate
  } : {}

  return (
    <div className="workout-panel">
      {props.snDataLoaded ?
        <>          
          <img className="workout-album" src={albumImgSrc} alt={albumId}></img>
          <h1>{data.title}</h1>
            <WorkoutDetails info={info} />
          <h5>{data.description}</h5>
        </>
        :
        <p>loading...</p>
      }
    </div>
  )
}

export default WorkoutPanel