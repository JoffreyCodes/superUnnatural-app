import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM } from '../auth'

const Login = () => {
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    const userInput = document.forms[0].elements[0].value
    document.cookie = `session_id=${userInput}`;
  }


return (
    <>
    <div>Login with Spotify</div>
    <form>
      <label for="sessionId">SessionId:</label><br/>
      <input type="text" id="sessionId" name="sessionId"/><br/>
    </form>
    <button onClick={() => handleLogin()}>Login</button>
    </>
  )
}

export default Login