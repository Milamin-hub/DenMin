let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let shuffle = function(arr) {
    for (let i = arr.length - 1; i > 0; i-- ){
        let ar = arr[i] 
        let rnd = Math.floor(Math.random() * (i + 1))

        arr[i] = arr[rnd]
        arr[rnd] = ar
    }
    return arr;
}

console.log(shuffle(arr1) + ',')
