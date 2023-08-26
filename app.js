const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '/frontend/build/index.html')));


app.get('/names', (req, res) => {
    res.send('Andrewwwwwwwwww');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


