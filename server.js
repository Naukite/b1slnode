const emoji = require('node-emoji')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require("express")
const app = express()
const ordersRouter = require('./routes/Orders')

app.use('/api/orders', ordersRouter)

app.get('/api/ping', (req, res) => {
    res.send(emoji.emojify("pong!!:8ball: :8ball: :8ball:"))
})

app.listen(process.env.PORT, () => {
    console.log(`SERVICELAYER: ${process.env.SERVICELAYER}`)
    console.log(emoji.emojify(`:rocket::rocket::rocket: --> Listening at port: ${process.env.PORT}...`))    
}) 