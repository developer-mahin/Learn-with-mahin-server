const express = require('express')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
const courses = require("./data/courses.json")

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get("/courses/:id", (req, res)=>{
    const id = req.params.id
    const coursesId = courses.find(course => course._id === id)
    res.send(coursesId)
})

app.get("/getPremium/:id", (req, res)=>{
    const id = req.params.id
    const cartId = courses.find(cart => cart._id === id)
    console.log(id, cartId)
    res.send(cartId)
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})