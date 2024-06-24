import express from 'express';
import {
  getUsuarios,
  createUsuario,
} from '../controllers/usuarios_controller.js';
import verificarToken from '../middlewares/auth.js';

const ruta = express.Router();

ruta.get('/', verificarToken, (req, res) => {
  let resultado;
  // busqueda de todos los usuarios
  resultado = getUsuarios();
  resultado
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error));
});

ruta.post('/', (req, res) => {
  let body = req.body;

  let resultado = createUsuario(body);
  resultado
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error));
});

export default ruta;
