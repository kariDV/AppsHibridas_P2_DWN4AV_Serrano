import Usuarios from '../models/usuarios_model.js';
import bcrypt from 'bcrypt';

async function getUsuarios() {
  let usuarios = await Usuarios.find();
  return usuarios;
}

async function getUsuarioEmail(body) {
  let usuario = await Usuarios.findOne({ email: body.email });
  return usuario;
}

async function createUsuario(body) {
  let nuevoUsuario = new Usuarios({
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });

  return await nuevoUsuario.save();
}

export { getUsuarios, getUsuarioEmail, createUsuario };
