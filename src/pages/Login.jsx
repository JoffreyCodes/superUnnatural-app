import React, { useState }  from 'react';
import { CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM, PREVIEW_SN_ID, PUBLIC_URL } from '../auth/auth'
import { ImSpotify } from 'react-icons/im'

import './login.css'

const Login = (props) => {
  const [formEmpty, setFormEmpty] = useState()
  const [sessionId, setSessionId] = useState(localStorage.getItem('saved_session_id') || '')
  const [saveSessionId, setSaveSessionId] = useState(localStorage.getItem('saved_session_id') ? true : false)
  
  const handleLogin = () => {
    if (sessionId) {
      saveSessionId
        ? localStorage.setItem('saved_session_id', sessionId)
        : localStorage.removeItem('saved_session_id')
      setFormEmpty(false)
      sessionStorage.setItem('session_id', sessionId)
      sessionStorage.removeItem('InvalidUser')
      window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    } else {
      setFormEmpty(true)
    }
  }

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      setSaveSessionId(true)
    } else {
      setSaveSessionId(false)
      localStorage.removeItem('saved_session_id')
    }
  }

  const handlePreview = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    sessionStorage.setItem('session_id', PREVIEW_SN_ID)
  }

  const ErrorMessage = () => {
    const formEmptyMsg = 'Please enter your SN SessionId'
    const invalidIdMsg = 'Invalid SN SessionId '
    if (formEmpty) {
      return (<small> {formEmptyMsg} </small>)
    } else if (sessionStorage.getItem('InvalidUser')) {
      return (<small> {invalidIdMsg} </small>)
    } else return null
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
            <input type="text"
              className="sessionId-input"
              value={sessionId}
              onChange={e => setSessionId(e.target.value)}
            /><br />
            {<ErrorMessage />}
            <div className="saveSessionId-flex">
              <label className="saveSessionId-label"> Save SessionId
                <input type="checkbox"
                  onChange={handleCheckBoxChange}
                  checked={saveSessionId}
                />
              </label>
            </div>
          </form>
          <button className="login-panel-btn login" onClick={handleLogin}>
            Login
          </button>
          How do I get my SN SessionId?
          <hr/>
          <h3>Or preview with your Spotify account below!</h3>
          <button className="login-panel-btn preview" onClick={handlePreview}>
            Preview
          </button>  
        </div>        
      </div>
    </div>      
  )
}

export default Login