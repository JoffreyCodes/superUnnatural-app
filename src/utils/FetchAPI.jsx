import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const FetchSnData =  () => {
  async function getData(){
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return response.data
  }
  return getData()
}

export const FetchSnDataWithId = (sessionId) => {
  async function getData() {
    const sessionIdEndpoint = `/sessionId/${sessionId}`
    const response = await axios.get(API_ENDPOINT + sessionIdEndpoint, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return response.data
  }
  return getData()
}

export const FetchSpAlbumColor =  (trackId) => {
  async function getData(trackId) {
    const response = await axios.get(API_ENDPOINT+`/getColor/${trackId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return response.data
  }
  return getData(trackId)
}