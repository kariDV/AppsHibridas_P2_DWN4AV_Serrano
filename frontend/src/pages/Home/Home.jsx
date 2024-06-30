import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import portadaPng from '../../assets/img/portada.png';

const Home = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <main>
      <div className="container padding-tb">
        <div className="d-flex row align-items-center">
          <div className="col-7">
            <h1 className="text-start fuente1 pb-3">
              Unite a la comunidad de
              <span className="d-block mt-2 fuente4">Board Kingdom</span>
            </h1>

            <div className="w-75">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                commodi atque cum repudiandae dolorum reiciendis similique quod
                ullam, consequuntur libero fuga quo quaerat! Obcaecati rem minus
                suscipit laboriosam tempora! Magnam?
              </p>
            </div>

            <div className="pt-4">
              <NavLink className="btn-action" to="/Register">
                Registrarme
              </NavLink>
            </div>
          </div>
          <div className="col-5">
            <img
              src={portadaPng}
              className="img-fluid img-portada"
              alt="imagen"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
