import express from 'express'
import bodyParser from 'body-parser'
import Menu from './Menu.js'

let app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/breakfast', (req, res) => {
  res.send('<h1>Breakfast</h1>' + Menu.getBreakfast())
})

app.post('/', (req, res) => {
  const meal = req.query.meal
  const name = req.query.name
  const price = req.query.price
  const sale = req.query.sale

  if (meal === 'breakfast') {
    Menu.addBreakfast(name, price, sale)
  }
  res.sendStatus(200)
})

app.listen(3000, () => console.log('Listening on Port 3000'))
