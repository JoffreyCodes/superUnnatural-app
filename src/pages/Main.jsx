import React,{useState, useEffect} from 'react'
import { FetchSpotifyData } from '../utils/FetchSpotifyAPI'
import { FetchSnData } from '../utils/FetchAPI'
import Layout from '../components/Layout'
function Main() {
  const [snData, setSnData] = useState({})
  const [snDataLoaded, setSnDataLoaded] = useState(false)
  const [spData, setSpData] = useState({})
  const [spDataLoaded, setSpDataLoaded] = useState(false)


  const getSnData = async () => {
    const snData = await FetchSnData()
    setSnDataLoaded(false)
    setSnData(snData.data)
    setSnDataLoaded(true)
  }
  const getSpData = async () => {
    setSpDataLoaded(false)
    try {
      const spData = await FetchSpotifyData()
      setSpData(spData)
      setSpDataLoaded(true)
    } catch (error) {
      console.log(error)
      window.location.replace('/')
    }

  }
  useEffect(() => {
    getSnData()
    getSpData()
  }, [])
    
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