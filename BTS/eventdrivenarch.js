let events = require('events');

// creating an event emitter
let eventEmitter = new events.EventEmitter();

// This is the event listener
eventEmitter.on('connection', () => {
    console.log('Connection Successfull.');
})

// firing the connection event
eventEmitter.emit('connection');
