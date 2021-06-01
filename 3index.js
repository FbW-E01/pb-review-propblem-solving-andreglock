// Estimate 35 minutes - start at 11:38 - done at 12:16

function dummyDataGenerator (digits, start, end) {
    const initial = Date.parse(start);
    const final = Date.parse(end);
    const randomDate = ((final - initial) * Math.random()) + initial;
    const date = new Date(randomDate).toISOString();
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const hours = date.slice(11, 19);
    let number=""
    for(i=0;i<digits;i++){
        number+= Math.floor(Math.random()*10)
    }
    const output = {
        id: number, // id: Math.random().toFixed(digits).slice(2),
        time: `${day}.${month}.${year} ${hours} UTC`,
    };
    return output;
}

console.time("test");
const array=[]
for(y=0;y<10000000;y++){
    array.push(dummyDataGenerator(8,"December 17, 1995 03:24:00","June 28, 2017 07:55:00"))
}
console.timeEnd("test");