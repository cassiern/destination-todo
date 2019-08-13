const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/travel';
const db = mongoose.connection;

mongoose.connect(connectionString, 
	{useNewUrlParser: true,
	useCreateIndex: true});

db.on('connect', ()=>{
	console.log(`Mongoose connected to ${connectionString}`)
})
db.on('disconnect', ()=>{
	console.log(`Mongoose disconnected to ${connectionString}`)
})
db.on('error', (err)=>{
	console.log(`Mongoose error: ${err}`)
})











