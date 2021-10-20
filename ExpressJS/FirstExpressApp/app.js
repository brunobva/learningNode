const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    // res.send('First Express App');
    // res.send('First Express App');
    res.send('<a href="/contact">Contact Us!</a> <br> <a href="/about">About Us!</a>');
});

app.get('/contact', (req, res)=> {
    res.send('<h1>Contact Us Page</h1> <br> <a href="/">Back to Home</a>')
}); 

app.get('/about', (req,res)=> {
    res.send('<h1>About Us Page</h1> <br> <a href="/">Back to Home</a>')
});

// The orders of routes matter a lot, let the * route for the last always

app.get('*', (req, res)=> {
    res.send('404. This Page does not exists. <br> <a href="/">Back to Home</a>')
})

app.listen(3000, ()=> {
    console.log('Server is running on 3000 port!')
});