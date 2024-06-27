import express from 'express';
import {
  getCategorias,
  getCategoriaTitulo,
  getCategoriaId,
  createCategoria,
  updateCatId,
  deleteCatId,
} from '../controllers/categorias_controller.js';
import verificarToken from '../middlewares/auth.js';

const ruta = express.Router();

ruta.get('/', (req, res) => {
  let resultado;
  if (req.query.titulo) {
    resultado = getCategoriaTitulo(req.query.titulo);
  } else {
    resultado = getCategorias();
  }
  resultado
    .then((categorias) => res.status(200).json(categorias))
    .catch((error) => res.status(400).json(error));
});

ruta.get('/:id', (req, res) => {
  let idCategoria = req.params.id;
  let resultado = getCategoriaId(idCategoria);
  resultado
    .then((categoria) => {
      if (categoria.length) {
        res.status(200).json(categoria);
      } else {
        res.status(200).send('No se encontró la categoría');
      }
    })
    .catch((error) => res.status(400).json(error));
});

ruta.post('/', verificarToken, (req, res) => {
  // ruta.post('/', (req, res) => {
  let body = req.body;
  let resultado = createCategoria(body);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

ruta.put('/:id', verificarToken, (req, res) => {
  // ruta.put('/:id', (req, res) => {
  let body = req.body;
  let idCategoria = req.params.id;
  let resultado = updateCatId(idCategoria, body);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

ruta.delete('/:id', verificarToken, (req, res) => {
  // ruta.delete('/:id', (req, res) => {
  let idCategoria = req.params.id;
  let resultado = deleteCatId(idCategoria);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

export default ruta;
