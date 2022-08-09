const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});
// #1
router.get('/movies', function (req, res){
    let movies = ['rang de basanti','the shining','lord of ring','batman begins']
    res.send(movies)
})
// #4
router.get('/films', function (req, res){
    let film = [ { "id": 1,"name": "The Shining" }, {"id": 2, "name": "Incendies"}, {"id": 3,"name": "Rang de Basanti"}, {"id": 4,"name": "Finding Nemo"}]
    res.send(film)
})



router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;