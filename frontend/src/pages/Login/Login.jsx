import React, { useContext, useState } from 'react';
import axios from 'axios';
import loginImgPng from '../../assets/img/login-img.png';
import Cookies from 'js-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  // HOOKS
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  const [login, setLogin] = useState(false);
  const [loginOk, setLoginOk] = useState(false);

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // FUNCIONES
  const logInCuenta = function (e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/login', userLogin)
      .then((res) => {
        setUser(res.data.usuario);
        Cookies.set('jwToken', res.data.tokenJwt, { expires: 1 });
        setLoginOk(true);
      })
      .catch((error) => {
        setUser(null);
        Cookies.remove('jwToken');
        setLoginOk(false);
      })
      .finally(() => {
        setLogin(true);
        setTimeout(() => navigate('/'), 1500);
      });
  };

  return (
    <main>
      <div className='container padding-t text-center'>
        <img src={loginImgPng} className='ms-1 img-login' alt='favorito' />

        <h1 className='title-login'>Acceder a mi cuenta</h1>
        <form
          className='container-form mx-auto text-start'
          onSubmit={logInCuenta}
        >
          <div>
            <label className='ms-2'>Email</label>
            <input
              type='email'
              className='form-control mb-2'
              placeholder='usuario@boardkingdom.com'
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className='ms-2'>Password</label>
            <input
              type='password'
              className='form-control mb-5'
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
          </div>

          <div className='text-center mb-2'>
            <button type='submit' className='btn btn-secondary w-50'>
              Login
            </button>
          </div>
        </form>
        <span>
          ¿No tienes una cuenta? Puedes{' '}
          <NavLink to='/Register'>Registrarte aquí</NavLink>
        </span>

        <div>
          <br />
          {login ? (
            loginOk ? (
              <span className='alert alert-success' role='alert'>
                Ha iniciado sesión con éxito!
              </span>
            ) : (
              <span className='alert alert-danger' role='alert'>
                No se pudo iniciar sesión!
              </span>
            )
          ) : (
            <br />
          )}
        </div>
      </div>
    </main>
  );
};

export { Login };
