import Usuarios from '../models/usuarios_model.js';
import bcrypt from 'bcrypt';

async function getUsuarios() {
  let usuarios = await Usuarios.find();
  return usuarios;
}

async function getUsuarioId(idUsuario) {
  let usuarios = await Usuarios.find({ _id: idUsuario });
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
    alias: body.alias,
  });

  return await nuevoUsuario.save();
}

async function updateUsuario(idUsuario, body) {
  let updatedUsuario = Usuarios.updateOne(
    { _id: idUsuario },
    {
      $set: {
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        alias: body.alias,
      },
    }
  );
  return updatedUsuario;
}

async function deleteUsuario(idUsuario) {
  let usuarioDelete = Usuarios.findOneAndDelete({ _id: idUsuario });
  return usuarioDelete;
}

export {
  getUsuarios,
  getUsuarioId,
  getUsuarioEmail,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
