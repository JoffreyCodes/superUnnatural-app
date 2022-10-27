import React from 'react'
import { PUBLIC_URL } from '../../auth/auth'
function Navbar() {
  const handleLogout = () => {
    sessionStorage.clear()
    window.location.replace(PUBLIC_URL)
  }
  return (
    <>
      <div className="navbar-container" >
        <button className="logout-btn" onClick={handleLogout}><strong>Logout</strong></button>
      </div>
    </>
  )
}

export default Navbar