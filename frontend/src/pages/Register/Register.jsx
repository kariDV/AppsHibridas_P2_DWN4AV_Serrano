import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loginImgPng from '../../assets/img/login-img.png';

const Register = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div className="container padding-t text-center">
        <img src={loginImgPng} className="ms-1 img-login" alt="favorito" />

        <h1 className="title-login-register">
          Te damos la bienvenida a{' '}
          <span className="fuente5">Board Kingdom</span>
        </h1>
        <form className="container-form-register mx-auto text-start mt-4">
          <div className="box-juegos mb-4">
            <div className="d-flex">
              <div className="col-4 pe-2">
                <label className="ms-2">Alias</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Elfo del Bosque"
                />
                <div className="ms-2 info-register">
                  <span>Hasta 20 caracteres.</span>
                </div>
              </div>

              <div className="col-8">
                <label className="ms-2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="usuario@boardkingdom.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="ms-2">Password</label>
              <input type="password" className="form-control" />

              <div className="ms-2 info-register">
                <span>Debe tener al menos 3 caracteres y un número.</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-2">
            <button type="submit" className="btn btn-secondary w-50">
              Crear mi cuenta
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export { Register };
