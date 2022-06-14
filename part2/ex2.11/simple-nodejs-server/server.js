const express = require('express')
const app = express()

const greeting = (name) => {
  return `Hello there ${name}! How are you doing?`
}

// Again problems with volumes on Winwods. Still pretty sure this would work on Linux as is
app.get('/hello', (req, res) => {
  const { name } = req.query
  if(!name){
    return res.send('You idiot! Give a name at least!. Type /hello?name=yourname')
  }
  const hello = greeting(name)
  res.send(hello)
  return
})

app.get('*', function (_req, res) {
  res.redirect('/hello?name=Jorma')
})

app.listen(3000, () => {
  console.log('App listening in port 3000')
})