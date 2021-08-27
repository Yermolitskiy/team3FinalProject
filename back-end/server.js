const express = require('express')
const cors = require('cors')
// const cookie_parser = require('cookie-parser')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')
const {resolve} = require('path')
require('dotenv').config()

const app = express()

app.use(cors({origin:'*'}))
// app.use(cookie_parser())
app.use('/public',express.static(resolve(__dirname , './public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/auth' , authRoutes)
app.use('/api/posts' , postRoutes )

app.use('*' , (req , res) => res.send('wrong path'))




app.listen(process.env.API_PORT , () => {
    console.log(`Server is up and running on port ${process.env.API_PORT}`)
})