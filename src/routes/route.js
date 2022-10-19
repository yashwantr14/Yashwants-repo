const express = require('express');
const router = express.Router();

router.get('/sol2',function(req,res){
    
const arr=[33,34,35,36,37,38,40]
let sum1=arr.reduce((x,y)=>x+y)
let n=arr.length+1
let first=arr[0]
let last=arr[arr.length-1]
let sum2=n*(first+last)/2 // (n+1)*(first+last)/2
let missingNumber=sum2-sum1

res.send("The missing number is : " + missingNumber)
})

module.exports = router;