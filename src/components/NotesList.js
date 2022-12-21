import React, {useState} from "react"
import {Box} from "@mui/material";
import Note from "./Note.js";
import { nanoid } from "nanoid";
import AddNote from "./AddNote.js"
import MainNote from "./MainNote.js"

import CryptoJS from "crypto-js";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => 
{
    const key = "cNnwZz20DPKtle4S";

    const decrypt = word => {
      return CryptoJS.AES.decrypt(word,key).toString(CryptoJS.enc.Utf8);
    } 
    return (
        <div className = "noteslist">
          <Note
            text = {"Welcome to LS Notes App"}
            />
            {notes.map((note)=>
            <Note
            id = {note.id}
            text = {decrypt(note.text)}
            date = {decrypt(note.date)}
            handleDeleteNote = {handleDeleteNote}
            />
            )}
            
            <AddNote handleAddNote = {handleAddNote}/>
        </div>
    );
}

export default NotesList;