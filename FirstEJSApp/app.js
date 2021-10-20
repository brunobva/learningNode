const express = require('express');
const app = express();

// app.get('/demo', (req, res)=> {
//     res.render('index.ejs');
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/user/:id/:username', (req, res)=> {
    let userId = req.params.id;
    let user = req.params.username;

    res.render('index.ejs', {id : userId, username : user });
})

app.listen(3000, ()=> {
    console.log('Server started at port 3000.');
})