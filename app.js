import express from 'express'
import bodyParser from 'body-parser'
import Menu from './Menu.js'

let app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/breakfast', (req, res) => {
  res.send('<h1>Breakfast</h1>' + Menu.getBreakfast())
})

app.listen(3000, () => console.log('Listening on Port 3000'))
