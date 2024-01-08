import React from "react";
import {useNavigate} from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';

function SignIn() {
    const history=useNavigate();
    function handleCredentialResponse(response){
      var obj = jwtDecode(response.credential);
      //console.log("this is user details:"+obj);
      history('/HomePage',{state:{email:obj.email}});
      
    }
    return (
      <GoogleLogin
        onSuccess={credentialResponse => {
          handleCredentialResponse(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    )
  }

  export default SignIn;
