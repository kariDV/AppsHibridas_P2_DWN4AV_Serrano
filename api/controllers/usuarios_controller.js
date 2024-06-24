import Usuarios from '../models/usuarios_model.js';
import bcrypt from 'bcrypt';

async function getUsuarios() {
  let usuarios = await Usuarios.find();
  return usuarios;
}

async function createUsuario(body) {
  let nuevoUsuario = new Usuarios({
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });

  return await nuevoUsuario.save();
}

export { getUsuarios, createUsuario };
