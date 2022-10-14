import React, { useState } from 'react'

import Playlists from './Playlist-Panel/Playlists'
import SpotifyPanel from './SpotifyPanel/SpotifyPanel'
import WorkoutDetails from './Workout-Panel/WorkoutDetails'


function Layout(props) {
  const [trackClickId, setTrackClick] = useState()
  const [selectedWorkout, setSelectedWorkout] = useState()
  const [trackListDataLoaded, setTrackListDataLoaded] = useState(false)
  const [spotifyPanelBg, setSpotifyPanelBg] = useState();
  console.log()
  return (
    <>
      <div className="layout">
        <div className="row layout">
          <div className="col layout details">
            <WorkoutDetails selectedWorkout={selectedWorkout}
              snData={props.snData}
              snDataLoaded={props.snDataLoaded}
            />
          </div>
          <div className="col layout spotify" style={{'backgroundColor': spotifyPanelBg}}>
            <SpotifyPanel trackClickId={trackClickId}
              selectedWorkout={selectedWorkout}
              snDataLoaded={props.snDataLoaded}
              trackListDataLoaded={trackListDataLoaded}
              snData={props.snData}
              setSpotifyPanelBg={setSpotifyPanelBg}
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
      </div>
    </>
    
  )
}

export default Layout