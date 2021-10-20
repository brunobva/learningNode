const express = require('express');
const app = express();

app.get('/questions/:id/:title/', (req, res)=> {
    res.send('This route handles all questions.')
})

app.get('/users/:id/:username', (req, res)=> {
    let userId = req.params.id;
    let user = req.params.username;
    
    res.send('This route will handle '+user+' profile that has the ID: '+userId+'');
})

app.listen(3000, ()=> {
    console.log('Server started on port 3000.');
})