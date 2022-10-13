import React from 'react'
 
import PlaylistTracks from './PlaylistTracks'

function Playlists(props) {
  return (
    <>
      {props.snDataLoaded ?
        props.snData.map((workout,key) => {
          return (
            <div className="playlist container" key={key} onClick={()=>{props.setSelectedWorkout(workout)}}>
              <PlaylistTracks
                plId={key}
                workout={workout}
                spotifyPlaylistId={workout.spotifyPlaylistId}
                setTrackClick={props.setTrackClick}
                setTrackListDataLoaded={props.setTrackListDataLoaded}
              />
            </div>)
        }) : "loading..."}
    </>
    )
  }

export default Playlists
