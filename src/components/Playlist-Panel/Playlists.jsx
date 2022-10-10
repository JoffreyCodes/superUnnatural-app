import React from 'react'
 
import PlaylistTracks from './PlaylistTracks'

function Playlists(props) {
  return (
    <>
      {props.snDataLoaded ?
        props.snData.map((workout,key) => {
          return (
            <div key={key} onClick={()=>{props.setSelectedWorkout(workout)}}>
              <PlaylistTracks
                workout={workout}
                spotifyPlaylistId={workout.spotifyPlaylistId}
                setTrackClick={props.setTrackClick}
              />
            </div>)
        }) : "loading..."}
    </>
    )
  }

export default Playlists
