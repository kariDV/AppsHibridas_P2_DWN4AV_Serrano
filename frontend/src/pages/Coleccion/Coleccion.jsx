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
  faHeart as faHeartFav,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Coleccion = () => {
  // HOOKS
  const [favorito, setFavorito] = useState(false);
  const [juegos, setJuegos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    buscarJuegos();
  }, []);

  // FUNCIONES
  const handleFavorito = function () {
    setFavorito(!favorito);
  };

  const buscarJuegos = function () {
    try {
      const res = axios.get('http://localhost:3000/api/juegos');
      res.then((resAPI) => setJuegos(resAPI.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className='padding-t text-center bg-carousel padding-carousel'>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon icon={faBullseye} className='px-5 fa-2xl' />
                <p>Estrategia</p>
              </button>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon icon={faHammer} className='px-5 fa-2xl' />
                <p>Construcción</p>
              </button>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon
                  icon={faHandshakeAngle}
                  className='px-5 fa-2xl'
                />
                <p>Cooperativo</p>
              </button>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className='px-5 fa-2xl'
                />
                <p>Rol</p>
              </button>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon icon={faCakeCandles} className='px-5 fa-2xl' />
                <p>Party</p>
              </button>
            </div>
            <div className='carousel-item'>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon icon={faDiamond} className='px-5 fa-2xl' />
                <p>Cartas</p>
              </button>
              <button className='btn flex-wrap btn-categoria'>
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  className='px-5 fa-2xl'
                />
                <p>Comercio</p>
              </button>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>

      <h1 className='fuente6 text-center mt-5'>
        Explorá aquí la lista de Eurogames
      </h1>

      <nav className='padding-search'>
        <div className='container'>
          <form className='d-flex position-1' role='search'>
            <input
              className='form-control form-search-style'
              type='search'
              placeholder='¿Qué Eurogame estas buscando?'
              aria-label='Search'
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className='color-style'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-search position-2'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </div>
          </form>
        </div>
      </nav>

      <div className='container'>
        <ol>
          {juegos.map(
            (juego) =>
              juego.titulo.toLowerCase().includes(busqueda) && (
                <li className='mb-5' key={juego._id}>
                  <div className='box-juegos d-flex justify-content-start'>
                    <h2 className='col-3 fuente6 d-flex justify-content-start align-items-center'>
                      {juego.titulo}
                    </h2>
                    <div className='col-1 d-flex flex-column justify-content-start align-items-start'>
                      <span className='title-info'>Categoría</span>
                      <p className=''>{juego.categoria}</p>
                    </div>
                    <div className='col-2 d-flex flex-column'>
                      <div className='mb-2'>
                        <span className='title-info'>Editorial</span>
                        <p className=''>{juego.editorial}</p>
                      </div>
                      <div>
                        <span className='title-info'>Tiempo</span>
                        <p className=''>{juego.tiempoDeJuego}</p>
                      </div>
                    </div>
                    <div className='col-5 d-flex flex-column'>
                      <span className='title-info'>Descripción</span>
                      <p className=''>{juego.descripcion}</p>
                    </div>

                    <div className='col-1 d-flex justify-content-center align-items-center'>
                      <div onClick={handleFavorito}>
                        {favorito ? (
                          <FontAwesomeIcon
                            icon={faHeartFav}
                            className='fa-2xl heart-label'
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            icon={faHeart}
                            className='fa-2xl heart-label'
                          ></FontAwesomeIcon>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}
        </ol>

        <div className='d-flex justify-content-center mt-5'>
          <nav aria-label='Page navigation'>
            <ul className='pagination justify-content-end'>
              <li className='page-item'>
                <a className='page-link'>
                  <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    className='fa-2xl me-2'
                  ></FontAwesomeIcon>
                  Anterior
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  1
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  2
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  3
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  Siguiente
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className='fa-2xl me-2'
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
