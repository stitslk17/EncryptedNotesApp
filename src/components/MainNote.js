import react, {useState, useEffect} from "react"
import NotesList from "./NotesList.js";
import { nanoid } from "nanoid";
import CryptoJS from "crypto-js";

const MainNote = () => {
  

  //encryptions  

  const key = "cNnwZz20DPKtle4S";

  const encrypt = word => {
    return CryptoJS.AES.encrypt(word,key).toString();
  } 

    const [notes,setNotes] = useState([
      {
      id: nanoid(),
      text: encrypt("Welcome to Notes App"),
      date: encrypt("10/17/2022")
      }
  ]);
  useEffect(() => {
    setNotes(notes);
  }, [notes]);
  
    const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id:nanoid(),
        text: encrypt(text),
        date: encrypt(date.toLocaleDateString()),
      }
      const newNotes = [...notes,newNote]
      setNotes(newNotes)
    }

    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }

    //save to local
    useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('327project-data'));
      if (savedNotes)
      {
        setNotes(savedNotes);
      }
    },[])
    
    useEffect(()=>{
      localStorage.setItem
      (
        '327project-data',
      JSON.stringify(notes)
      );
    },[notes]);
  
    return (
      <div className="container">
        <NotesList 
        notes = {notes} 
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNote}
        />
      </div>
    );
  }
  
  export default MainNote;