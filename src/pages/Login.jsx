import React, { useState }  from 'react';
import { CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM, PREVIEW_ID } from '../auth/auth'
import { ImSpotify } from 'react-icons/im'

import './login.css'

const Login = (props) => {
  const [formEmpty, setFormEmpty] = useState()
  const handleLogin = () => {
    const userInput = document.forms[0].elements[0].value
    if (userInput) {
      setFormEmpty(false)
      // window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
      sessionStorage.setItem('session_id', userInput)
    } else {
      setFormEmpty(true)
    }
  }
  const handlePreview = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    sessionStorage.setItem('session_id', PREVIEW_ID)
  }


  return (
    <div className="login-container">
      <div className="login-panel">
        <div className="login-content">
          <h1>Superunnatural</h1>
            <ImSpotify size='10em' color='#1DB954' />
          <h2>Login with your SN Session ID and connect your Spotify account below</h2>
          <form>
            <label htmlFor="sessionId">
              <strong>Supernatural SessionId:</strong>
            </label><br />
            <input type="text" id="sessionId" name="sessionId" /><br/> 
          </form>
          {formEmpty ? <small> Please enter your SN SessionId </small>
            : null}
          <button className="login-panel-btn login" onClick={() => handleLogin()}>Login</button>
          <hr className="horizontal"/>
          <h3>Or preview with your Spotify account below!</h3>
          <button className="login-panel-btn preview"onClick={() => handlePreview()}>Preview</button>  
        </div>        
      </div>
    </div>      
  )
}

export default Login