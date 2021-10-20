// requesting the use of http module
const http = require('http')

// lets call the casual module
const casual = require('casual')

// Request and reponse from Server
const server = http.createServer((req, res)=> {
    res.end(casual.name)
});

// Server is the variable and list define the port that will communicate with our webserver
server.listen(3000, ()=> {
    console.log('Server started and running on port 3000.')
});