'use strict';

const mongoose = require ('mongoose');

// Definimos un esquema
const usuarioSchema = mongoose.Schema ({
  name: String,
  email: { type: String, unique:true },
  password: String
    
});


// creamos el modelo

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
