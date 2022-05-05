const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
    res.send('<h3>Go to /home</h3>'); 
});

app.get('/home', (req, res) => { 
    console.log(req); 
    res.send('<h1>Hello World!</h1>'); 
});

app.listen(port, () => console.log(`My first express app is running on http://localhost:${port}/home`));
 
