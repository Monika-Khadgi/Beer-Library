import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.get('/api',(req,res) => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data => res.json(data))
})
app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
})