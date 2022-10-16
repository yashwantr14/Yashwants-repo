const trimed=function(data){
    let a=data   
    console.log(a.trim())
}

const lowKey=function(data){
    let b=data
    console.log(b.toLowerCase())
}

const upKey=function(data){
    const c=data
    console.log(c.toUpperCase())
}

module.exports.trim=trimed
module.exports.lowKey=lowKey
module.exports.upKey=upKey