import express from 'express';
import path from 'path'

const app = express();

app.use(express.static(path.join(__dirname, 'frontend/build')));


app.get('/names', (req, res) => {
    res.send('Andreqq');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


