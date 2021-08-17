const express = require('express');
const app = express();

const path = require('path');

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'bcbabf4b76004681aa03e99652d0cd7e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json());

const port = process.env.PORT || 4040;

// rollbar.log('rollbar')

app.get('/', function(req, res) {
    rollbar.log('App.get homepage hit')
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(port, function() {
    console.log(`Server listening on ${port}`)
})