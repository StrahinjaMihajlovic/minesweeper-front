import logo from './logo.svg';
import AppConfig from './config/AppConfig.js'
import './App.css';
import axios from 'axios';
import DefaultEndPoint from './components/DefaultEndPoint.js'
import Menu from './components/Menu.js';


function App() {
  // gets the cookie with jwt token if exists
  axios.defaults.headers.common['Authorization'] = document.cookie.match('(^|;)\\s*' + 'token' + '\\s*=\\s*([^;]+)')?.pop() || '';
  return (
    
    <div className="App" id='App'>
      <Menu />
      <DefaultEndPoint />
    </div>
  );
}

export default App;
