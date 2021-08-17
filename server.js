const express = require('express');
const app = express();

const path = require('path');

app.use(express.json());

const port = process.env.PORT || 4040;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(port, function() {
    console.log(`Server listening on ${port}`)
})