import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM } from '../auth'
import { ImSpotify } from 'react-icons/im'

const Login = () => {
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    const userInput = document.forms[0].elements[0].value
    document.cookie = `session_id=${userInput}`;
    document.cookie = 'preview_mode=False'    
  }
  const handlePreview = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    document.cookie = 'preview_mode=True'
  }


return (
  <div className="login-container">
    <div className="login-panel">
      <div className="login-content">
        <h1>Superunnatural</h1>
        <ImSpotify size='10em' color='#1DB954' />
        <h2>Login with your SN Session ID and connect your Spotify account below</h2>
        <form>
          <label for="sessionId">
            <strong>Supernatural SessionId:</strong>
          </label><br />
          <input type="text" id="sessionId" name="sessionId"/><br/> 
        </form>
        <button className="btn login" onClick={() => handleLogin()}>Login</button>
        <hr className="horizontal"/>
        <h3>Or preview with your Spotify account below!</h3>
        <button onClick={() => handlePreview()}>Preview</button>  
      </div>        
    </div>
  </div>
      
  )
}

export default Login