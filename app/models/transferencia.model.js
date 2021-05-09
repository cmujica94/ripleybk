module.exports = (sequelize, Sequelize) => {
    const Transferencia = sequelize.define("transferencia", {
      nombre: {
        type: Sequelize.STRING
      },
      rut: {
        type: Sequelize.STRING
      },
      banco: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.INTEGER
      }
    });
  
    return Transferencia;
  };