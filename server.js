const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOpciones = {
  origen: "http://localhost:8081"
};

app.use(cors(corsOpciones));

// parsear requests application/json
app.use(bodyParser.json());

// parsear requests application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//base de datos
const db = require("./app/models");
db.sequelize.sync();

// ruta angular
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

require("./app/rutas/destinatario.routes")(app);
require("./app/rutas/transferencia.routes")(app);

// setear puerto, escuchar requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}.`);
});