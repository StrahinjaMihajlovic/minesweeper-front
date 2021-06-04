import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import DefaultEndPoint from './components/DefaultEndPoint.js'
function App() {
  return (
    <div className="App">
      <DefaultEndPoint />
    </div>
  );
}

export default App;
