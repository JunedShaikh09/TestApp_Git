console.log("Welcome to deployment");

import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{

    console.log(`App is listening at port ${PORT} `)
})