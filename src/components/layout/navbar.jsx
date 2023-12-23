import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context';

function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const email = userInfo?.email;

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }


  return (
    <div className="fixed">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="sign"
              src="images/signature.png"
              width="49px"
              style={{ borderColor: 'black' }}
              alt="test"
            />
          </Link>
          <Link to="/" className="navbar-brand" style={{ fontSize: '30px' }}>
            Yazan Hailat
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              {email === 'yazan.mmh@gmail.com' && (
                <>
                  <li className="nav-item">
                    <Link to="/createpost" className="nav-link">
                      Create-Post
                    </Link>
                  </li>
                </>
              )}
              {email && (
                // Default navbar elements for any logged-in user
                <li className="nav-item">
                  <Link className="nav-link" to='/' onClick={logout}>
                    Logout
                  </Link>
                </li>
              )}
              {!email && (
                // Default navbar elements for guests
                <>
                  <li className="nav-item">
                    <Link id="nav-item" to="/register" className="nav-link">
                      Sign-Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link id="nav-item" to="/login" className="nav-link">
                      Log-In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
  );
}

export default Navbar;
