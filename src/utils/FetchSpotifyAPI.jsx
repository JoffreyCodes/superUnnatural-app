import axios from 'axios'
import { PREVIEW_MODE } from '../auth/auth';
import { PREVIEW_SN_SAVED_TRACKS, PREVIEW_SN_TRACKLIST_DATA, PREVIEW_SP_PROFILE } from './PreviewData';

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
  if(PREVIEW_MODE) return PREVIEW_SN_TRACKLIST_DATA
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
  if(PREVIEW_MODE) return PREVIEW_SN_SAVED_TRACKS
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

export const GetCurrUserSpProfile = () => {
  if(PREVIEW_MODE) return PREVIEW_SP_PROFILE

  const USER_GET = `https://api.spotify.com/v1/me`
  async function getData(){
    const response = await axios.get(USER_GET, {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      }
    })
    return response.data
  }
  return getData()
}