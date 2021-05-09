const db = require("../models");
const Destinatario = db.destinatarios;
const Op = db.Sequelize.Op;

// Crear Destinatario
exports.create = (req, res) => {
    // Validar request
    if (!req.body) {
        res.status(400).send({
            message: "contenido vacio"
        });
        return;
    }

    // Crear destinatario
    const destinatario = {
        rut: req.body.rut,
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        banco: req.body.banco,
        tipoCuenta: req.body.tipoCuenta,
        numeroCuenta: req.body.numeroCuenta
    };

    // guardar en db
    Destinatario.create(destinatario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error al guardar destinatario."
            });
        });
};

// Select todos los Destinatarios
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Destinatario.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error al obtener destinatarios"
            });
        });
};