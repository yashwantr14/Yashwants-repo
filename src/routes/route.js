const express = require('express');
const router = express.Router();


/*ASSIGNMENT:
you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
take input in query param as votingAge..and for all the people above that age, change votingStatus as true
also return an array consisting of only the person that can vote

WRITE A POST API TO THE ABOVE


take this as sample for array of persons:
let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]*/

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 41,
        votingStatus: false
    }
]

//for loop approach
router.post('/votingAge', function (req, res) {
    let votingAge = req.query.votingAge
    let persons2 = []
    for (let i=0; i<persons.length; i++) {

        if (persons[i].age >= votingAge) {
            persons[i].votingStatus = "true"
            persons2.push(persons[i])
        }
    }
    res.send({ Persons_who_can_vote: persons2})
})

//without for loop
router.post('/votingAge1', function (req, res) {
    let votingAge = req.query.votingAge
    let persons3=persons.filter(x=>x.age>=votingAge)
    persons3.map(x=>x.votingStatus="true")
    res.send({ Persons_who_can_vote: persons3})
})
module.exports = router;