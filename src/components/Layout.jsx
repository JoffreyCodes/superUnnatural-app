import React, { useState } from 'react'

import Playlists from './Playlist-Panel/Playlists'
import SpotifyPanel from './SpotifyPanel/SpotifyPanel'
import SpotifyPlayer from './SpotifyPanel/SpotifyPlayer'
import WorkoutDetails from './WorkoutDetails'


function Layout(props) {
  const [trackClickId, setTrackClick] = useState()
  return (
    <>
      <div className="row layout">
        <div className="col layout left">
          <SpotifyPanel trackClickId={trackClickId}/>
        </div>
        <div className="col layout mid">
          <Playlists snData={props.snData}
            snDataLoaded={props.snDataLoaded}
            setTrackClick={setTrackClick}
          />
        </div>
        <div className="col layout right">
          <WorkoutDetails snData={props.snData} snDataLoaded={props.snDataLoaded} />
        </div>

      </div>
    </>
    
  )
}

export default Layout