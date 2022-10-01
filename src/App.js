import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Layout from './components/Layout';
import Redirect from './pages/Redirect';
import Login from './pages/Login';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />        
          <Route exact path='/main' element={<Main/>} />        
          <Route exact path='/redirect' element ={<Redirect/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
