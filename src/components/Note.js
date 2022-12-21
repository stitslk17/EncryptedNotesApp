import React from "react"
import {Box,IconButton} from "@mui/material";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

const Note = ({id,text,date,handleDeleteNote}) =>
{
    return (
        
    <div className = "note">
        <span>{text}</span>

        <div className = "note-footer">
            <small>{date}</small>

            <IconButton>
                
            <DeleteForeverRoundedIcon onClick = {()=>handleDeleteNote(id)}
            className = "delete" />
            </IconButton>

        </div>

    </div>

    );
}

export default Note;