import mongoose from 'mongoose';

// Schema
const UsuarioSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('usuario', UsuarioSchema);
