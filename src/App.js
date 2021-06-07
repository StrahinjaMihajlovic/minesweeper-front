import logo from './logo.svg';
import AppConfig from './config/AppConfig.js'
import './App.css';
import axios from 'axios';
import DefaultEndPoint from './components/DefaultEndPoint.js'



function App() {
  return (
    <div className="App" id='App'>
      <DefaultEndPoint />
    </div>
  );
}

export default App;
