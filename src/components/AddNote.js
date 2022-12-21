import React, {useState} from "react"
import {Box,IconButton,Button,TextField} from "@mui/material";
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

const AddNote = ({handleAddNote}) => {
    const[noteText, setNoteText] = useState('')
    const handleChange = (e) => {
        setNoteText(e.target.value)
    }

    const handleSaveClick = (e) => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return(
        <div className = "new-note">
            <TextField 
            cols = "10"
            placeholder = "Add a note..."
            variant = "standard"
            multiline
            rows = {5}
            value = {noteText}
            onChange = {handleChange}
            />

            <div className = "note-footer">
                <small>New note</small>
                <IconButton
                onClick = {handleSaveClick}
                >
                    <SaveRoundedIcon/>
                </IconButton>
            </div>

        </div>
    );
}

export default AddNote