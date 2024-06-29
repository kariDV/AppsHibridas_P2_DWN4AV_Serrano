import React, { useEffect, useState } from 'react';
import axios from 'axios';
import portadaPng from '../../assets/img/portada.png';

const Home = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get('http://localhost:3000/usuario')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <main>
      <div class="container padding-tb">
        <div class="d-flex row align-items-center">
          <div class="col-7">
            <h1 class="text-start fuente1 pb-3">
              Unite a la comunidad de
              <span class="d-block mt-2 fuente4">Board Kingdom</span>
            </h1>

            <div class="w-75">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                commodi atque cum repudiandae dolorum reiciendis similique quod
                ullam, consequuntur libero fuga quo quaerat! Obcaecati rem minus
                suscipit laboriosam tempora! Magnam?
              </p>
            </div>

            <div class="pt-4">
              <button class="btn-action">Registrarme</button>
            </div>
          </div>
          <div class="col-5">
            <img src={portadaPng} class="img-fluid img-portada" alt="imagen" />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
