import React,{useState, useEffect} from 'react'
import { GetCurrUserSpProfile } from '../utils/FetchSpotifyAPI'
import { FetchSnDataWithId } from '../utils/FetchAPI'
import { PUBLIC_URL } from '../auth/auth'

import Layout from '../components/Layout'
function Main(props) {
  const [snData, setSnData] = useState({})
  const [snDataLoaded, setSnDataLoaded] = useState(false)
  const [spUserProfileData,setSpUserProfileData] = useState('')
  const [spUserProfileDataLoaded,setSpUserProfileDataLoaded] = useState(false)

  useEffect(() => {
    const getSnDataFromId = async () => {
      const session_id = props.user
      try {
        const snData = await FetchSnDataWithId(session_id)
        setSnData(snData.data)
        setSnDataLoaded(true)  
        sessionStorage.removeItem('InvalidUser')
      } catch (e) {
        console.log(e)
        sessionStorage.setItem('InvalidUser', session_id)
        sessionStorage.removeItem('session_id')
        window.location.replace(PUBLIC_URL)
      }        
    }
    getSnDataFromId()
  }, [props.user])

  const getCurrUserSpProfile = async () => {
    try {
      const fetchSpUserProfileData = await GetCurrUserSpProfile()
      setSpUserProfileData(fetchSpUserProfileData)
      setSpUserProfileDataLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    if (typeof token !== 'undefined') {
      getCurrUserSpProfile()
    }
  }, [token])

  useEffect(() => {
    if (spUserProfileDataLoaded) {
      sessionStorage.setItem('spotify_display_name', spUserProfileData.display_name)
      sessionStorage.setItem('spotify_id', spUserProfileData.id)
    }
  }, [spUserProfileDataLoaded])
  
  return (
    <>
      <Layout
        snData={snData}
        snDataLoaded={snDataLoaded}
      />
    </>
  )
}

export default Main