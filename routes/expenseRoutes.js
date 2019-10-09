const axios = require('axios')

const { Expenses } = require('../models')

module.exports = app =>{
  //Get drink by name search
//   app.get('/search/:name', (req, res) => {
//     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.name}`)
//       .then(({ data }) => console.log(data))
//       .catch(e => console.log(`ERROR IS ---------- ${e}`))
//   })


//Get expense by date
app.get('/expenses', (req,res)=>{

})

//Get all expenses
app.get('/expenses', (req,res)=>{
    Expenses.find({})
    .then(expenses => res.json(expenses))
    .catch(e => console.log(e))
})

//Add expense
app.post('/expenses', (req,res)=>{
    
})

//Update expense
app.put('/expenses', (req,res)=>{
    
})
}