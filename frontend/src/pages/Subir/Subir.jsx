import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrash,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
// import portadaPng from "../../assets/img/portada.png";

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
            <div class="d-flex align-items-center">
              <div class="col-4 me-3">
                <div class="d-flex flex-column">
                  <div class="mb-4 d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faWandMagicSparkles}
                      className="icon-cat"
                    ></FontAwesomeIcon>
                  </div>

                  <div class="">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Categoría</option>
                      <option value="1">Estrategia</option>
                      <option value="2">Rol</option>
                      <option value="3">Cartas</option>
                      <option value="4">Construcción</option>
                      <option value="5">Comercio</option>
                      <option value="6">Cooperativo</option>
                      <option value="7">Party</option>
                    </select>
                  </div>
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

      <div class="container bg-lista">
        <h2 class="text-start margin-t mb-5 h2-lista">
          Mi lista de juegos añadidos
        </h2>
        <ol>
          <li class="mb-5">
            <div class="box-juegos d-flex justify-content-start">
              <h3 class="col-3 fuente6 d-flex justify-content-start align-items-center">
                Love Letter
              </h3>
              <div class="col-1 d-flex flex-column justify-content-start align-items-start">
                <span class="title-info">Categoría</span>
                <p class="">Party</p>
              </div>
              <div class="col-1 d-flex flex-column">
                <div class="mb-2">
                  <span class="title-info">Editorial</span>
                  <p class="">Devir</p>
                </div>
                <div>
                  <span class="title-info">Tiempo</span>
                  <p class="">30' a 45'</p>
                </div>
              </div>
              <div class="col-6 d-flex flex-column">
                <span class="title-info">Descripción</span>
                <p class="">
                  Love Letter es un juego de cartas estratégico y rápido para 2
                  a 4 jugadores. Los jugadores intentan entregar su carta de
                  amor a la princesa mientras eliminan a sus oponentes usando
                  efectos de cartas. El objetivo es ser el último en pie o tener
                  la carta de mayor valor al final de la ronda.
                </p>
              </div>

              <div class="col-1 d-flex flex-column justify-content-start align-items-end">
                <button class="btn mb-2 icon-acc">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="fa-2xl"
                  ></FontAwesomeIcon>
                </button>
                <button class="btn icon-acc-del">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fa-2xl"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </li>

          <li class="mb-5">
            <div class="box-juegos d-flex justify-content-start">
              <h3 class="col-3 fuente6 d-flex justify-content-start align-items-center">
                Love Letter
              </h3>
              <div class="col-1 d-flex flex-column justify-content-start align-items-start">
                <span class="title-info">Categoría</span>
                <p class="">Party</p>
              </div>
              <div class="col-1 d-flex flex-column">
                <div class="mb-2">
                  <span class="title-info">Editorial</span>
                  <p class="">Devir</p>
                </div>
                <div>
                  <span class="title-info">Tiempo</span>
                  <p class="">30' a 45'</p>
                </div>
              </div>
              <div class="col-6 d-flex flex-column">
                <span class="title-info">Descripción</span>
                <p class="">
                  Love Letter es un juego de cartas estratégico y rápido para 2
                  a 4 jugadores. Los jugadores intentan entregar su carta de
                  amor a la princesa mientras eliminan a sus oponentes usando
                  efectos de cartas. El objetivo es ser el último en pie o tener
                  la carta de mayor valor al final de la ronda.
                </p>
              </div>

              <div class="col-1 d-flex flex-column justify-content-start align-items-end">
                <button class="btn mb-2 icon-acc">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="fa-2xl"
                  ></FontAwesomeIcon>
                </button>
                <button class="btn icon-acc-del">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fa-2xl"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </main>
  );
};

export { Subir };
