const express = require('express');
const app = express();

app.set

app.get('/login', (req, res)=> {
    res.render('login');
})


app.listen(3000, ()=> {
    console.log('Server running on port 3000.')
})