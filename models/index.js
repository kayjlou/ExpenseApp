const {Schema, model} = require('mongoose')
const db = {
    Expenses: require('./Expenses.js')(Schema,model)
}

module.exports = db