const printDate=function(){
    const today=new Date()
    console.log(today.getDate())
}
const printMonth=function(){
    const today=new Date()
    console.log(today.getMonth())
}
const batchInfo=function(){
  
    console.log("Lihtium, W3D5, the topic for today is Nodejs module system")
}
module.exports.Date=printDate
module.exports.Month=printMonth
module.exports.Info=batchInfo
