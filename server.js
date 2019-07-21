const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
require('./db/db');
const travelController = require('./controllers/travelers')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/travelers', travelController);

app.listen(3000, ()=> {
	console.log('Your port 3000 is listening!')
})


