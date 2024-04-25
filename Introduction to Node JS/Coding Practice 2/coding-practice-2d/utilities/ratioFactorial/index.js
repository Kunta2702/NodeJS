const factorial=require("../factorial/index.js")

const ratio=require("../ratio/index.js")
function ratioAndFactorial(a,b,c){
    return {
ratio:ratio(a,b),
factorial:factorial(c)
    }
}
console.log(ratioAndFactorial(2,1,3))
module.exports=ratioAndFactorial
