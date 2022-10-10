import React, { useState } from 'react'

import Playlists from './Playlist-Panel/Playlists'
import SpotifyPanel from './SpotifyPanel/SpotifyPanel'
import WorkoutDetails from './WorkoutDetails'


function Layout(props) {
  const [trackClickId, setTrackClick] = useState()
  return (
    <>
      <div className="row layout">
        <div className="col layout left">
          <SpotifyPanel trackClickId={trackClickId}/>
        </div>
        <div className="col layout details">
          <WorkoutDetails snData={props.snData} snDataLoaded={props.snDataLoaded} />
        </div>
        <div className="col layout playlist">
          <Playlists snData={props.snData}
            snDataLoaded={props.snDataLoaded}
            setTrackClick={setTrackClick}
          />
        </div>
      </div>
    </>
    
  )
}

export default Layout