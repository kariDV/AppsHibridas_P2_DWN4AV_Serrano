import mongoose from 'mongoose';

// Schema
const favoritosSchema = new mongoose.Schema({
  idUsuario: {
    type: Number,
    required: true,
  },
  idJuego: {
    type: Number,
    required: true,
  },
});

favoritosSchema.index({ idUsuario: 1, idJuego: 1 }, { unique: true });

export default mongoose.model('favorito', favoritosSchema);
