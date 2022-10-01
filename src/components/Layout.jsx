import React from 'react'

import Playlists from './Playlist-Panel/Playlists'
import WorkoutDetails from './WorkoutDetails'


function Layout(props) {
  
  return (
    <>
      <div className="row layout">
        <div className="col layout left">Spotify Player</div>
        <div className="col layout mid">
          <Playlists snData={props.snData} snDataLoaded={props.snDataLoaded} />
        </div>
        <div className="col layout right">
          <WorkoutDetails snData={props.snData} snDataLoaded={props.snDataLoaded} />
        </div>

      </div>
    </>
    
  )
}

export default Layout