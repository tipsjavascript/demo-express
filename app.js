const express = require('express');
const app = express();


const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`It's work!....`)
})


app.listen( PORT, () => {
    console.log('Okay');
})
