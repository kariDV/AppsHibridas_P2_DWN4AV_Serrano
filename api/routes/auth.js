import express from 'express';

import { getUsuarioEmail } from '../controllers/usuarios_controller.js';

const ruta = express.Router();

ruta.post('/', (req, res) => {
  let body = req.body;

  let resultado = getUsuarioEmail(body);
  resultado
    .then((usuario) => res.status(200).json(usuario))
    .catch((error) => res.status(400).json(error));
});

export default ruta;
