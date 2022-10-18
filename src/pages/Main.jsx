import React,{useState, useEffect} from 'react'
import { FetchSpotifyData } from '../utils/FetchSpotifyAPI'
import { FetchSnDataWithId } from '../utils/FetchAPI'
import Layout from '../components/Layout'
function Main() {
  const [snData, setSnData] = useState({})
  const [snDataLoaded, setSnDataLoaded] = useState(false)
  const [spData, setSpData] = useState({})
  const [spDataLoaded, setSpDataLoaded] = useState(false)

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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
    const getSnDataFromId = async () => {
    const session_id = getCookie('session_id')
    const snData = await FetchSnDataWithId(session_id)
    setSnDataLoaded(false)
    setSnData(snData.data)
    setSnDataLoaded(true)
  }
    getSnDataFromId()
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