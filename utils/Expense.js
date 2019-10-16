// import axios from 'axios'
const app = express()

const Expense = {
    //custom founces with routes
  getAll: _ => app.get('/expenses'),
  editExpense: id => app.put(`/expenses/${id}`),
  deleteExpense: id => app.delete(`/expenses/${id}`)
}

export default Expense