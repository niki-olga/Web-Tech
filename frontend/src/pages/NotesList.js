import React,{useContext, useState, useEffect} from 'react'
import AuthContext from '../context/AuthContext'

import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesList = () => {
  let {user, authToken, logoutUser} = useContext(AuthContext)
  
  const usernameTitle = (username)=>{
    const title = username.charAt(0).toUpperCase() + username.slice(1)
    return title
  }

  let [notes, setNotes] = useState([])
  useEffect(()=>{
    getNotes()
  }, [])

  let getNotes = async () =>{
    let response = await fetch("http://localhost:8000/api/notes/", {
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authToken.access)
      }
    })
    let data = await response.json()
    if (response.status === 200){
      setNotes(data)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }
  return (
    <div className='notes'>
      <div className='welcome'>Welcome <span>{usernameTitle(user.username)}</span></div>      
      <div className='notes-header'>
          <div className='notes-title'> Notes</div>
          <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
          {notes.map((note) =>(
            <div className='note-detail'>
            <ListItem key={note.id} note={note}/>
            </div>
          ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesList