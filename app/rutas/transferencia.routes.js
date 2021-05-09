module.exports = app => {
    const transferencias = require("../controllers/transferencia.controller.js");
  
    var router = require("express").Router();
  
    // Crear transferencia
    router.post("/", transferencias.create);
  
    // select todas las transferencias
    router.get("/", transferencias.findAll);
  
    app.use('/api/transferencias', router);
  };