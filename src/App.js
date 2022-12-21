import react, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import NotesList from "./components/NotesList.js";
import { nanoid } from "nanoid";
import Main from "./Main.js"

const App = () => {
  return (
    <div>
    <Main/>
    </div>
  );
}

export default App;
