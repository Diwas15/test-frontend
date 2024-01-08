import React,{useContext,useState} from 'react'
import './SavedNote.css'
import { MyContext} from './HomePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


//editing should not delete old element and create new one but it should update the exisiting element
//so better is to create a popup form and then update the notes value on successful updation
//for creating a pop up make it t root element and then pass a paramtere that hides and unhides it
//also pass editstate which is set to the body of the note clicked for updation after clicking confirm on
//pop up the editstate which is used as context is udpated and this updated value is passed for database update
//and the notes value is updated with databse respponse subha karna

function SavedNote(props) {
  const {setNotes} = useContext(MyContext)
  const [name,setName]=useState('not_visible');
  const [email,setEmail]=useState(props.email)
  const [update_value,setVal]=useState(props.body);
  //console.log("lo "+props.__id);
  const deleteAction=(e)=>{
    //console.log("this is note ID: "+props.__id);
    fetch('https://note-app-test-pe9o.onrender.com/notes/delete',{
            method:'DELETE', 
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify({user_id:props.__id})
        }).then(
            setNotes((notes)=>notes.filter((note)=>{
              return props.__id!==note._id
            }))
          )
        .catch((e)=>console.log(e));
    
  }

  const editAction = (e)=>{
    //console.log(props.email)
    e.preventDefault();
    console.log("your mail:"+ email);
    const data={
      _id:props.__id,
      email:email,
      new_body:update_value
    }
        fetch('https://note-app-test-pe9o.onrender.com/notes/update',{
            method:'PUT', 
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            setNotes(data);
            //console.log(data);
        })
        .catch((e)=>console.log(e));
        setName('not_visible');
   
  }
  return (
    <>
        <div className={`pop_up ${name}`}>
          <div className={`cancel`}>
            <button onClick={()=>setName('not_visible')}> <FontAwesomeIcon icon={faXmark} size={'xl'} /></button>
          </div>
          <form id="note_frm" action="">
            <textarea defaultValue={update_value} id="_text_" cols="30" rows="20" onChange={(e)=>setVal(e.target.value)}></textarea>
            <button type="submit" className={`update`} onClick={(e)=>editAction(e)}>update</button>
          </form>
        </div>
        <div className="card">
            <div className="saved_note">
                <p>{props.body}</p> 
            </div>
            <div className="control_buttons">
                <div className="edit_div"><button id="edit" onClick={()=>{setName('visible')}}>edit</button></div>
                <div className="delete_div"><button type="submit" id="delete" onClick={(e)=>deleteAction(e)}>delete</button></div>
            </div>
        </div>
    </>
        
  )
}

export default SavedNote
