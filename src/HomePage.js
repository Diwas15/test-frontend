import React,{useState,useEffect,createContext} from "react"
import logo from './logo.png'
import SignOut from "./SignOut";
import './HomePage.css'
import { useLocation } from "react-router-dom";
import SavedNote from "./SavedNote";

const MyContext = createContext({
    notes:[],
    setNotes:(data)=>{}
})

function HomePage() {
    const location = useLocation();
    console.log("this is homepage "+location.state.email);
    const [user_email,setEmail]=useState(location.state.email);
    //console.log(user_email);
    const [formValue,setFormValue]=useState();
    const [notes,setNotes]=useState([]);
    
    useEffect(()=>{
        console.log("your mail:"+ user_email);
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
        console.log(notes)
        
        
       
    },[])
    const handleAdd = (e)=>{
        e.preventDefault();
        const data={
            user_email:user_email,
            body:formValue
        };
        //console.log(formValue);
        fetch('https://note-app-test-pe9o.onrender.com/notes/add',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            //console.log(res);
           setNotes(oldNotes=>[...oldNotes,data]);
        }).catch((err)=>{
            console.log(err);
        })
        setFormValue('');

    }
    return (
       <>
        <MyContext.Provider value={{notes,setNotes}}>
            
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="not found" />
                    </div>
                    <div className="title">Take Your Notes!!</div>
                    <SignOut/>
                </div>
                <div className="content">
                    <div className="user_notes">
                    {notes.map((note,id)=>{
                        return <SavedNote key={id} __id={note._id} body={note.body} email={user_email}/>
                        
                    })}
                    </div>
                    <div className="notes_adder">
                        <form  onSubmit={(e)=>{e.target.reset();handleAdd(e)}}>
                            <textarea className="notes" name="notes" cols="70" rows="20" placeholder="write your notes" onChange={(e)=>setFormValue(e.target.value)}></textarea>
                            <div className="form_btn"><button type="submit" id="f_btn">Add</button></div>
                        </form>
                    </div>
                </div>
                <div className="footer"></div>
           
        </MyContext.Provider>
      </>
    )
  }

  export default HomePage;
  export {MyContext};
