const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const senEmail = require('./controllers/senEmail.js');


const app = express();
const PORT = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("Portfolio: Backend")
})

app.post('/senEmail', senEmail);


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}

start()