import express from 'express';
import {
  getUsuarios,
  getUsuarioId,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from '../controllers/usuarios_controller.js';
import verificarToken from '../middlewares/auth.js';

const ruta = express.Router();

ruta.get('/', verificarToken, (req, res) => {
  // ruta.get('/', (req, res) => {
  let resultado;
  // busqueda de todos los usuarios
  resultado = getUsuarios();
  resultado
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error));
});

ruta.get('/:id', verificarToken, (req, res) => {
  // ruta.get('/:id', (req, res) => {
  let idUsuario = req.params.id;
  // busqueda de usuario por id
  let resultado = getUsuarioId(idUsuario);

  resultado
    .then((usuario) => {
      if (usuario.length) {
        res.status(200).json(usuario);
      } else {
        res.status(200).send('No se encontró el usuario');
      }
    })
    .catch((error) => res.status(400).json(error));
});

ruta.post('/', (req, res) => {
  let body = req.body;

  let resultado = createUsuario(body);
  resultado
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error));
});

ruta.put('/:id', verificarToken, (req, res) => {
  // ruta.put('/:id', (req, res) => {
  let idUsuario = req.params.id;
  let body = req.body;

  let resultado = updateUsuario(idUsuario, body);
  resultado
    .then((usuario) => res.status(200).json(usuario))
    .catch((error) => res.status(400).json(error));
});

ruta.delete('/:id', verificarToken, (req, res) => {
  // ruta.delete('/:id', (req, res) => {
  let idUsuario = req.params.id;

  let resultado = deleteUsuario(idUsuario);
  resultado
    .then((usuario) => res.status(200).json(usuario))
    .catch((error) => res.status(400).json(error));
});

export default ruta;
