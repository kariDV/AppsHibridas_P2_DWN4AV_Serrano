import mongoose from 'mongoose';

// Schema
const categoriaSchema = new mongoose.Schema({
  idCategoria: {
    type: Number,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

export default mongoose.model('categoria', categoriaSchema);
