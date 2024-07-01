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

async function getJuegoCategoria(cat) {
  let juegosSelec = await Juegos.find({ categoria: cat });
  return juegosSelec;
}

async function getJuegosPagina(pagina) {
  let limite = 10;
  let juegos = await Juegos.find()
    .skip((pagina - 1) * limite)
    .limit(limite);
  return juegos;
}

async function getJuegosUsuario(idUsuario) {
  let juegosSelec = await Juegos.find({ idUsuarioAlta: idUsuario });
  return juegosSelec;
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
  let juegoSelec = await Juegos.find({ _id: idJuego });
  return juegoSelec;
}

async function createJuego(body) {
  let nuevoJuego = new Juegos({
    titulo: body.titulo,
    categoria: body.categoria,
    descripcion: body.descripcion,
    editorial: body.editorial,
    tiempoDeJuego: body.tiempoDeJuego,
    idUsuarioAlta: body.idUsuarioAlta,
  });
  return await nuevoJuego.save();
}

async function updateJuegoId(idJuego, body) {
  let juegoModificado = Juegos.updateOne(
    { _id: idJuego },
    {
      $set: {
        titulo: body.titulo,
        categoria: body.categoria,
        descripcion: body.descripcion,
        editorial: body.editorial,
        tiempoDeJuego: body.tiempoDeJuego,
      },
    }
  );
  return juegoModificado;
}

async function deleteJuegoId(idJuego) {
  let juegoDelete = Juegos.findOneAndDelete({ _id: idJuego });
  return juegoDelete;
}

export {
  getJuegos,
  getJuegoTitulo,
  getJuegoCategoria,
  getJuegosPagina,
  getJuegosUsuario,
  getJuegosOrden,
  getJuegoId,
  createJuego,
  updateJuegoId,
  deleteJuegoId,
};
