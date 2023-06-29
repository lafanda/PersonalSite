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
    </div>
  );
}

export default Navbar;
