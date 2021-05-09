module.exports = app => {
    const destinatarios = require("../controllers/destinatario.controller.js");
  
    var router = require("express").Router();
  
    // Crear destinatario
    router.post("/", destinatarios.create);
  
    // select de todos los destinatarios
    router.get("/", destinatarios.findAll);
  
    app.use('/api/destinatarios', router);
  };