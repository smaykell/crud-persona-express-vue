const { DataTypes } = require('Sequelize')
const db = require("../database")

const Persona = db.define('persona', {
    dni: { type: DataTypes.STRING(8), unique: true },
    apellidos: { type: DataTypes.STRING(30) },
    nombres: { type: DataTypes.STRING(8) },
    fecha_nacimiento: { type: DataTypes.DATE },
    peso: { type: DataTypes.DOUBLE },
    altura: { type: DataTypes.DOUBLE }
}, {
    freezeTableName: true
})

module.exports = Persona