import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
              </button>
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
              </button>
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
              </button>
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
              </button>
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
              </button>
            </div>
            <div class="carousel-item">
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
              </button>
              <button class="btn flex-wrap">
                <img
                  src="./img/favorito.svg"
                  class="img-fluid px-5"
                  alt="..."
                />
                <p>Categoría</p>
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
          <li>
            <div class="box-juegos">
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
      </div>
    </main>
  );
};

export { Coleccion };
