moduele.exports = (Schema, model)=>{
    const Expenses = new Schema({
        title: {type: String},
        category: {type: String},
        dateSpent: {},
        amount: {},
        isCash: {type:boolean}
    })
    return model('Expenses', Expenses)
}
