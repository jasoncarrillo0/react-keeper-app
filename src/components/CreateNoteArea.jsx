import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateNoteArea (props) {

    const [note, setNote]           = React.useState({title: "", text: ""});
    const [isExpanded, setExpanded] = React.useState(false);

    function handleChange(event) {
        const eName = event.target.name;
        const eVal  = event.target.value;
        if (eName === "titleInput") {
            setNote(previousVal => {
                return {title: eVal, text: previousVal.text}
            }); 
        }
        else {
            setNote(previousVal => {
                return {title: previousVal.title, text: eVal}
            });    
        }
    }

    function expand() {
        setExpanded(true);
    }
    return (
        <div className='note'>
            {isExpanded ? 
                <input 
                className='user-input-heading' 
                name="titleInput" 
                placeholder="Enter title..." 
                onChange={handleChange} 
                value={note.title}/>
                : null
            }
            <div className="lower-input-section">
                <textarea 
                    className='user-input-text' 
                    name="textInput" 
                    placeholder="Enter a note..." 
                    onClick={expand}
                    onChange={handleChange} 
                    value={note.text}
                    rows={isExpanded ? 4 : 1}
                    />
                {isExpanded ? 
                    <Zoom in={true}>
                        <Fab size="small" classes={{root: 'add-btn'}} onClick={() => {
                            props.onAdd(note);
                            setNote({title: "", text: ""})
                            }}><AddIcon/>
                        </Fab>
                    </Zoom> :
                    null
                }
            </div>
        </div>
    )
}
export default CreateNoteArea;