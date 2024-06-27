import Juegos from '../models/juegos_model.js';

async function getJuegos() {
  let juegos = await Juegos.find();
  return juegos;
}

async function getJuegoTitulo(tit) {
  const titFix = tit.replace('-', ' ').replace('_', ' ');
  let juegosSelec = await Juegos.find({
    titulo: { $regex: titFix, $options: 'i' },
  });
  return juegosSelec;
}

async function getJuegoCategoria(idCat) {
  let juegosSelec = await Juegos.find({ idCategoria: idCat });
  return juegosSelec;
}

async function getJuegosPagina(pagina) {
  let limite = 10;
  let juegos = await Juegos.find()
    .skip((pagina - 1) * limite)
    .limit(limite);
  return juegos;
}

async function getJuegosOrden() {
  let juegos = await Juegos.find();
  juegos.sort(function (a, b) {
    if (a.titulo > b.titulo) {
      return 1;
    }
    if (a.titulo < b.titulo) {
      return -1;
    }
    return 0;
  });
  return juegos;
}

async function getJuegoId(idJuego) {
  let juegoSelec = await Juegos.find({ idJuego: idJuego });
  return juegoSelec;
}

async function createJuego(body) {
  let nuevoJuego = new Juegos({
    idJuego: body.idJuego,
    titulo: body.titulo,
    idCategoria: body.idCategoria,
    descripcion: body.descripcion,
    editorial: body.editorial,
    tiempoDeJuego: body.tiempoDeJuego,
  });
  return await nuevoJuego.save();
}

async function updateJuegoId(idJuego, body) {
  let juegoModificado = Juegos.updateOne(
    { idJuego: idJuego },
    {
      $set: {
        idJuego: body.idJuego,
        titulo: body.titulo,
        idCategoria: body.idCategoria,
        descripcion: body.descripcion,
        editorial: body.editorial,
        tiempoDeJuego: body.tiempoDeJuego,
      },
    }
  );
  return juegoModificado;
}

async function deleteJuegoId(idJuego) {
  let juegoDelete = Juegos.findOneAndDelete({ idJuego: idJuego });
  return juegoDelete;
}

export {
  getJuegos,
  getJuegoTitulo,
  getJuegoCategoria,
  getJuegosPagina,
  getJuegosOrden,
  getJuegoId,
  createJuego,
  updateJuegoId,
  deleteJuegoId,
};
