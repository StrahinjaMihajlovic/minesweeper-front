import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DefaultEndPoint from './components/DefaultEndPoint.js'
import Menu from './components/Menu.js';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  // gets the cookie with jwt token if exists
  axios.defaults.headers.common['Authorization'] = document.cookie.match('(^|;)\\s*' + 'token' + '\\s*=\\s*([^;]+)')?.pop() || '';
  return (
    <BrowserRouter>
    <div className="App" id='App'>
      <Menu />
      <DefaultEndPoint />
    </div>
    </BrowserRouter>
  );
}

export default App;
