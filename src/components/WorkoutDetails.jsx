import React from 'react'

function WorkoutDetails(props) {
  const data = props.selectedWorkout ? props.selectedWorkout :
    props.snDataLoaded ? props.snData[0] : null
  const albumId = props.snDataLoaded ? `img-${data.spotifyPlaylistId}` : null
  const albumImg = document.getElementById(albumId)
  const albumImgSrc = albumImg ? albumImg.src : null
  return (
    <>
      {props.snDataLoaded ?
        <>
          <img className="workout-detail-album" src={albumImgSrc} alt={albumId}></img>
          <h1>{data.title}</h1>
          <p>Last Played: {data.lastPlayed}</p>
          <p>Released: {data.launchDate}</p>
          <p>Bookmarked: {data.isFavorite.toString()}</p>
          <p>Duration: {data.duration}</p>
          <p>Type: {data.workoutType}</p>
          <p>Intensity: {data.intensity}</p>
          <p>{data.description}</p>
        </>
        :
        <p>loading...</p>
      }
    </>
  )
}

export default WorkoutDetails