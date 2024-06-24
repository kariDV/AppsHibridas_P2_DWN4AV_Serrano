import express from 'express';
import { getUsuarios } from '../controllers/usuarios_controller.js';

const ruta = express.Router();

ruta.get('/', (req, res) => {
  let resultado;
  // busqueda de todos los usuarios
  resultado = getUsuarios();

  resultado
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error));
});

export default ruta;
