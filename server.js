const express = require ('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Im coming from digital ocean")
})

app.listen(4000, () => {
    console.log(`Listening on 4000`)
})
