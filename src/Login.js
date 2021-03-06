import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import firebase from "firebase/app";
import "firebase/auth";
import "./plugins/firebase.js"

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(username.value, password.value)
      .then((response) => {
      // Signed in
      setLoading(false);
      setUserSession(response.token, response.user);
      props.history.push('/dashboard');
      window.console.log("logged in")
      // ...
      })
      .catch(error => {
        setLoading(false);
        window.console.log("error")
      });

  }

  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;