import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import portadaPng from '../../assets/img/portada.png';

const Home = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div className='container padding-tb'>
        <div className='d-flex row align-items-center'>
          <div className='col-7'>
            <h1 className='text-start fuente1 pb-3'>
              Unite a la comunidad de
              <span className='d-block mt-2 fuente4'>Board Kingdom</span>
            </h1>

            <div className='w-75'>
              <p>
                Explorá la colección de eurogames y descubre emocionantes
                títulos. Únete hoy y haz crecer el mundo de los eurogames con
                nosotros.
              </p>
              <p>
                <strong>
                  Regístrate para subir tus propios juegos y compartirlos con la
                  comunidad.
                </strong>
              </p>
              <p className='pt-3'>¡Cada jugada es un nuevo desafío!</p>
            </div>

            <div className='pt-4'>
              <NavLink className='btn btn-action' to='/Register'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-person-add'
                    viewBox='0 0 16 16'
                  >
                    <path d='M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4' />
                    <path d='M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z' />
                  </svg>
                </span>
                Registrarme
              </NavLink>
            </div>
          </div>
          <div className='col-5'>
            <img
              src={portadaPng}
              className='img-fluid img-portada'
              alt='imagen'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
