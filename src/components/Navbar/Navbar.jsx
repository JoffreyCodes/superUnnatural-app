import React,{useState, useEffect} from 'react'
import { PUBLIC_URL } from '../../auth/auth'
import { GetCurrUserSpProfile } from '../../utils/FetchSpotifyAPI'

function Navbar() {
  const [spData, setSpData] = useState({})
  const [spDataLoaded, setSpDataLoaded] = useState(false)
  const handleLogout = () => {
    sessionStorage.clear()
    window.location.replace(PUBLIC_URL)
  }
  const getCurrUserSpProfile = async () => {
    setSpDataLoaded(false)
    try {
      const spData = await GetCurrUserSpProfile()
      setSpData(spData)
      setSpDataLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getCurrUserSpProfile()
  }, [])
  
  const userName = spData.display_name
  return (
    <>
      <div className="navbar-container" >
        <div className="navbar-spHandle">
          Spotify Account: <strong>{userName}</strong>
        </div>
        <div className="navbar-logout">
          <button className="logout-btn" onClick={handleLogout}>
            <strong>Logout</strong>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar