import mongoose from 'mongoose';

// Schema
const categoriaSchema = new mongoose.Schema({
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
