const fs = require('fs');
const xlsx = require('xlsx');
const path = './rep/Сделки_2020-01-01--2021-01-01.xlsx'

function parsingFile(path) {
    const wb = xlsx.readFileSync(path, { cellDates: true });            // читаем файл xlsx
    const ws = wb.Sheets['Сделки'];                                     // получаем лист 'Сделки'
    const data = xlsx.utils.sheet_to_json(ws);
    const clientID = data[0]['Номер договора'];
    fs.writeFileSync(`./datajson/${clientID}.json`, JSON.stringify(data, null, 2));
    console.log(data.length);
    console.log(data);
    return clientID;
}
console.log(parsingFile(path));
