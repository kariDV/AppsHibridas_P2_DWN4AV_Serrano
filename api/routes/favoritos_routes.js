import express from 'express';
import {
  buscarFavoritos,
  createFavorito,
  deleteFavorito,
} from '../controllers/favoritos_controller.js';
import verificarToken from '../middlewares/auth.js';

const ruta = express.Router();

ruta.get('/:id', (req, res) => {
  let idUsuario = req.params.id;

  let resultado = buscarFavoritos(idUsuario);
  resultado
    .then((favorito) => {
      if (favorito.length) {
        res.status(200).json(favorito);
      } else {
        res.status(200).send('No se encontró favoritos para el usuario');
      }
    })
    .catch((error) => res.status(400).json(error));
});

ruta.post('/', (req, res) => {
  let body = req.body;
  let resultado = createFavorito(body);
  resultado
    .then((favorito) => res.status(201).json(favorito))
    .catch((error) => res.status(400).json(error));
});

ruta.delete('/', (req, res) => {
  let body = req.body;

  let resultado = deleteFavorito(body);
  resultado
    .then((favorito) => res.status(201).json(favorito))
    .catch((error) => res.status(400).json(error));
});

export default ruta;
