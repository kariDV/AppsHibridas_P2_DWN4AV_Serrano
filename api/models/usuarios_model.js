import mongoose from 'mongoose';

// Schema
const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
});

export default mongoose.model('usuario', UsuarioSchema);
