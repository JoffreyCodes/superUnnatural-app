import './App.css';
import {useState, useEffect} from 'react'
import Login from './pages/Login';
import Main from './pages/Main';


function App() {
  const [user, setUser] = useState('');
  
  const getParamsFromHash = (hash) => {
    const hashContent = hash.substring(1) // remove #
    const paramsSplit = hashContent.split('&');
    let params = {};
    let values = [];

    paramsSplit.forEach((param) => {
      values = param.split('=')
      params[values[0]] = values[1]
    })    
    return params
  }
  const token_expr = sessionStorage.getItem('token_expr')
  const currUnix = Math.floor(Date.now() / 1000)
  
  useEffect(() => {
    setUser(sessionStorage.getItem('session_id'))
    if (window.location.hash) {
      const hash = window.location.hash;
      const tokens = getParamsFromHash(hash);
      sessionStorage.setItem('token_expr', currUnix + parseInt(tokens.expires_in))
      sessionStorage.setItem('token', tokens.access_token)
      window.location.replace('/')
    }
  }, [currUnix])
  return (
    <div className="App">
      { user && currUnix < token_expr ? <Main user={user} /> : <Login /> }
    </div>
  );
}
export default App;
