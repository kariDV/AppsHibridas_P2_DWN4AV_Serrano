import mongoose from 'mongoose';

// Schema
const favoritosSchema = new mongoose.Schema({
  idUsuario: {
    type: String,
    required: true,
  },
  idJuego: {
    type: String,
    required: true,
  },
});

favoritosSchema.index({ idUsuario: 1, idJuego: 1 }, { unique: true });

export default mongoose.model('favorito', favoritosSchema);
