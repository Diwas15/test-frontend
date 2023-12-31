import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="734443135749-idcbu2dc0k6843auibqq74vu4ltp64ps.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
