const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const travelSchema = new Schema({
	locationName: String,
	forHowLong: Number,
})

const Travel = mongoose.model('Travel', travelSchema)

module.exports = Travel;









