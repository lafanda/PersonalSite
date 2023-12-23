import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../../context";
import './styles.css';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);



  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
  
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        const errorResponse = await response.json();
        alert(errorResponse.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login');
    }
  }
  
  if (redirect) {
    return <Navigate to={'/'} />
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



  return (

    <div class="login-page">

      <div class="form">
        <h1 className="login-Header">login</h1>
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

          <button className="button" onClick={login}>login</button>

          <p class="message">Not registered? <Link to="/register" className="link"> create an account here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
