import React, { useEffect, useState } from 'react';
import axios from 'axios';
import portadaPng from '../../assets/img/portada.png';

const Subir = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div class="container padding-t text-center">
        <h1 class="title-login-register">Añadir un Nuevo Eurogame</h1>
        <p>
          Como miembro de Board Kingdom podrás añadir todos los Eurogames que
          gustes a la colección publica.
        </p>
        <p>
          Proporciona los detalles necesarios del formulario y ayuda a
          enriquecer a esta gran comunidad.
        </p>

        <form class="container-form-register mx-auto text-start mt-4">
          <div class="box-subir mb-4">
            <div class="d-flex">
              <div class="col-4 me-3">
                <img
                  src={portadaPng}
                  class="img-fluid img-portada"
                  alt="imagen"
                />

                <div class="mb-4">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Categoría</option>
                    <option value="1">Estrategia</option>
                    <option value="2">Rol</option>
                    <option value="3">Cartas</option>
                  </select>
                </div>
              </div>

              <div class="col-8 pe-2">
                <div>
                  <label class="ms-2">Título</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Elfo del Bosque"
                  />
                </div>

                <div class="d-flex row">
                  <div class="col-7">
                    <label class="ms-2">Editorial</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Elfo del Bosque"
                    />
                  </div>
                  <div class="col-5">
                    <label class="ms-2">Tiempo de juego</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Tiempo de juego</option>
                      <option value="1">15' a 35' min</option>
                      <option value="2">35' a 50' min</option>
                      <option value="3">50' a 120' min</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="ms-2">Descripción</label>
                  <textarea
                    name="textarea"
                    rows="5"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center mx-auto mb-2">
            <button
              type="submit"
              class="btn btn-secondary w-50 d-flex align-items-center justify-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Añadir a la Colección
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export { Subir };
