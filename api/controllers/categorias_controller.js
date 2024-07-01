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
  let categoria = await Categorias.find({ _id: idCategoria });
  return categoria;
}

async function createCategoria(body) {
  let nuevaCategoria = new Categorias({
    titulo: body.titulo,
    descripcion: body.descripcion,
  });
  return await nuevaCategoria.save();
}

async function updateCatId(idCategoria, body) {
  let cateModificada = Categorias.updateOne(
    { _id: idCategoria },
    {
      $set: {
        titulo: body.titulo,
        descripcion: body.descripcion,
      },
    }
  );
  return cateModificada;
}

async function deleteCatId(idCategoria) {
  let catDelete = Categorias.findOneAndDelete({ _id: idCategoria });
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
