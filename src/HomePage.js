import React,{useState,useEffect} from "react"
import logo from './logo.png'
import SignOut from "./SignOut";
import './HomePage.css'
import { useLocation } from "react-router-dom";
import SavedNote from "./SavedNote";


function HomePage(props) {
    const location = useLocation();
    //console.log(location.state.email);
    const user_email=location.state.email;
    //console.log(user_email);
    const [formValue,setFormValue]=useState();
    const [notes,setNotes]=useState([]);
    
    useEffect(()=>{
        console.log(user_email);
        fetch('https://note-app-test-pe9o.onrender.com/notes/new',{
            method:'POST', 
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify({user:user_email})
        }).then((res)=>res.json()).then((data)=>{
            setNotes(data);
            //console.log(data);
        })
        .catch((e)=>console.log(e));
        //console.log(notes)

        
       
    },[notes])
    const handleAdd = (e)=>{
        e.preventDefault();
        const data={
            user_email:user_email,
            body:formValue
        };
        console.log(formValue);
        fetch('https://note-app-test-pe9o.onrender.com/notes/add',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
      <>
          <div className="header">
            <div className="logo">
                <img src={logo} alt="not found" />
            </div>
            <div className="title">Take Your Notes!!</div>
            <SignOut/>
          </div>
          <div className="content">
            <div className="user_notes">
               {notes.map((note)=>{
                return <SavedNote key={note.id} body={note.body}/>
               })}
            </div>
            <div className="notes_adder">
                <form>
                    <textarea name="notes" id="_text_" cols="60" rows="20" placeholder="write your notes" onChange={(e)=>setFormValue(e.target.value)}></textarea>
                    <div className="form_btn"><button id="f_btn" onClick={(e)=>{handleAdd(e)}}>Add</button></div>
                </form>
            </div>
          </div>
          <div className="footer"></div>
      </>
    )
  }

  export default HomePage;
