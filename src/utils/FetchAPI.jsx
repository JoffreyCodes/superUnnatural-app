import axios from 'axios';
const FormData = require('form-data');

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

export const GetUserNotes =  (spUserId) => {
  async function getData() {
    const userNotesEndpoint = API_ENDPOINT + '/userNotes/' + spUserId
    const res = await axios.get(userNotesEndpoint, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return res.data
  }
  return getData()
}

export const GetUserNote =  (spUserId, snSongId) => {
  async function getData() {
    const userNotesEndpoint = API_ENDPOINT+'/userNote/'+spUserId+'/'+snSongId 
    const res = await axios.get(userNotesEndpoint, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return res.data
  }
  return getData()
}

export const UpdateUserNote =  (noteId, newContent) => {
  async function getData() {
    const userNotesEndpoint = API_ENDPOINT + '/userNote'
    const form = new FormData();
    form.append('NoteId', noteId)
    form.append('Content', newContent)
    const res = await axios.put(userNotesEndpoint, form, {
      headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}` }
    })
    return res.status
  }
  return getData();
}
export const PostUserNote =  (SpUserId,SnWorkoutId, SnTrackId, Content) => {
  async function getData() {
    const userNotesEndpoint = API_ENDPOINT + '/userNote'
    const form = new FormData();
    form.append('SpUserId', SpUserId)
    form.append('SnWorkoutId', SnWorkoutId)
    form.append('SnTrackId', SnTrackId)
    form.append('Content', Content)
    const res = await axios.post(userNotesEndpoint, form, {
      headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}` }
    })
    return res.status
  }
  return getData();
}
export const DeleteUserNote = (noteId) => {
  async function getData() {
    const deleteNoteEndpoint = API_ENDPOINT + `/delUserNote/${noteId}`
    const res = await axios.delete(deleteNoteEndpoint, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return res.status
  }
  return getData();
}
  

