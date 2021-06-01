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
    const output = {
        id: Math.random().toFixed(digits).slice(2),
        time: `${day}.${month}.${year} ${hours} UTC`,
    };
    return output;
}

// Time 10 million times - about 16 seconds
/* console.log(new Date()); 
for (let i = 0; i < 10000000; i++) {
    dummyDataGenerator(11, '2010-01-01T00:00:00', '2021-06-01T12:12:00');
}
console.log(new Date()); */



