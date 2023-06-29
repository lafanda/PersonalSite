import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json " }
    })
    if (response.status === 200) {
      alert("Registeration Succesful")
      setRedirect(true);
    }
    else {
      alert("Registeration Failed")
    }
  }

  function reveal() {
    console.log("testing");
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  if (redirect) {
    return <Navigate to={'/login'} />
  }


  return (

          <div class="login-page">

          <div class="form">
            <h1 className="login-Header">Sign-Up</h1>
            <form class="login-form">
    
              <input
                className="input"
                placeholder="&#xf0e0;"
                type="text"
                value={email}
                onChange={ev => setEmail(ev.target.value)} />
    
              <input
                className="input"
                type="password"
                placeholder="&#xf023;" id="myInput"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
    
              <div className='checkbox'>
                <input type="checkbox" onClick={reveal} />
                <i class="far fa-eye"></i>
              </div>
    
              <button className="button" onClick={register}>Sign-Up</button>
    
              <p class="message">Already have an account? <Link to="/login" className="link">login here</Link></p>
            </form>
          </div>
        </div>
  );
}

export default Register;
