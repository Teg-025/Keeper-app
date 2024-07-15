import Reac, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import {styled} from "@mui/material/styles";
import Zoom from '@mui/material/Zoom';

export default function InputNote(props){

    const [expand, setExpand] = useState(false);
    
    const CustFab = styled(Fab)({
        backgroundColor: "f4b322",
        "&:hover": {
            backgroundColor: "#a19e9e",
        }
    })
    
    function handleClick(){
        setExpand(true);
    }

    return(
        <div className="input-container">
            <div className="form">
                {expand 
                    ?<input 
                        type="text"
                        name="title" 
                        id="input-title" 
                        placeholder="Title" 
                        onChange={()=>{
                            props.handleChange(event)
                        }}
                        value={props.title} 
                    />
                    : null
                }
                <textarea 
                    id="input-note" 
                    name="content"
                    placeholder="Take a note...." 
                    rows={expand? 4: 1} 
                    onChange={()=>{
                        props.handleChange(event)
                    }}
                    onClick={handleClick}
                    value={props.content}
                />
                {
                    expand
                    ?<Zoom in={true}>
                        <CustFab onClick={props.addNote}>
                            <AddIcon />
                        </CustFab>
                    </Zoom>
                    : null
                }
                
            </div>
            
        </div>
    )
}