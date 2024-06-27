import Favoritos from '../models/favoritos_model.js';

async function buscarFavoritos(idUsuario) {
  let favoritos = Favoritos.find({ idUsuario: idUsuario });
  return favoritos;
}

async function createFavorito(body) {
  let nuevoFavorito = new Favoritos({
    idUsuario: body.idUsuario,
    idJuego: body.idJuego,
  });
  return await nuevoFavorito.save();
}

async function deleteFavorito(body) {
  let deletedFavorito = Favoritos.findOneAndDelete({
    idUsuario: body.idUsuario,
    idJuego: body.idJuego,
  });
  return deletedFavorito;
}

export { buscarFavoritos, createFavorito, deleteFavorito };
