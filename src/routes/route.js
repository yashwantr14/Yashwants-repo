const express = require('express');
const router = express.Router();

const prob1 = require('../logger/logger')
const prob2 = require('../util/helper')
const prob3 = require("../validator/formatter")
const lodash = require('lodash')
router.get('/test-me', function (req, res) {



    //prob1.welcome()
    //prob2.Date()
    //prob2.Month()
    //prob2.Info()
    //prob3.trim("       functionup     ")
    //prob3.lowKey("FUNCTIONUP")
    //prob3.upKey("functionup")

    //--->  4th problem     <--


    const months=['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec']
    console.log(lodash.chunk(months,4))

    const odd=[]
    for(let i=0; i<10; i++){
    odd.push(2 * i + 1)
    }
    console.log(lodash.tail(odd))

    const a=['1']
    const b=['1','2']
    const c=['1','2','3']
    console.log(lodash.union([...a],[...b],[...c]))


    console.log(lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))

    
    res.send('My second api!')
});

module.exports = router;

