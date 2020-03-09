import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {


    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button className="delete-btn" onClick={ () => {props.deleteNote(props.id)}}><span><DeleteIcon/></span></button>
        </div>
    )
}

export default Note;