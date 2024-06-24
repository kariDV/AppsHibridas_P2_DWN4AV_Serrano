import Usuarios from '../models/usuarios_model.js';

async function getUsuarios() {
  let usuarios = await Usuarios.find();
  return usuarios;
}

async function createUsuario(body) {
  let nuevoUsuario = new Usuarios({
    email: body.email,
    password: body.password,
  });

  return await nuevoUsuario.save();
}

export { getUsuarios, createUsuario };
