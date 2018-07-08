 'use strict';

  const jwt = require('jsonwebtoken');
  const localConfig = require('../localConfig');

  //exporto una funcion que devuelve un middleware
   // para comprobar JWT
  module.exports = function() {
     return (req, res, next) => {
       // recoger el token de la peticion
      const token = req.body.token || req.query.token || req.get('x-access-token');
     // si no hay token , respondo no autorizado
       if (!token){
           const err = new Error ('no token provided')
           err.status = 401;
           next(err);
           return;
       }
          // si hay token , verifico el token y dejo pasar al sig middleware
          jwt.verify(token, localConfig.jwt.secret,(err, decoded) => {
             if (err){
                 err.status = 401
                 next(err);
                 return;
             }
             req.user_id = decoded.user_id;
             next();
          });
    };
}