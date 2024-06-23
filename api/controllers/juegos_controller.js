import Juegos from "../models/juegos_model.js";

async function getJuegos() {
  let juegos = await Juegos.find();
  return juegos;
}

async function getJuegoTitulo(tit) {
  let juegoSelec = await Juegos.find({ titulo: tit });
  return juegoSelec;
}

async function getJuegoCategoria(cat) {
  let juegosSelec = await Juegos.find({ categoria: cat });
  return juegosSelec;
}

async function getJuegosPagina(pagina) {
  let limite = 2;
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

async function getJuegoId(id) {
  let juegoSelec = await Juegos.find({ id: id });
  return juegoSelec;
}

async function createJuego(body) {
  let nuevoJuego = new Juegos({
    id: body.id,
    titulo: body.titulo,
    categoria: body.categoria,
    editorial: body.editorial,
    tiempoDeJuego: body.tiempoDeJuego,
    precio: body.precio,
  });
  return await nuevoJuego.save();
}

async function updateJuegoId(id, body) {
  let juegoModificado = Juegos.updateOne(
    { id: id },
    {
      $set: {
        titulo: body.titulo,
        categoria: body.categoria,
        editorial: body.editorial,
        tiempoDeJuego: body.tiempoDeJuego,
        precio: body.precio,
      },
    }
  );
  return juegoModificado;
}

async function deleteJuegoId(id) {
  let juegoDelete = Juegos.findOneAndDelete({ id: id });
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
