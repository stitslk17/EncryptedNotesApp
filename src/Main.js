import react, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import MainNote from "./components/MainNote.js"
import {BrowserRouter as Router,Route,Routes,useHistory,useLocation} from 'react-router-dom'

const Main = () => {
  return (
    <div>
    <Router>
            <Routes>
                <Route exact path ="/" element={<MainNote/>}/>
            </Routes>
        </Router>

    </div>
  );
}

export default Main;
