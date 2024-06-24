import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

import { getUsuarioEmail } from '../controllers/usuarios_controller.js';

const ruta = express.Router();

ruta.post('/', (req, res) => {
  let body = req.body;

  let usuarioRecuperado = getUsuarioEmail(body);
  usuarioRecuperado
    .then((user) => {
      if (user) {
        const passValida = bcrypt.compareSync(body.password, user.password);
        if (passValida) {
          // firma --> semilla

          console.log('✅');

          const tokenJwt = jwt.sign(
            {
              usuario: {
                _id: user._id,
                email: user.email,
              },
            },
            process.env.SEED,
            { expiresIn: process.env.EXPIRATION }
          );

          res.status(200).json({
            usuario: {
              _id: user._id,
              email: user.email,
            },
            tokenJwt,
          });
          // res.status(200).send('password correcta! ✅');
        } else {
          res.status(200).send('password incorrecta! ⛔');
        }
      } else {
        res.status(400).send('usuario inexistente! 🤷🏻');
      }
    })
    .catch((error) => res.status(400).json(error));
});

export default ruta;
