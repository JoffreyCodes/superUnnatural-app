import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Playlists from './Playlist-Panel/Playlists'
import SpotifyPanel from './SpotifyPanel/SpotifyPanel'
import WorkoutPanel from './Workout-Panel/WorkoutPanel'


function Layout(props) {
  const [trackClickId, setTrackClick] = useState()
  const [selectedWorkout, setSelectedWorkout] = useState()
  const [trackListDataLoaded, setTrackListDataLoaded] = useState(false)
  const [spotifyPanelBg, setSpotifyPanelBg] = useState();
  return (
    <>
      <div className="navbar"> <Navbar /> </div>
      <div className="layout">
        <div className="row layout">
          <div className="col layout details">
            {/* <WorkoutPanel selectedWorkout={selectedWorkout}
              snData={props.snData}
              snDataLoaded={props.snDataLoaded}
            /> */}
          </div>
          <div className="col layout spotify" style={{'backgroundColor': spotifyPanelBg}}>
            {/* <SpotifyPanel trackClickId={trackClickId}
              selectedWorkout={selectedWorkout}
              snDataLoaded={props.snDataLoaded}
              trackListDataLoaded={trackListDataLoaded}
              snData={props.snData}
              setSpotifyPanelBg={setSpotifyPanelBg}
            /> */}
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