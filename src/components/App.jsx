import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNoteArea from './CreateNoteArea';



function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(note) {
        setNotes(previousNotes => {
            return [...previousNotes, note]
        });
    }

    function deleteNote(id) {
        setNotes(previousNotes => {
            return previousNotes.filter( (item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header/>
            <CreateNoteArea onAdd={addNote}/>
            {notes.map( (note, index) => {
                return (
                    <Note 
                        key={index} 
                        id={index} 
                        title={note.title} 
                        text={note.text} 
                        deleteNote={deleteNote}
                    />
                );
            })}
            <Footer/>
        </div>
    )
}

export default App;