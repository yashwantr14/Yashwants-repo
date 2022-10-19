const express = require('express');
const router = express.Router();

router.get('/sol1',function(req,res){
    
const arr=[1,2,3,5,6,7,8,9]
let n=arr[arr.length-1]
let sum1=n*(n+1)/2
let sum2=0
for(let i=0; i<arr.length; i++){
    sum2+=arr[i]
}
let missingNumber=sum1-sum2
console.log(missingNumber)
res.send("The missing number is : " + missingNumber)
})

module.exports = router;