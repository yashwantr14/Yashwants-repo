const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})




router.get('/myprofile/:name/:number',function(req,res){
    let reqParam=req.params
    console.log('The required information are '+reqParam.name + ' contact details : '+reqParam.number)
    res.send('My First Route Path !')
})
    /*    ASSIGNMENT     */

    // PROBLEM 1

router.get('/movies',function(req,res){
    const moviesArray=['Rang de basanti','The shining','Inception','Batman begins']
    res.send(moviesArray)
})


    //PROBLEM 2

router.get('/movies/:indexNumber',function(req,res){
    const moviesArray=['Rang de basanti','The shining','Inception','Batman begins']
    let indexNumber=req.params.indexNumber
    if(indexNumber<moviesArray.length){
    res.send(moviesArray[indexNumber])
    }else{
        res.send('Enter valid index number')
    }

})

router.get('/films',function(req,res){
    const objArray=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

    res.send(objArray)
       
})
module.exports = router;