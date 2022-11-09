import React, {useState, useEffect} from 'react'
import { FetchPlaylistData, UserSavedTrack } from '../../utils/FetchSpotifyAPI'
import PlaylistBanner from './PlaylistBanner'
import Track from './Track'
import { PUBLIC_URL } from '../../auth/auth'

function PlaylistTracks(props) {
  const spotifyPlaylistId = props.spotifyPlaylistId
  const [trackListData, setTrackListData] = useState({})
  const [trackListDataLoaded, setTrackListDataLoaded] = useState(false)
  const [userSavedData, setUserSavedData] = useState([])
  const [userSavedDataLoaded, setUserSavedDataLoaded] = useState(false)
  const [trackListMod, setTrackListMod] = useState({})
  const [trackListModLoaded, setTrackListModLoaded] = useState(false)

  const getTrackListData = async(spotifyPlaylistId) => {
    try {
      const data = await FetchPlaylistData(spotifyPlaylistId)
      setTrackListData(data)
      setTrackListDataLoaded(true)   
      props.setTrackListDataLoaded(true)    

    } catch (error) {
      console.log(error)
      window.location.replace(PUBLIC_URL)
    }
  }

  const getUserSavedData = async () => {
    try {
      const trackIdList = trackListData.tracks.items.map(trackObj => trackObj.track.id)
      const userSavedData = await UserSavedTrack(trackIdList)
      setUserSavedData(userSavedData)
      setUserSavedDataLoaded(true)    
    } catch (error) {
      console.log(error)
      window.location.replace(PUBLIC_URL)
    }    
  }


  const modifyTrackList = () => {
    const snSongIdList = props.workout.snSongIdList
    const userSavedNotesList = props.userSavedNotes.map((id)=>id.SnTrackId)
    const trackItems = trackListData.tracks.items    

    for (let i = 0; i < trackItems.length; i++){
      trackItems[i]['user_saved'] = userSavedData[i]
      trackItems[i]['snSongId'] = snSongIdList[i]
      trackItems[i]['workoutId'] = props.workout.workoutId
      trackItems[i]['hasNote'] = userSavedNotesList.includes(trackItems[i]['snSongId']) ? true : false
    }
    setTrackListMod(trackItems)
    setTrackListModLoaded(true)
  }

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    if (typeof token !== 'undefined') { getTrackListData(spotifyPlaylistId) }
  }, [token])

  useEffect(() => {
    if (trackListDataLoaded) { getUserSavedData() }
  }, [trackListDataLoaded])

  useEffect(() => {
    if (userSavedDataLoaded) { modifyTrackList()}
  }, [userSavedDataLoaded])
  
  return (
    <>
      <PlaylistBanner
        plId={props.plId}
        workout={props.workout}
        trackListDataLoaded={trackListDataLoaded}
        trackListData={trackListData} />
      {trackListModLoaded ? trackListMod.map((trackObj, key) => {
        return (
          <div key={key} className={`row-track-container pl-${props.plId} tr-${key}`} id={trackObj.track.id} >
            <Track
              key={key}
              trackObj={trackObj}
              setTrackClick={props.setTrackClick}
              id={trackObj.track.id}
            />  
          </div>
        )
      }): "loading..."}
    </>
  )
}

export default PlaylistTracks