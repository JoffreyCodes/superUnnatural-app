import axios from 'axios'

const TOKEN = sessionStorage.getItem('token')

export const FetchSpotifyData = () => {
  const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
  async function getData(){
    const response = await axios.get(PROFILE_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      }
    })
    return response.data
  }
  return getData()
}

export const FetchPlaylistData = (playlistId) => {
  const GET_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${playlistId}`
  async function getData(){
    const response = await axios.get(GET_PLAYLIST_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      }
    })
    return response.data
  }
  return getData()
}

export const UserSavedTrack = (trackIdList) => {
  const GET_USER_SAVED_ENDPOINT = `https://api.spotify.com/v1/me/tracks/contains?ids=${trackIdList.toString()}`
  async function getData(){
    const response = await axios.get(GET_USER_SAVED_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      }
    })
    return response.data
  }
  return getData()
}

export const UserAddTrackToSave = (trackId) => {
  const USER_ADD_TO_SAVE = `https://api.spotify.com/v1/me/tracks/?ids=${trackId}`
  async function getData(){
    await axios.put(USER_ADD_TO_SAVE, {}, {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      }
    })
  }
  return getData()
}

export const UserDelTrackToSave = (trackId) => {
  const USER_DELETE_TO_SAVE = `https://api.spotify.com/v1/me/tracks/?ids=${trackId}`
  async function getData(){
    await axios.delete(USER_DELETE_TO_SAVE, {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      }
    })
  }
  return getData()
}