import React from 'react'
import { PUBLIC_URL } from '../../auth/auth'

function Navbar() {
  const handleLogout = () => {
    sessionStorage.clear()
    window.location.replace(PUBLIC_URL)
  }
  const userDisplayName = sessionStorage.getItem('spotify_display_name')
  return (
    <>
      <div className="navbar-container" >
        <div className="navbar-spHandle">
          Spotify Account: <strong>{userDisplayName}</strong>
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