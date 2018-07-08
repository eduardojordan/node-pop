'use strict';

const mongoose = require ('mongoose');
/*
 Definimos un Schema
*/

const anuncioSchema = mongoose.Schema ({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]  
});


/*
 Metodo estatico Lista y Precios
*/

//creamos un metodo estatico (lo tiene el modelo , no las instancias)
anuncioSchema.statics.list = function (filter, skip, limit, fields, sort){
//crear la query sin ejecutarla
const query = Anuncio.find(filter);
query.skip(skip);
query.limit(limit);
query.select(fields);
query.sort(sort);
;
//ejecutamos la query y devolvemos una promesa
return query.exec();
}


/*
 Metodo estatico Borrar BD
*/

anuncioSchema.statics.deleteAll = function(filter){
  Anuncio.remove({} ,function (err){
    if (err) return cb (err);
    console.log (' Delete BD ')
    return cb (null);
  });
};



// creamos el modelo

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;
