'use strict';

const  express = require('express');
const router = express.Router();
const Usuario = require('../../models/Usuario');
const jwt = require('jsonwebtoken');
const localConfig = require('../../localConfig');


router.post('/login', async (req,res,next)=> {
 try {
// recogemos credenciales
  
  const email = req.body.email;
  const password = req.body.password;

  //buscamos en base de datos
  const usuario = await Usuario.findOne({email: email}).exec();

  // si encontramos al usuario 
  if (!usuario){
    res.json({success:true , message : 'invalid credentials'});
    return;
 }

  //comprobamos su password
 if (password !== usuario.password) {
    res.json({success:true , message : 'invalid credentials'});
    return; 
  }

 //creamos un token JWT 
 jwt.sign({ user_id: usuario._id }, localConfig.jwt.secret,{
    expiresIn:  localConfig.jwt.expiresIn
 }, (err, token) => {
     if (err) {
       next(err);
       return; 
     }
  // respondemos al cliente dandole el JWT  
  res.json({success: true, token: token });
 })


 }  catch(err) {
  next(err);      
 }
});

 module.exports = router;