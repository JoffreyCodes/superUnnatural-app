import React,{useState, useEffect} from 'react'
import { FetchSpotifyData } from '../utils/FetchSpotifyAPI'
import { FetchSnDataWithId } from '../utils/FetchAPI'

import Layout from '../components/Layout'
function Main(props) {
  const [snData, setSnData] = useState({})
  const [snDataLoaded, setSnDataLoaded] = useState(false)
  const [spData, setSpData] = useState({})
  const [spDataLoaded, setSpDataLoaded] = useState(false)

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
      setSnData(snData.data)
      setSnDataLoaded(true)
    }
    getSnDataFromId()
    getSpData()
  }, [props.user])
    
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