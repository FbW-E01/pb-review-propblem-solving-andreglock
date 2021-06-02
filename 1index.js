
// Estimate 12 minutes - start at 11:22 - done at 11:28

function examine(...input) {
    const retArray = []
    for(let i = 0; i < input.length; i++) {
        if (input[i].isArray) {
            retArray.push('array');            
        } else {
            retArray.push(typeof input[i]);
        }
    }
    return retArray;
}

console.log(examine({}));
console.log(examine("hi"));
console.log(examine(3, 1));
console.log( examine(3, "hi"));
console.log(examine([], ()=>{}));