import fs from 'fs'

const makeListFromData = jsonData => {
  const list = []

  jsonData.forEach(item => {
    list.push(`<li>${item.name}: $${item.price}</li>`)
  })

  return list.join('')
}

const getBreakfast = () => {
  const data = fs.readFileSync('breakfast.json')
  const jsonData = JSON.parse(data)
  const breakfastList = makeListFromData(jsonData)
  return breakfastList
}

const addBreakfast = (name, price, sale) => {
  const data = fs.readFileSync('breakfast.json')
  const jsonData = JSON.parse(data)
  jsonData.push({ name, price, sale })
  fs.writeFileSync('breakfast.json', JSON.stringify(jsonData, null, 2))
}

export default {
  getBreakfast,
  addBreakfast
}
