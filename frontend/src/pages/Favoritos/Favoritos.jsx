import React, { useEffect, useState } from "react";
import axios from "axios";

const Favoritos = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <h1 class="title-login-register text-center padding-title">
        <i class="fa-solid fa-heart fa-sm"></i> Mi lista de Eurogames favoritos
      </h1>

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
              <div class="col-1 d-flex flex-column justify-content-center align-items-end">
                <span class="title-info-alta">Subido por :</span>
                <p class="text-center user-alta">Elfa del Bosque</p>
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
              <div class="col-1 d-flex flex-column justify-content-center align-items-end">
                <span class="title-info-alta">Subido por :</span>
                <p class="text-center user-alta">Elfa del Bosque</p>
              </div>
            </div>
          </li>
        </ol>

        <div class="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
              <li class="page-item">
                <a class="page-link">
                  <i class="fa-solid fa-circle-chevron-left fa-2xl me-2"></i>
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
                  <i class="fa-solid fa-circle-chevron-right fa-2xl ms-2"></i>
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
