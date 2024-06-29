import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loginImgPng from '../../assets/img/login-img.png';

const Register = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div class="container padding-t text-center">
        <img src={loginImgPng} class="ms-1 img-login" alt="favorito" />

        <h1 class="title-login-register">
          Te damos la bienvenida a <span class="fuente5">Board Kingdom</span>
        </h1>
        <form class="container-form-register mx-auto text-start mt-4">
          <div class="box-juegos mb-4">
            <div class="d-flex">
              <div class="col-4 pe-2">
                <label class="ms-2">Alias</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Elfo del Bosque"
                />
                <div class="ms-2 info-register">
                  <span>Hasta 20 caracteres.</span>
                </div>
              </div>

              <div class="col-8">
                <label class="ms-2">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="usuario@boardkingdom.com"
                />
              </div>
            </div>

            <div class="mb-4">
              <label class="ms-2">Password</label>
              <input type="password" class="form-control" />

              <div class="ms-2 info-register">
                <span>Debe tener al menos 3 caracteres y un número.</span>
              </div>
            </div>
          </div>

          <div class="text-center mb-2">
            <button type="submit" class="btn btn-secondary w-50">
              Crear mi cuenta
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export { Register };
