import Categorias from '../models/categorias_model.js';

async function getCategorias() {
  let categoria = await Categorias.find();
  return categoria;
}

async function getCategoriaTitulo(tit) {
  const titFix = tit.replace('-', ' ').replace('_', ' ');
  let categoria = await Categorias.find({
    titulo: { $regex: titFix, $options: 'i' },
  });
  return categoria;
}

async function getCategoriaId(idCategoria) {
  let categoria = await Categorias.find({ idCategoria: idCategoria });
  return categoria;
}

async function createCategoria(body) {
  let nuevaCategoria = new Categorias({
    idCategoria: body.idCategoria,
    titulo: body.titulo,
    descripcion: body.descripcion,
  });
  return await nuevaCategoria.save();
}

async function updateCatId(idCategoria, body) {
  let cateModificada = Categorias.updateOne(
    { idCategoria: idCategoria },
    {
      $set: {
        idCategoria: body.idCategoria,
        titulo: body.titulo,
        descripcion: body.descripcion,
      },
    }
  );
  return cateModificada;
}

async function deleteCatId(idCategoria) {
  let catDelete = Categorias.findOneAndDelete({ idCategoria: idCategoria });
  return catDelete;
}

export {
  getCategorias,
  getCategoriaTitulo,
  getCategoriaId,
  createCategoria,
  updateCatId,
  deleteCatId,
};
