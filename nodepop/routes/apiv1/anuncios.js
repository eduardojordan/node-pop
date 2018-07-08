'use strict';

const express = require ('express');
const router = express.Router();
const Anuncio = require ('../../models/Anuncio');
const basicAuth = require('../../lib/basicAuth');
const jwtAuth = require('../../lib/jwtAuth');

//router.use(basicAuth(('admin','1234')); 

/*
/** GET  */
router.get ('/',jwtAuth(), async (req, res, next) => {
 try{
     // Cual es el ususario
     console.log('el usuario autenticado es:', req.user_id);
 
 const skip = parseInt(req.query.skip);
 const start = parseInt(req.query.start);
 const limit = parseInt(req.query.limit);
 const nombre = req.query.nombre;
 const precio = req.query.precio;
 const venta = req.query.venta;
 const fields = req.query.fields;
 const sort = req.query.sort; // ordenar
 const tags = req.query.tags;
 //creamos un filtro vacio
 const filter = {};

 if (nombre) {// solo añado el filtro cuando tengo que filtrar
     filter.nombre = nombre;
 }

if (precio){
    filter.precio = precio;
}
if (venta){
    filter.venta = venta;
}

if (tags){
    filter.tags = tags;
}





const anuncios = await Anuncio.list(filter, skip, start,limit, fields, sort,tags) // await espera que se resuelva la promesa
res.json({success: true, result: anuncios});

}catch(err){
   next(err); 
}
});

/**POST crear un anuncio*/
router.post('/', async (req, res, next) => {
//console.log(req.body);
 
// creamos el anuncio en memoria
const anuncio = new Anuncio(req.body);
try{

 // version async /await
const anuncioGuardado = await anuncio.save();
res.json({success: true, result: anuncioGuardado});
 }catch (err){
     next (err);
 }
// });
});

/** PUT actualiza anuncio */

router.put('/:id', async (req,res,next) => {
    try {
        const _id = req.params.id;
        const data = req.body;

    const anuncioModificado = await Anuncio.findByIdAndUpdate({_id:_id }, data, {new :true }).exec()
    res.json({success: true, result: anuncioModificado });
    } catch (err){
        next(err);
    }
});


module.exports = router;