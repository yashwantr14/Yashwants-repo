const express = require('express');
const router = express.Router();

let players=[
    {
        "name": "manish",
        "dob": "14/10/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "14/10/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },  {
        "name": "lokesh",
        "dob": "14/10/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    }
]

router.post('/players',function(req,res){
    let body=req.body
    players.push(body)
    console.log(body)
    res.send({data: players , status : true})
})
module.exports = router;