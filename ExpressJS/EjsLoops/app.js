const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/questions', (req, res) => {
	
	let questions = [
	{title: "What is node.js?", user : "John", votes : "10"},
	{title: "What is Javascript", user : "John", votes : "7"},
	{title: "What is Express?", user : "Paul", votes : "6"},
	{title: "Whats is MongoDb?", user: "Mike", votes: "8"}
	]
		
	res.render('index', {questions:questions});
})

app.listen(3000, ()=> {
	console.log('Server started at port 3000');
}) 