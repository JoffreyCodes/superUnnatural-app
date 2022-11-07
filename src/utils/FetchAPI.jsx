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

// export const PostUserNote =  (spUserId) => {
//   async function getData() {
//     const userNotesEndpoint = API_ENDPOINT + '/userNotes'

//     const form = new FormData();
//     form.append('SpUserId', 1)
//     const res = await axios.post(API_ENDPOINT + `/userNotes`, form, {
//       headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}` }
//     })
//     const res = axios({
//       method: "GET",
//       url: userNotesEndpoint,
//       data: form,
//       headers: {
//         'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
//       },
//     })
//       .then(function (response) {
//         //handle success
//         console.log(response);
//       })
//       .catch(function (response) {
//         //handle error
//         console.log(response);
//       });

