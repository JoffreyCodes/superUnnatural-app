import React from 'react'
 
import PlaylistTracks from './PlaylistTracks'

function Playlists(props) {

  return (
    <>
      {props.snDataLoaded ?
        props.snData.map((workout,key) => {
          return (
            <div key={key}>
              <PlaylistTracks spotifyPlaylistId={workout.spotifyPlaylistId} />
            </div>)
        }) : "loading..."}
    </>
    )
  }

export default Playlists
