import mongoose from 'mongoose';

// Schema
const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
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
  idUsuarioAlta: {
    type: String,
    required: true,
  },
});

export default mongoose.model('juego', juegoSchema);
