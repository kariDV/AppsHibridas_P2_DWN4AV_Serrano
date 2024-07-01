import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loginImgPng from '../../assets/img/login-img.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // HOOKS
  const [userData, setUserData] = useState({
    alias: '',
    email: '',
    password: '',
  });

  const [altaRegistro, SetAltaRegistro] = useState(false);
  const [altaRegistroOk, SetAltaRegistroOk] = useState(false);

  const navigate = useNavigate();

  // FUNCIONES
  const enviarAltaUsuario = function (e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/usuarios', userData)
      .then((res) => SetAltaRegistroOk(true))
      .catch((error) => SetAltaRegistroOk(false))
      .finally(() => {
        SetAltaRegistro(true);
        setTimeout(() => navigate('/login'), 1500);
      });
  };

  return (
    <main>
      <div className="container padding-t text-center">
        <img src={loginImgPng} className="ms-1 img-login" alt="favorito" />

        <h1 className="title-login-register">
          Te damos la bienvenida a{' '}
          <span className="fuente5">Board Kingdom</span>
        </h1>
        <form
          className="container-form-register mx-auto text-start mt-4"
          onSubmit={enviarAltaUsuario}
        >
          <div className="box-juegos mb-4">
            <div className="d-flex">
              <div className="col-4 pe-2">
                <label className="ms-2">Alias</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Elfo del Bosque"
                  value={userData.alias}
                  onChange={(e) =>
                    setUserData({ ...userData, alias: e.target.value })
                  }
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
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="ms-2">Password</label>
              <input
                type="password"
                className="form-control"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />

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

        <div>
          <br />
          {altaRegistro ? (
            altaRegistroOk ? (
              <span className="fuente3">Usuario Registrado Exitosamente!</span>
            ) : (
              <span className="fuente2">No se pudo registrar el usuario!</span>
            )
          ) : (
            <br />
          )}
        </div>
      </div>
    </main>
  );
};

export { Register };
