const { Sequelize } = require('Sequelize')
const db = new Sequelize('test', 'root', '', { host: 'localhost', dialect: 'mysql' })
db.authenticate().then(() => { console.log("We're connected.") }).catch(err => { console.log(err) })
module.exports = db