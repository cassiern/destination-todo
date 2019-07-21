const express = require('express');
const router = express.Router();
const Travel = require('../models/traveler');



//(read) index route
router.get('/', (req, res)=> {
	Travel.find({}, (err, travelers)=>{
		console.log(travelers, '<-- this is allTheTravelers ')
		if(err){
			res.send(err)
		}else{
			res.render('traveler/index.ejs', {//DONT TOUCH THIS IT'S HITTING THE ROUTE
			 travelers: travelers
			})
		}
	});
});


router.post('/', (req, res) =>{
	Travel.create(req.body, (err, travel)=>{
		console.log(travel)
		if(err){
			res.send(err, '<-- error in create')
		}else{
			res.redirect('/travelers')
		}
	})
})
router.get('/new', (req, res)=>{
		res.render('traveler/new.ejs')
})


//update route

router.get('/:id/edit', (req, res)=> {
	Travel.findById(req.params.id, (err, editTravel) =>{
		console.log(editTravel, '<-- editTravel')
			if(err){
				console.log(err)
			}else{
			res.render('traveler/edit.ejs', {
			traveler: editTravel
			})
		}
	})
})


router.put('/:id', (req, res)=>{
	Travel.findByIdAndUpdate(req.params.id, req.body, 
		(err, updatedTravels)=>{
			if(err){
				console.log(err)
			}else{
		console.log(req.body, '<-- req.body in put route')
		console.log(updatedTravels, '<-- put route')
		res.redirect('/travelers')
		}
	})
})




//delete route
router.delete('/:id', (req, res)=> {
	Travel.findByIdAndDelete(req.params.id, (err, deletedTraveler)=> {
		console.log(deletedTraveler, '<-- deletedTraveler')
		console.log(req.params.id, '<-- req.params')
		res.redirect('/travelers')
	})
})



//show route
router.get('/:id', (req, res)=>{
	Travel.findById(req.params.id, (err, eachTraveler)=> {
		if(err){
			res.send(err)
		}else{
			res.render('traveler/show.ejs', {//YOU ARE HITTING THE ROUTE
				traveler: eachTraveler
			})
		}
	})
})





module.exports = router;

