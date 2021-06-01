const {performance} = require('perf_hooks');

function createData(idLength, startDate, endDate, numberOfElements = 1) {

    if (numberOfElements <= 0) {
        console.log('numberOfElements must be greater than 0.');
        throw new Error();
    }

    if (idLength <= 0) {
        console.log(`Error: idLength must be greater than 0.`);
        throw new Error();
    }

    const start = new Date(Date.parse(startDate));
    const end = new Date(Date.parse(endDate));

    if (start > end) {
        console.log(`Error: startDate must be earlier than endDate.`);
        throw new Error();
    }

    const data = [];
    for (let n = 0; n < numberOfElements; n++) {
        const idValue = Math.ceil(Math.random() * 10**idLength-1);
        const idString = idValue.toPrecision(idLength).replace('.','');
        const startDateInMillis = +start;
        const endDateInMillis = +end;
        const randomOffsetInMillis = Math.ceil(Math.random() * (endDateInMillis - startDateInMillis));
        const createDate = new Date(startDateInMillis + randomOffsetInMillis);

        const template = 'DD.MM.YYYY HH:MM:SS UTC';
        const createDateString = template
            .replace('DD', String(createDate.getDate()).padStart(2,'0'))
            .replace('MM', String((createDate.getMonth() + 1)).padStart(2,'0'))
            .replace('YYYY', String(createDate.getFullYear()))
            .replace('HH', String(createDate.getHours()).padStart(2,'0'))
            .replace('MM', String(createDate.getMinutes()).padStart(2,'0'))
            .replace('SS', String(createDate.getSeconds()).padStart(2,'0'))

        const dataElement = {
            id: idString,
            time: createDateString,
        }
        data.push(dataElement);
    }
    return data;
}

const array=[]
for(y=0;y<10000000;y++){
    array.push(createData(8,"December 17, 1995 03:24:00","June 28, 2017 07:55:00"))
}
console.timeEnd("test")