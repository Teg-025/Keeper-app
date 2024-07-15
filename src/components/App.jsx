import React, {useState} from 'react';
import Heading from './Heading';
import Note from "./Note";
import Footer from "./Footer"
import InputNote from './InputNote';


export default function App(){
  var [note, setNote] = useState({
    title:"",
    content:""
  });
  var [notes, setNotes] = useState([])

  function handleChange(event){
    var {value, name} = event.target;
    setNote((prevValue)=>{
      return {...prevValue, [name]: value}
    })
  }

  function addNote(){
    setNotes((prevNote)=>{
      return [...prevNote, note]
    })
    setNote({title:"",content:""});
  }

  function delNote(id){
    setNotes((currItems)=>{
      return currItems.filter((item, index)=>{
        return index!=id
      })
    })
  }

  return (
    <div>
        <Heading />
        <InputNote 
          title = {note.title} 
          content = {note.content} 
          handleChange = {handleChange}
          addNote = {addNote}
        />
        <div className="container">
          {notes.map((singleNote, index)=>{
            return(
              <Note
                key = {index}
                id = {index}
                title = {singleNote.title}
                content = {singleNote.content}
                delNote = {delNote}
              />
          )})}
        </div>
        <Footer />
    </div>
  )
}

