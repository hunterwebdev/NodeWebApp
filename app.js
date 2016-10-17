import express from 'express'
import Menu from './Menu.js'

let app = express()

app.get('/breakfast', (req, res) => {
  res.send('<h1>Breakfast</h1>' + Menu.getBreakfast())
})

app.listen(3000, () => console.log('Listening on Port 3000'))
