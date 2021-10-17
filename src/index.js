const express = require('express')
const app = express()
const port = process.env.PORT || "8080";


app.get('/', (req, res) => {
    let message = 'Hello World'
    res.send(message)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
