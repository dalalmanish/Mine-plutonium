const express = require('express');
// const abc = require('../introduction/intro')
const bcd = require('../logger/logger')
const dan =require('../util/helper')
const man =require('../validator/formattor')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(bcd.name())
    // abc.printName()
    bcd.name();
    dan.date();
    dan.Batch();
    man.b();
    man.p();
    man.q()
    res.send('My second ever api!')
    // res.send('My first day of node.js !')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason