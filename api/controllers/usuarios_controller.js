import Usuarios from '../models/usuarios_model.js';

async function getUsuarios() {
  let usuarios = await Usuarios.find();
  return usuarios;
}

export { getUsuarios };
