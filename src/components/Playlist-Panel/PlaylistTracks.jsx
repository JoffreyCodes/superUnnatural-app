import React, {useState, useEffect} from 'react'
import { FetchPlaylistData, UserSavedTrack } from '../../utils/FetchSpotifyAPI'
import PlaylistBanner from './PlaylistBanner'
import Track from './Track'

function PlaylistTracks(props) {
  const spotifyPlaylistId = props.spotifyPlaylistId
  const [trackListData, setTrackListData] = useState({})
  const [trackListDataLoaded, setTrackListDataLoaded] = useState(false)


  
  const getTrackListData = async(spotifyPlaylistId) => {
    try {
      setTrackListDataLoaded(false)
      let data = await FetchPlaylistData(spotifyPlaylistId)
      data.tracks.items.map((track, i) => track['user_saved'] = false)
      const trackIdList = data.tracks.items.map(trackObj => trackObj.track.id)
      const userSavedData = await UserSavedTrack(trackIdList)
      data.tracks.items.map((track,i)=>track['user_saved'] = userSavedData[i])
      setTrackListData(data)
      setTrackListDataLoaded(true)
    } catch (error) {
      console.log(error)
      window.location.replace('/')
    }
  }

  useEffect(() => {
    getTrackListData(spotifyPlaylistId)
  }, [spotifyPlaylistId])


  return (
    <>
      <PlaylistBanner trackListDataLoaded={trackListDataLoaded} trackListData={trackListData} />
      {trackListDataLoaded ? trackListData.tracks.items.map((trackObj, key) => {
        return (
          <div className="row track container" key={key}>
            <Track id={trackObj.track.id}
              trackObj={trackObj}
              setTrackClick={props.setTrackClick}
            />
          </div>)
      }): "loading..."}  
      

    </>
  )
}

export default PlaylistTracks