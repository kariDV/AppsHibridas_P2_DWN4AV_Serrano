import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faCakeCandles,
  faCircleChevronLeft,
  faCircleChevronRight,
  faDiamond,
  faHammer,
  faHandHoldingDollar,
  faHandshakeAngle,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
// import portadaPng from '../../assets/img/portada.png';

const Coleccion = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div class="padding-t text-center bg-carousel padding-carousel">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon icon={faBullseye} className="px-5 fa-2xl" />
                <p>Estrategia</p>
              </button>
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon icon={faHammer} className="px-5 fa-2xl" />
                <p>Construcción</p>
              </button>
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon
                  icon={faHandshakeAngle}
                  className="px-5 fa-2xl"
                />
                <p>Cooperativo</p>
              </button>
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="px-5 fa-2xl"
                />
                <p>Rol</p>
              </button>
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon icon={faCakeCandles} className="px-5 fa-2xl" />
                <p>Party</p>
              </button>
            </div>
            <div class="carousel-item">
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon icon={faDiamond} className="px-5 fa-2xl" />
                <p>Cartas</p>
              </button>
              <button class="btn flex-wrap btn-categoria">
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  className="px-5 fa-2xl"
                />
                <p>Comercio</p>
              </button>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h1 class="fuente6 text-center mt-5">
        Explorá aquí la lista de Eurogames
      </h1>

      <nav class="padding-search">
        <div class="container">
          <form class="d-flex position-1" role="search">
            <input
              class="form-control form-search-style"
              type="search"
              placeholder="¿Qué Eurogame estas buscando?"
              aria-label="Search"
            />
            <div class="color-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-search position-2"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </form>
        </div>
      </nav>

      <div class="container">
        <ol>
          <li class="mb-5">
            <div class="box-juegos d-flex justify-content-start">
              <h2 class="col-3 fuente6 d-flex justify-content-start align-items-center">
                Love Letter
              </h2>
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
              <div class="col-5 d-flex flex-column">
                <span class="title-info">Descripción</span>
                <p class="">
                  Love Letter es un juego de cartas estratégico y rápido para 2
                  a 4 jugadores. Los jugadores intentan entregar su carta de
                  amor a la princesa mientras eliminan a sus oponentes usando
                  efectos de cartas. El objetivo es ser el último en pie o tener
                  la carta de mayor valor al final de la ronda.
                </p>
              </div>
              <div class="col-1 d-flex flex-column justify-content-center align-items-end">
                <span class="title-info-alta">Subido por :</span>
                <p class="text-center user-alta">Elfa del Bosque</p>
              </div>

              <div class="col-1 d-flex justify-content-center align-items-center">
                <input
                  type="checkbox"
                  id="heart-checkbox"
                  class="heart-checkbox"
                />
                <label for="heart-checkbox" class="heart-label"></label>
              </div>
            </div>
          </li>
          <li class="mb-5">
            <div class="box-juegos d-flex justify-content-start">
              <h2 class="col-3 fuente6 d-flex justify-content-start align-items-center">
                Love Letter
              </h2>
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
              <div class="col-5 d-flex flex-column">
                <span class="title-info">Descripción</span>
                <p class="">
                  Love Letter es un juego de cartas estratégico y rápido para 2
                  a 4 jugadores. Los jugadores intentan entregar su carta de
                  amor a la princesa mientras eliminan a sus oponentes usando
                  efectos de cartas. El objetivo es ser el último en pie o tener
                  la carta de mayor valor al final de la ronda.
                </p>
              </div>
              <div class="col-1 d-flex flex-column justify-content-center align-items-end">
                <span class="title-info-alta">Subido por :</span>
                <p class="text-center user-alta">Elfa del Bosque</p>
              </div>

              <div class="col-1 d-flex justify-content-center align-items-center">
                <input
                  type="checkbox"
                  id="heart-checkbox-1"
                  class="heart-checkbox"
                />
                <label for="heart-checkbox-1" class="heart-label"></label>
              </div>
            </div>
          </li>
          <li>
            <div class="box-juegos mt-5">
              <p>JUEGO</p>
            </div>
          </li>
          <li>
            <div class="box-juegos mt-5">
              <p>JUEGO</p>
            </div>
          </li>
          <li>
            <div class="box-juegos mt-5">
              <p>JUEGO</p>
            </div>
          </li>
        </ol>

        <div class="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
              <li class="page-item">
                <a class="page-link">
                  <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    className="fa-2xl me-2"
                  ></FontAwesomeIcon>
                  Anterior
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Siguiente
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="fa-2xl me-2"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export { Coleccion };
