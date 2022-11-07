import React,{useState, useEffect} from 'react'
import { FetchSpotifyData, GetCurrUserSpProfile } from '../utils/FetchSpotifyAPI'
import { FetchSnDataWithId } from '../utils/FetchAPI'

import Layout from '../components/Layout'
function Main(props) {
  const [snData, setSnData] = useState({})
  const [snDataLoaded, setSnDataLoaded] = useState(false)
  const [spData, setSpData] = useState({})
  const [spDataLoaded, setSpDataLoaded] = useState(false)
  const [spUserProfileData,setSpUserProfileData] = useState('')
  const [spUserProfileDataLoaded,setSpUserProfileDataLoaded] = useState(false)

  const getSpData = async () => {
    setSpDataLoaded(false)
    try {
      const spData = await FetchSpotifyData()
      setSpData(spData)
      setSpDataLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    const getSnDataFromId = async () => {
      const session_id = props.user
      const snData = await FetchSnDataWithId(session_id)
      setSnDataLoaded(false)
      setSnData(snData.data.slice(0,1))
      setSnDataLoaded(true)
    }
    getSnDataFromId()
    getSpData()
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
        spData={spData}
        spDataLoaded={spDataLoaded}
      />
    </>
  )
}

export default Main