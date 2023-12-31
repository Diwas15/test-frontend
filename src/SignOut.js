import React from 'react'
import {useNavigate} from 'react-router-dom'
import './SignOut.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function SignOut() {
    const history=useNavigate();
    const handleClick = () =>{
        history('/');
    }
  return (
    <button id="btn" onClick={handleClick}><FontAwesomeIcon icon={faRightFromBracket} /></button>
  )
}

export default SignOut;