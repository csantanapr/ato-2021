const express = require('express')
const { echo } = require('./utils');
const app = express()
const port = process.env.PORT || "8080";


app.get('/', (req, res) => {
    let message = 'Hello Demo'
    res.send(echo(message))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
