import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import favoritoSvg from "../../assets/img/favorito.svg";
import logoSvg from '../../assets/img/logo.svg';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  // HOOKS
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // FUNCIONES
  const btnLogInOut = function (e) {
    if (user) {
      logoutUser();
    } else {
      navigate('/login');
    }
  };

  return (
    <header>
      <div className='fixed-top'>
        <nav className='navbar navbar-expand-lg bg-nav'>
          <div className='container-fluid'>
            <div>
              <NavLink className='navbar-brand logo-nav' to='/'>
                <img src={logoSvg} alt='Logo' />
              </NavLink>
            </div>

            <div>
              <div className='m-2 d-flex'>
                {user ? (
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <NavLink to='/Subir' className='btn link-nav-user'>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            className='bi bi-bookmark-plus-fill'
                            viewBox='0 0 16 16'
                          >
                            <path
                              fillRule='evenodd'
                              d='M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z'
                            />
                          </svg>
                        </span>
                        Subir
                      </NavLink>
                    </li>

                    <li className='nav-item'>
                      <NavLink
                        to='/Favoritos'
                        className='btn link-nav-user text-center'
                      >
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='23'
                            height='23'
                            fill='currentColor'
                            className='bi bi-suit-heart-fill'
                            viewBox='0 0 16 16'
                          >
                            <path d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1' />
                          </svg>
                        </span>
                        Mis favoritos
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  ''
                )}

                <span className='nav-item margin-nav separador'>|</span>

                <ul className='navbar-nav'>
                  <li>
                    <NavLink to='/' className='nav-item btn text-nav-link'>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/Coleccion'
                      className='nav-item btn text-nav-link'
                    >
                      Colección
                    </NavLink>
                  </li>
                </ul>

                <button className='btn btn-nav-user' onClick={btnLogInOut}>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-person-circle me-1'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
                      <path
                        fillRule='evenodd'
                        d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1'
                      />
                    </svg>
                  </span>
                  {user ? (
                    <span>{user.alias} | Log Out </span>
                  ) : (
                    <span>Log In</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
