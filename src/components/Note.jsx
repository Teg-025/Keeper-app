import React from "react";
import "../styles.css";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props){
    return (
        <div className="note">
            <div className="title">{props.title}</div>
            <div className="content">{props.content}</div>
            <div className="btn-container">
                <button 
                    className="del-btn" 
                    onClick={()=>{props.delNote(props.id)}}
                ><DeleteIcon /></button>
                
            </div>
        </div>
    )
}