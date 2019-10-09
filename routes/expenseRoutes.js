const axios = require('axios')

const { Expenses } = require('../models')

  //Get drink by name search
//   app.get('/search/:name', (req, res) => {
//     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.name}`)
//       .then(({ data }) => console.log(data))
//       .catch(e => console.log(`ERROR IS ---------- ${e}`))
//   })