module.exports = (sequelize, Sequelize) => {
    const Destinatario = sequelize.define("destinatario", {
      rut: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      banco: {
        type: Sequelize.STRING
      },
      tipoCuenta: {
        type: Sequelize.STRING
      },
      numeroCuenta: {
        type: Sequelize.INTEGER
      }
    });
  
    return Destinatario;
  };