import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Favoritos = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <h1 className="title-login-register text-center padding-title">
        <FontAwesomeIcon icon={faHeart} className="fa-sm"></FontAwesomeIcon> Mi
        lista de Eurogames favoritos
      </h1>

      <div className="container">
        <ol>
          <li className="mb-5">
            <div className="box-juegos d-flex justify-content-start">
              <h2 className="col-3 fuente6 d-flex justify-content-start align-items-center">
                Love Letter
              </h2>
              <div className="col-1 d-flex flex-column justify-content-start align-items-start">
                <span className="title-info">Categoría</span>
                <p className="">Party</p>
              </div>
              <div className="col-1 d-flex flex-column">
                <div className="mb-2">
                  <span className="title-info">Editorial</span>
                  <p className="">Devir</p>
                </div>
                <div>
                  <span className="title-info">Tiempo</span>
                  <p className="">30' a 45'</p>
                </div>
              </div>
              <div className="col-6 d-flex flex-column">
                <span className="title-info">Descripción</span>
                <p className="">
                  Love Letter es un juego de cartas estratégico y rápido para 2
                  a 4 jugadores. Los jugadores intentan entregar su carta de
                  amor a la princesa mientras eliminan a sus oponentes usando
                  efectos de cartas. El objetivo es ser el último en pie o tener
                  la carta de mayor valor al final de la ronda.
                </p>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center align-items-end">
                <span className="title-info-alta">Subido por :</span>
                <p className="text-center user-alta">Elfa del Bosque</p>
              </div>
            </div>
          </li>

          <li className="mb-5">
            <div className="box-juegos d-flex justify-content-start">
              <h2 className="col-3 fuente6 d-flex justify-content-start align-items-center">
                Love Letter
              </h2>
              <div className="col-1 d-flex flex-column justify-content-start align-items-start">
                <span className="title-info">Categoría</span>
                <p className="">Party</p>
              </div>
              <div className="col-1 d-flex flex-column">
                <div className="mb-2">
                  <span className="title-info">Editorial</span>
                  <p className="">Devir</p>
                </div>
                <div>
                  <span className="title-info">Tiempo</span>
                  <p className="">30' a 45'</p>
                </div>
              </div>
              <div className="col-6 d-flex flex-column">
                <span className="title-info">Descripción</span>
                <p className="">
                  Love Letter es un juego de cartas estratégico y rápido para 2
                  a 4 jugadores. Los jugadores intentan entregar su carta de
                  amor a la princesa mientras eliminan a sus oponentes usando
                  efectos de cartas. El objetivo es ser el último en pie o tener
                  la carta de mayor valor al final de la ronda.
                </p>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center align-items-end">
                <span className="title-info-alta">Subido por :</span>
                <p className="text-center user-alta">Elfa del Bosque</p>
              </div>
            </div>
          </li>
        </ol>

        <div className="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a className="page-link">
                  <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    className="fa-2xl me-2"
                  ></FontAwesomeIcon>
                  Anterior
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
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

export { Favoritos };
