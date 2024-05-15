import express from 'express'
require('dotenv').config()
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('./express-react-views').createEngine())

app.use('/places', require('./controllers/places').default)

app.get('/', (req, res) => {
    res.render('Hello!')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
