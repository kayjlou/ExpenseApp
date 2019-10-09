moduele.exports = (Schema, model)=>{
    const Expenses = new Schema({
        title: {type: String},
        category: {type: String},
        dateSpent: {},
        amount: {}
    })
    return model('Expenses', Expenses)
}