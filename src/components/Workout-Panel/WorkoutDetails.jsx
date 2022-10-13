import React from 'react'

function WorkoutDetails(props) {
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

  console.log(Object.keys(info))
  return (
    <>
      {props.snDataLoaded ?
        <>          
          <img className="workout-detail-album" src={albumImgSrc} alt={albumId}></img>
          <h1>{data.title}</h1>
          <div className="workout details container">
            <></>
          </div>
          <h5>{data.description}</h5>
        </>
        :
        <p>loading...</p>
      }
    </>
  )
}

export default WorkoutDetails