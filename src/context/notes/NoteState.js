// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MzVkYjg2ZGQwZjBmM2I0MDEwY2VmIn0sImlhdCI6MTY2ODUyMDgwM30.LoDf2iAGVn018dwpgq7nSJTWJREEXY7rm5frNGKyg1w"
import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
const host="http://localhost:5000"
const notesInitial=[]
const [notes,setNotes]=useState(notesInitial)
// Get all notes
const getNotes=async ()=>{
//TODO:API Call
const response=await fetch(`${host}/api/notes/fetchallnotes`, {
method:'GET',
headers:{
'Content-Type':'application/json',
"auth-token": localStorage.getItem('token')
}});
// const note={
//     "_id": "6373c118994d296c7744f6d9",
//     "user": "63735db86dd0f0f3b4010cef",
//     "title":title,
//     "description": description,
//     "tag": tag,
//     "date": "2022-11-15T16:40:56.457Z",
//     "__v": 0
//   };
const json=await response.json()
setNotes(json)
}
// Add a Note
const addNote=async (title,description,tag)=>{
//TODO:API Call
const response=await fetch(`${host}/api/notes/addnote`, {
method:'POST',
headers:{
'Content-Type':'application/json',
"auth-token": localStorage.getItem('token')
},
body:JSON.stringify({title,description,tag})
});

const note=await response.json();
setNotes(notes.concat(note))
}
// Delete a Note
const deleteNote=async (id)=>{
//TODO:API Call
const response=await fetch(`${host}/api/notes/deletenote/${id}`, {
method:'DELETE',
headers:{
'Content-Type':'application/json',
"auth-token": localStorage.getItem('token')
}});
const json=response.json();
console.log(json)
const newNotes=notes.filter((note)=>{return note._id!==id})
setNotes(newNotes)
}
// Edit a Note
const editNote=async (id,title,description,tag)=>{
const response=await fetch(`${host}/api/notes/updatenote/${id}`, {
method:'PUT',
headers:{
'Content-Type':'application/json',
"auth-token": localStorage.getItem('token')
},
body:JSON.stringify({title,description,tag})
});
const json= await response.json();
console.log(json)
let newNotes=JSON.parse(JSON.stringify(notes))
//Logic to edit in client
for (let index = 0; index < newNotes.length; index++) {
  const element = newNotes[index];
  if(element._id===id){
newNotes[index].title=title;
newNotes[index].description=description;
newNotes[index].tag=tag;
break;
}
}
setNotes(newNotes);
}
return (
<NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
{props.children}
</NoteContext.Provider>
)
}
export default NoteState;