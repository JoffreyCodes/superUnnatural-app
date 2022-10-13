import React, { useState } from 'react'

import Playlists from './Playlist-Panel/Playlists'
import SpotifyPanel from './SpotifyPanel/SpotifyPanel'
import WorkoutDetails from './Workout-Panel/WorkoutDetails'


function Layout(props) {
  const [trackClickId, setTrackClick] = useState()
  const [selectedWorkout, setSelectedWorkout] = useState()
  const [trackListDataLoaded, setTrackListDataLoaded] = useState(false)

  return (
    <>
      <div className="row layout">
      <div className="col layout details">
          <WorkoutDetails selectedWorkout={selectedWorkout}
            snData={props.snData}
            snDataLoaded={props.snDataLoaded}
        />
        </div>
        <div className="col layout spotify">
          <SpotifyPanel trackClickId={trackClickId}
            selectedWorkout={selectedWorkout}
            snDataLoaded={props.snDataLoaded}
            trackListDataLoaded={trackListDataLoaded}
            snData={props.snData}
        />
        </div>

        <div className="col layout playlist">
          <Playlists snData={props.snData}
            snDataLoaded={props.snDataLoaded}
            setTrackClick={setTrackClick}
            setSelectedWorkout={setSelectedWorkout}
            setTrackListDataLoaded={setTrackListDataLoaded}
          />
        </div>
      </div>
    </>
    
  )
}

export default Layout