module.exports = (Schema, model)=>{
    const Expenses = new Schema({
        title: {type: String},
        category: {type: String},
        dateSpent: {},
        amount: {},
        isCash: {}
    })
    return model('Expenses', Expenses)
}
