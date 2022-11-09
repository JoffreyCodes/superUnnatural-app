import React, {useState, useEffect} from 'react'
import { GetUserNotes } from '../../utils/FetchAPI'

import PlaylistTracks from './PlaylistTracks'

function Playlists(props) {
  const [userSavedNotes, setUserSavedNotes] = useState({})
  const [userSavedNotesLoaded, setUserSavedNotesLoaded] = useState(false)
  
  const spIdToken = sessionStorage.getItem('spotify_id')

  const getUserSavedNotes = async (spId) => {
    try {
      const userSavedNotes = await GetUserNotes(spId)
      setUserSavedNotes(userSavedNotes)
      setUserSavedNotesLoaded(true)    
    } catch (error) {
      console.log(error)
    }    
  }

  useEffect(() => {    
    if (typeof spIdToken !== 'undefined') {getUserSavedNotes(spIdToken)}
  }, [spIdToken])
  return (
    <>
      {props.snDataLoaded && userSavedNotesLoaded ?
        props.snData.map((workout,key) => {
          return (
            <div className="playlist container" key={key} onClick={()=>{props.setSelectedWorkout(workout)}}>
              <PlaylistTracks
                userSavedNotes={userSavedNotes}
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
