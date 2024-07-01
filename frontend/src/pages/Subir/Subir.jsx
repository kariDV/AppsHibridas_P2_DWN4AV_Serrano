import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrash,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

const Subir = () => {
  // HOOKS
  const [juegoForm, setJuegoForm] = useState({
    titulo: '',
    categoria: '',
    descripcion: '',
    editorial: '',
    tiempoDeJuego: 0,
    idUsuarioAlta: '',
  });
  const [misJuegos, setMisJuegos] = useState([]);
  const [subir, setSubir] = useState(false);
  const [subirOk, setSubirOk] = useState(false);

  const { user } = useContext(AuthContext);

  // EFFECTS
  useEffect(() => {
    if (user) {
      setJuegoForm({ ...juegoForm, idUsuarioAlta: user?.id });
      traerMisJuegos();
    }
  }, [user]);

  // COOKIES
  const token = Cookies.get('jwToken');
  const header = {
    headers: {
      'Content-Type': 'application/json',
      auth: token,
    },
  };

  // FUNCIONES
  const crearJuego = function (e) {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/juegos', juegoForm, header)
      .then((res) => {
        setSubirOk(true);
      })
      .catch((error) => {
        setSubirOk(false);
        console.log(error);
      })
      .finally(() => {
        setSubir(true);
        setTimeout(() => setSubir(false), 2500);
      });
  };

  const traerMisJuegos = function () {
    axios
      .get(`http://localhost:3000/api/juegos?usuario=${user.id}`)
      .then((res) => setMisJuegos(res.data));
  };

  return (
    <main>
      <div className="container padding-t text-center">
        <h1 className="title-login-register">Añadir un Nuevo Eurogame</h1>
        <p>
          Como miembro de Board Kingdom podrás añadir todos los Eurogames que
          gustes a la colección publica.
        </p>
        <p>
          Proporciona los detalles necesarios del formulario y ayuda a
          enriquecer a esta gran comunidad.
        </p>

        <form
          className="container-form-register mx-auto text-start mt-4"
          onSubmit={crearJuego}
        >
          <div className="box-subir mb-4">
            <div className="d-flex align-items-center">
              <div className="col-4 me-3">
                <div className="d-flex flex-column">
                  <div className="mb-4 d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faWandMagicSparkles}
                      className="icon-cat"
                    ></FontAwesomeIcon>
                  </div>

                  <div className="">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={juegoForm.categoria}
                      onChange={(e) =>
                        setJuegoForm({
                          ...juegoForm,
                          categoria: e.target.value,
                        })
                      }
                    >
                      <option value="Categoría">Categoría</option>
                      <option value="Estrategia">Estrategia</option>
                      <option value="Rol">Rol</option>
                      <option value="Cartas">Cartas</option>
                      <option value="Construcción">Construcción</option>
                      <option value="Comercio">Comercio</option>
                      <option value="Cooperativo">Cooperativo</option>
                      <option value="Party">Party</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-8 pe-2">
                <div>
                  <label className="ms-2">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Catan"
                    value={juegoForm.titulo}
                    onChange={(e) =>
                      setJuegoForm({ ...juegoForm, titulo: e.target.value })
                    }
                  />
                </div>

                <div className="d-flex row">
                  <div className="col-7">
                    <label className="ms-2">Editorial</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Devir"
                      value={juegoForm.editorial}
                      onChange={(e) =>
                        setJuegoForm({
                          ...juegoForm,
                          editorial: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-5">
                    <label className="ms-2">Tiempo de juego</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="25"
                      value={juegoForm.tiempoDeJuego}
                      onChange={(e) =>
                        setJuegoForm({
                          ...juegoForm,
                          tiempoDeJuego: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="ms-2">Descripción</label>
                  <textarea
                    name="textarea"
                    rows="5"
                    className="form-control"
                    placeholder="Catán es un popular juego de mesa estratégico en el que los jugadores colonizan una isla, construyendo asentamientos y carreteras, intercambiando recursos y compitiendo por obtener la mayor cantidad de puntos de victoria."
                    value={juegoForm.descripcion}
                    onChange={(e) =>
                      setJuegoForm({
                        ...juegoForm,
                        descripcion: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mx-auto mb-2">
            <button
              type="submit"
              className="btn btn-secondary w-50 d-flex align-items-center justify-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Añadir a la Colección
            </button>
          </div>
        </form>

        <div>
          <br />
          {subir ? (
            subirOk ? (
              <span className="fuente3">Juego Subido con Éxtio!</span>
            ) : (
              <span className="fuente2">
                No se pudo subir el juego cargado!
              </span>
            )
          ) : (
            <br />
          )}
        </div>
      </div>

      <div className="container bg-lista">
        <h2 className="text-start margin-t mb-5 h2-lista">
          Mi lista de juegos añadidos
        </h2>
        <ol>
          {misJuegos.map((juego) => (
            <li className="mb-5" key={juego._id}>
              <div className="box-juegos d-flex justify-content-start">
                <h3 className="col-3 fuente6 d-flex justify-content-start align-items-center">
                  {juego.titulo}
                </h3>
                <div className="col-1 d-flex flex-column justify-content-start align-items-start">
                  <span className="title-info">Categoría</span>
                  <p className="">{juego.categoria}</p>
                </div>
                <div className="col-1 d-flex flex-column">
                  <div className="mb-2">
                    <span className="title-info">Editorial</span>
                    <p className="">{juego.editorial}</p>
                  </div>
                  <div>
                    <span className="title-info">Tiempo</span>
                    <p className="">{juego.tiempoDeJuego}</p>
                  </div>
                </div>
                <div className="col-6 d-flex flex-column">
                  <span className="title-info">Descripción</span>
                  <p className="">{juego.descripcion}</p>
                </div>

                <div className="col-1 d-flex flex-column justify-content-start align-items-end">
                  <button className="btn mb-2 icon-acc">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="fa-2xl"
                    ></FontAwesomeIcon>
                  </button>
                  <button className="btn icon-acc-del">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="fa-2xl"
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export { Subir };
