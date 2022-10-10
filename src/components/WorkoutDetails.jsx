import React from 'react'

function WorkoutDetails(props) {
  const data = props.selectedWorkout
  const dataAlbumId = `img-${data.spotifyPlaylistId}`
  const dataAlbumImage = document.getElementById(dataAlbumId)
  const dataAlbumURL = dataAlbumImage ? dataAlbumImage.src : null
  
  const albumId = props.snDataLoaded ? `img-${props.snData[0].spotifyPlaylistId}` : null
  const albumImage = document.getElementById(albumId)
  const albumURL = albumImage ? albumImage.src : null
  
  return (
    <>
      {props.snDataLoaded && !props.selectedWorkout ?
        <>        
          <img className="workout-detail-album" src={albumURL} alt={albumId}></img>
          <h1>{props.snData[0].title}</h1>
          <p>{props.snData[0].description}</p>      
        </>
      :
        props.selectedWorkout ?
          <>
            <img className="workout-detail-album" src={dataAlbumURL} alt={dataAlbumId}></img>
            <h1>{data.title}</h1>
            <p>{data.description}</p>   
          </>  
        :
          <p>loading...</p>
      }
    </>
  )
}

export default WorkoutDetails