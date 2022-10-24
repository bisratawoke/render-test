const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.static(path.resolve(__dirname,'public')))


app.listen(process.env.PORT,() => console.log(`[STATUs] server started on port ${process.env.PORT}`))