function fon(){
    const human = {
        gender: "male",
        age: 9,
        name: "John"
    }
    return human
}

let a = fon().age
let g = fon().gender
let n = fon().name

const q = [a, g, n]

let obj = function(){
    for (i = 0; i < q.length; i++){
        console.log(q[i])
    }
}
    
module.exports = obj;