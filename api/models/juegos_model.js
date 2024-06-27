import mongoose from 'mongoose';

// Schema
const juegoSchema = new mongoose.Schema({
  idJuego: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  idCategoria: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  editorial: {
    type: String,
    required: false,
  },
  tiempoDeJuego: {
    type: Number,
    required: false,
  },
});

export default mongoose.model('juego', juegoSchema);
