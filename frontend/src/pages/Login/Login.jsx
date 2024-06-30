import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loginImgPng from '../../assets/img/login-img.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div className="container padding-t text-center">
        <img src={loginImgPng} className="ms-1 img-login" alt="favorito" />

        <h1 className="title-login">Acceder a mi cuenta</h1>
        <form className="container-form mx-auto text-start">
          <div>
            <label className="ms-2">Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="usuario@boardkingdom.com"
            />
          </div>
          <div>
            <label className="ms-2">Password</label>
            <input type="password" className="form-control mb-5" />
          </div>

          <div className="text-center mb-2">
            <button type="submit" className="btn btn-secondary w-50">
              Login
            </button>
          </div>
        </form>
        <span>
          ¿No tienes una cuenta? Puedes{' '}
          <NavLink to="/Register">Registrarte aquí</NavLink>
        </span>
      </div>
    </main>
  );
};

export { Login };
