const db = require("../models");
const Transferencia = db.transferencias;
const Op = db.Sequelize.Op;

// Crear Transferencia
exports.create = (req, res) => {
    // Validar request
    if (!req.body) {
        res.status(400).send({
            message: "contenido vacio"
        });
        return;
    }

    // Crear transferencia
    const transferencia = {
        nombre: req.body.nombre,
        rut: req.body.rut,
        banco: req.body.banco,
        tipo: req.body.tipo,
        monto: req.body.monto
    };

    // guardar en db
    Transferencia.create(transferencia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error al guardar transferencia."
            });
        });
};

// Select todas las transferencias
exports.findAll = (req, res) => {

    Transferencia.findAll()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error al obtener transferencias"
            });
        });
};